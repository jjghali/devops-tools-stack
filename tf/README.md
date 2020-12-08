Set this ENV variable for DigitalOcean
```
export DIGITALOCEAN_TOKEN=<personal-access-token>
```
Terraform apply
```
terraform apply -var-file="applications/digitalocean/env/dev.tfvars"  
```
Terraform destroy
```
terraform destroy -var-file="applications/digitalocean/env/dev.tfvars"  
```
