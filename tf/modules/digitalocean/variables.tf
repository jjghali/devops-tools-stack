# variable "do_token" {}
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
  default     = "devopsStackApp-service"
  description = "Service name that will be used in DigitalOcean App platform"
}


