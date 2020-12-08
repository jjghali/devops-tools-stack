# variable "do_token" {
#   sensitive = true
# }
variable "do_region" {
  type        = string
  default     = "nyc3"
  description = "DigitalOcean region for the App"
}
variable "do_instance_size" {
  type        = string
  default     = "basic-xxs"
  description = "DigitalOcean app platform size"
}

variable "service_name" {
  type        = string
  default     = "devops-stack-app-service"
  description = "Service name that will be used in DigitalOcean App platform"
}

variable "git_repository" {
  type        = string
  default     = "https://github.com/jjghali/devops-tools-stack.git"
  description = "URL to the Git repository"
}

variable "git_branch" {
  type        = string
  default     = "master"
  description = "Git branch you want to deploy the app from"
}

variable "app_name" {
  type        = string
  default     = "devops-stack-app"
  description = "Name of the app"
}
