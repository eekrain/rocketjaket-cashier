import { NhostClient } from "@nhost/nhost-js";
import { getNhostConfig } from "./getConfig";

export const nhost = new NhostClient({
  backendUrl: getNhostConfig().NHOST_BACKEND_URL,
});
