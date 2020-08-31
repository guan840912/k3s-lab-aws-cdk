## Install k3s Lab in `AWS Spot EC2` via `AWS CDK` infra
### Infra 
```bash
# create infra
cdk deploy --require-approval never 

# connect k3s node
aws ssm start-session ${INSTANCE_ID}
```
