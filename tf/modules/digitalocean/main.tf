terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.3.0"
    }
  }
}

provider "digitalocean" {
  # token = var.do_token
}

resource "digitalocean_app" "do-app" {
  spec {
    name   = var.app_name
    region = var.do_region

    service {
      name = "${var.app_name}-service"

      instance_count     = 1
      instance_size_slug = var.do_instance_size

      git {
        repo_clone_url = var.git_repository
        branch         = var.git_branch
      }
    }
  }
}
