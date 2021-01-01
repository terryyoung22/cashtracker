
# provider.tf

# Specify the provider and access details
provider "aws" {
  # shared_credentials_file = "$HOME/.aws/credentials"
  # profile                 = "tyoung"
  region                  = var.aws_region
}