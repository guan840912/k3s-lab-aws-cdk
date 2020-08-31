## Install k3s Lab in `AWS Spot EC2` via `AWS CDK` infra

### Infra 
```bash
# create infra
cdk deploy --require-approval never 

# connect k3s node
aws ssm start-session ${INSTANCE_ID}
```

## Usege: 
[cdk-spot-one](https://github.com/pahud/cdk-spot-one)
[k3d](https://k3d.io/)
[k3s](https://k3s.io/)
[portainer-k8s](https://github.com/portainer/portainer-k8s)