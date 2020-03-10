resource "linode_instance" "sprofile-instance" {
  label = "sprofile-instance"
  image = "linode/ubuntu18.04"
  region = "us-central"
  type = "g6-nanode-1"
  authorized_keys = ["xxx"]
  root_pass = "xxx"
  group = "web"
  tags = [ "web" ]
  swap_size = 256
  private_ip = true
}
