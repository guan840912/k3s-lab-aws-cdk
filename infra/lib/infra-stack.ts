import * as cdk from '@aws-cdk/core';
import { SpotFleet, BlockDuration } from 'cdk-spot-one';
import * as ec2 from '@aws-cdk/aws-ec2';
export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = ec2.Vpc.fromLookup(this, 'defaultVpc', {
      isDefault: true,
    });
    const fleet = new SpotFleet(this, 'SpotFleetk3s', {
      vpc,
      blockDuration: BlockDuration.TWO_HOURS,
    });

    fleet.expireAfter(cdk.Duration.hours(2));
  }
}
