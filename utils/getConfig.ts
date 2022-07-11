export const getWhatsappConfig = () => ({
  WHATSAPP_API_URL: process.env.WHATSAPP_API_URL || "",
  WHATSAPP_API_SECRET: process.env.WHATSAPP_API_SECRET || "",
});

export const getNhostConfig = () => {
  return {
    NHOST_ADMIN_SECRET: process.env.NHOST_ADMIN_SECRET || "",
    NHOST_JWT_SECRET: process.env.NHOST_JWT_SECRET || "",
    NHOST_BACKEND_URL: process.env.NHOST_BACKEND_URL || "",
  };
};

export const getfirebaseConfig = () => ({
  FIREBASE_ADMIN_CONFIG_FILE_ID:
    process.env.FIREBASE_ADMIN_CONFIG_FILE_ID || "",
});
