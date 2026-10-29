/** Informações reais da empresa. Configure antes de colocar o site no ar. */
export const SITE = {
  name: 'OS Segurança & Tecnologia',
  whatsapp: '', // DDI 55 + DDD + número, só dígitos. Ex.: 55DDDNÚMERO
  email: '',
  instagram: '',
  location: '',
}

export function whatsappUrl(message) {
  const text = encodeURIComponent(message)
  const phone = SITE.whatsapp.replace(/\D/g, '')
  return phone ? `https://wa.me/${phone}?text=${text}` : `https://api.whatsapp.com/send?text=${text}`
}

// Fotografias editoriais de demonstração. Substitua por fotos de projetos reais
// ou por imagens com licença de uso comprovada antes de publicar.
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1500&q=85',
  team: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
  security: 'https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&w=1100&q=85',
  cooling: 'https://images.unsplash.com/photo-1718203862467-c33159fdc504?auto=format&fit=crop&w=1100&q=85',
  electric: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85',
  automation: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=1100&q=85',
}
