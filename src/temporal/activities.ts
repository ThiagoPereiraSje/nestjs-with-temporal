async function helloWorldEnUs(client_name: string): Promise<string> {
  return `Hello world! ${client_name}`;
}

async function helloWorldPtBR(client_name: string): Promise<string> {
  return `Olá mundo! ${client_name}`;
}

export default {
  helloWorldEnUs,
  helloWorldPtBR,
};
