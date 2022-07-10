export * from "./graphqlClient";
export * from "./resTemplates";
export * from "./getRandomValue";
export * from "./firebaseAdmin";
export * from "./getPeriodicTime";

export const getWhatsappConfig = () => {
  return {
    WHATSAPP_API_URL: process.env.WHATSAPP_API_URL || "",
    WHATSAPP_API_SECRET: process.env.WHATSAPP_API_SECRET || "",
  };
};
