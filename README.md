## Install k3s Lab in `AWS Spot EC2` via `AWS CDK` infra

### Infra 
```bash
# create infra
cd infra/
cdk deploy --require-approval never 

# connect k3s node
aws ssm start-session ${INSTANCE_ID}
```
![aws cdk-spot-one](./images/aws-cdk-spot-one.png)
### K3s Manual create cluster via [k3d](https://k3d.io/)
```bash
# add /usr/local/bin/ to $PATH
export PATH=$PATH:/usr/local/bin/

# Download kubectl 
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x kubectl

mv kuebctl /usr/local/bin/


# install k3d 
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

# k3d create cluster named portainer
k3d cluster create portainer \
--api-port 6443 \
--servers 1 \
--agents 1 \
-p 30000-32767:30000-32767@server[0]
```
![create k3s](./images/1-create-k3s.png)
![create k3s](./images/k3s-cluster.png)
```bash
# Create portainer
curl -LO https://raw.githubusercontent.com/portainer/portainer-k8s/master/portainer-nodeport.yaml | kubectl apply -f -
```
![create portainer](./images/create-portainer.png)
![portainer console](./images/portainer-console.png)

# List k3s node
```bash
k3d node list
NAME                     ROLE           CLUSTER     STATUS
k3d-portainer-agent-0    agent          portainer   running
k3d-portainer-server-0   server         portainer   running
k3d-portainer-serverlb   loadbalancer   portainer   running
```
#
```bash
k3d cluster delete portainer
```
![k3d cluster delete](./images/k3d-delete-cluster.png)

### Delete Infra
```bash
cdk destroy -f 
```

## Usege: 
- [cdk-spot-one](https://github.com/pahud/cdk-spot-one)
- [k3d](https://k3d.io/)
- [k3s](https://k3s.io/)
- [portainer-k8s](https://github.com/portainer/portainer-k8s)
