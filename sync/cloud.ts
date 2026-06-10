import { MCPSync } from "./mcp";

export class CloudSync {
  private mcp = new MCPSync();

  async sync(state: unknown) {
    await this.mcp.connect();
    await this.mcp.push(state);
  }
}
