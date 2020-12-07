module "digitalocean" {
  source   = "./modules/digitalocean"
  app_name = "devopsApp-Sample"
}

# module "aws" {
#   source      = "./modules/aws"
#   projectname = "terraforming"
#   environment = var.environment
# }
