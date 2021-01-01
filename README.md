# Cash Tracker

## Purpose
This app is to help track purchases of what you have made. Currently it makes POST to the page of however you choose to input and track your spending, or you can modify this to become a todo list or whatever else you want

## Install and Run
### Commands
* Run `npm install` on the root of the directory for dependencies
* Then to start the app:
    * `node index.js` - use only
    * `nodemon start` - If you want to make live modification to the app
* should output  `server is running on port 3000`
 ### Container use
    * `docker build -t <yourContainerImageName> .
    * `run -dit --name <nameForContainer> -p 3000:3000 <yourContainerImageName>`

## Plans
* For cash tracking, have you set a budge before hosting or ask for it on creation and then have purchases subtract on input
* Create multiple page app so you dont ahve to adjust code to use todo list or cash tracking app
* Better styling

## Sources
- [ECS TF](https://appychip.com/automate-ecs-fargate-cluster-creation-using-terraform/)