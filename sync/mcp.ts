export class MCPSync {
  async connect() {
    console.log("Connecting to MCP...");
  }

  async push(data: unknown) {
    console.log("Uploading session state...");
  }

  async pull() {
    console.log("Downloading latest state...");
  }
}
