import { NhostClient } from "@nhost/nhost-js";

export const getConfig = () => ({
  backend: import.meta.env.VITE_NHOST_BACKEND_URL || "",
  secret: import.meta.env.VITE_NHOST_JWT_SECRET || "",
});

export const nhost = new NhostClient({
  backendUrl: getConfig().backend,
  adminSecret: getConfig().secret,
});
