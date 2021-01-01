terraform {
    backend "s3" {
        bucket = "terraformcontainerbucket"
        key    = "state.tfstate"
        region = "us-east-1"
    }
}