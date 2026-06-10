import { CloudSync } from "../sync/cloud";

export async function syncSession() {
  const cloud = new CloudSync();

  await cloud.sync({
    timestamp: Date.now()
  });
}
