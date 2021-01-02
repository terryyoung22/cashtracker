/////////////////////////////////////////////////////
// Dependencies section//////////////////////////////
/////////////////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var charge = ["charge 1", "charge 2"]; //placeholders for added charge
var complete = ["Removed charge"]; //placeholders for removed charge
var values = ["55"];

/////////////////////////////////////////////////////
// app.use/app.get section///////////////////////////
/////////////////////////////////////////////////////
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //render css files

//////////////////////////////////////////////
// app.post section///////////////////////////
//////////////////////////////////////////////
app.post("/addcharge", function(req, res) {
    var newcharge = req.body.newcharge;
    //add the new charge from the post route
    charge.push(newcharge);
    res.redirect("/");
});

app.post("/removecharge", function(req, res) {
    var completecharge = req.body.check;
    //check for the "typeof" the different completed charge, then add into the complete charge
    if (typeof completecharge === "string") {
        complete.push(completecharge);
        //check if the completed charge already exits in the charge when checked, then remove it
        charge.splice(charge.indexOf(completecharge), 1);
    } else if (typeof completecharge === "object") {
        for (var i = 0; i < completecharge.length; i++) {
            complete.push(completecharge[i]);
            charge.splice(charge.indexOf(completecharge[i]), 1);
        }
    }
    res.redirect("/");
});


app.post("/refresh", function(req, res) {
    res.redirect("/");
});

/////////////////////////////////////////////////////
// App.get section///////////////////////////////////
/////////////////////////////////////////////////////
//render the ejs and display added charge, completed charge
app.get("/", function(req, res) {
    res.render("index", { charge: charge, complete: complete });
});

//add route

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("server is running on port 3000");
});