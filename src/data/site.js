/**
 * Conteúdo central do site.
 * Todas as informações abaixo foram fornecidas pelo cliente.
 * Para incluir novos dados (Instagram, novas avaliações, fotos), edite apenas este arquivo.
 */

export const business = {
  name: 'Amelie Eventos e Gastronomia',
  shortName: 'Amelie',
  tagline: 'Eventos & Gastronomia',
  category: 'Casa de Festas',
  neighborhood: 'Saguaçu · Joinville/SC',
  address: {
    street: 'Av. Aluísio Pires Condeixa, 3058 - Sala 02',
    district: 'Saguaçu',
    city: 'Joinville - SC',
    full: 'Av. Aluísio Pires Condeixa, 3058 - Sala 02 - Saguaçu, Joinville - SC',
  },
  phoneDisplay: '(47) 99703-8682',
  phoneE164: '+5547997038682',
  whatsappNumber: '5547997038682',
  rating: {
    value: 4.9,
    count: 64,
    source: 'Google',
  },
  // Preencher somente com link confirmado. Enquanto for null, o ícone não é exibido.
  instagram: null,
}

export const whatsappMessage =
  'Olá! Gostaria de conhecer melhor a Amelie Eventos e Gastronomia e saber mais sobre o espaço.'

export const whatsappUrl = `https://api.whatsapp.com/send/?phone=${business.whatsappNumber}&text=${encodeURIComponent(
  whatsappMessage,
)}`

const mapsQuery = encodeURIComponent(`${business.name}, ${business.address.full}`)
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'espaco', label: 'O Espaço' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'experiencias', label: 'Experiências' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'avaliacoes', label: 'Avaliações' },
  { id: 'contato', label: 'Contato' },
]

export const footerLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'espaco', label: 'O Espaço' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'contato', label: 'Contato' },
]

/**
 * Avaliações reais. Não adicionar depoimentos que não existam.
 * Para incluir novas avaliações, acrescente objetos neste array:
 * { text: '...', author: 'Nome', source: 'Google' }
 * O carrossel exibe navegação automaticamente quando houver mais de uma.
 */
export const reviews = [
  {
    text: 'Excelentes tortas doces, muita variedade, sabores diferentes, sabor sensacional.',
    author: 'Rafael Martins',
    source: 'Google',
  },
]
