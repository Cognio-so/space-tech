const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const CONTACT_PHONE_US = "+14158708418";
export const CONTACT_PHONE_US_DISPLAY = "+1 (415) 870-8418";

export const CONTACT_PHONE_AU = "+61468040481";
export const CONTACT_PHONE_AU_DISPLAY = "+61 468040481";

export const CONTACT_EMAIL = "info@spacetechconsulting.com";

export const CONTACT_PHONE_US_URL = `tel:${CONTACT_PHONE_US}`;
export const CONTACT_PHONE_AU_URL = `tel:${CONTACT_PHONE_AU}`;
export const CONTACT_WHATSAPP_URL = `https://wa.me/${onlyDigits(CONTACT_PHONE_US)}`;
