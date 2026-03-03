export const GTM_ID = 'GTM-XXXXXXX'; // Reemplazar con ID real

export const pushEvent = (event, data = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
      timestamp: new Date().toISOString()
    });
  }
};