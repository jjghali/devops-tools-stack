variable "app_name" {
  type        = string
  default     = "devopsStackApp"
  description = "Name of the app"
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
variable "do_token" {}
