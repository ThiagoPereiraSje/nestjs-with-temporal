import { proxyActivities } from '@temporalio/workflow';
import activities from './activities';

const { helloWorldEnUs, helloWorldPtBR } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  heartbeatTimeout: '10s',
  retry: {
    initialInterval: '5s',
  },
});

export async function ExampleWorkflow(client_name: string): Promise<string[]> {
  const stages: string[] = [];

  stages.push(await helloWorldEnUs(client_name));
  stages.push(await helloWorldPtBR(client_name));

  return stages;
}
