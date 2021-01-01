
terraform {
    backend "s3" {
        bucket = "terraformcontainerbucket"
        key    = "state.tfstate"
    }
}