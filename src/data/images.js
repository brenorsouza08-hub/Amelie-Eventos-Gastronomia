/**
 * Fotografias reais do estabelecimento (fornecidas pelo cliente).
 * Para trocar por versões em alta resolução, substitua os arquivos em
 * src/assets/images mantendo os nomes, e atualize width/height.
 */
import mesaSrc from '../assets/images/mesa.webp'
import buffetSrc from '../assets/images/buffet.webp'
import salaoSrc from '../assets/images/salao.webp'
import fachadaSrc from '../assets/images/fachada.webp'
import ambienteSrc from '../assets/images/detalhe-ambiente.webp'
import docesSrc from '../assets/images/detalhe-doces.webp'
import frutasSrc from '../assets/images/detalhe-frutas.webp'
import mesaPostaSrc from '../assets/images/detalhe-mesa-posta.webp'
import orquideaSrc from '../assets/images/detalhe-orquidea.webp'
import pastasSrc from '../assets/images/detalhe-pastas.webp'
import salgadosSrc from '../assets/images/detalhe-salgados.webp'
import tortaSrc from '../assets/images/detalhe-torta.webp'
import tortinhasSrc from '../assets/images/detalhe-tortinhas.webp'

export const images = {
  mesa: {
    src: mesaSrc,
    width: 772,
    height: 871,
    alt: 'Mesa gastronômica com doces, salgados, pães e pastas, decorada com folhagens e flores tropicais',
  },
  buffet: {
    src: buffetSrc,
    width: 778,
    height: 836,
    alt: 'Mesa de buffet com taças de frutas, tortinhas, doces e orquídeas brancas sob iluminação quente',
  },
  salao: {
    src: salaoSrc,
    width: 616,
    height: 836,
    alt: 'Salão claro com mesas redondas, cadeiras brancas e mesa posta com louças, taças e ramos de lavanda',
  },
  fachada: {
    src: fachadaSrc,
    width: 616,
    height: 836,
    alt: 'Fachada azul-clara da Amelie Eventos com letreiro, toldo branco e varanda com floreiras',
  },
  ambiente: {
    src: ambienteSrc,
    width: 616,
    height: 380,
    alt: 'Ambiente com paredes em boiserie, mesas brancas e pequenos vasos com lavanda',
  },
  doces: {
    src: docesSrc,
    width: 420,
    height: 300,
    alt: 'Doces individuais em tom vermelho dispostos em suportes de madeira',
  },
  frutas: {
    src: frutasSrc,
    width: 560,
    height: 240,
    alt: 'Taças individuais de salada de frutas enfileiradas sobre a mesa',
  },
  mesaPosta: {
    src: mesaPostaSrc,
    width: 380,
    height: 280,
    alt: 'Detalhe de mesa posta com guardanapos, porta-guardanapos, taças de cristal e lavanda',
  },
  orquidea: {
    src: orquideaSrc,
    width: 240,
    height: 430,
    alt: 'Arranjo de orquídeas brancas em vaso de vidro decorando a mesa',
  },
  pastas: {
    src: pastasSrc,
    width: 380,
    height: 330,
    alt: 'Pastas servidas em ramequins, grissinis e pães artesanais',
  },
  salgados: {
    src: salgadosSrc,
    width: 360,
    height: 220,
    alt: 'Tortinhas e salgados finos dispostos em bandejas e suportes de vidro',
  },
  torta: {
    src: tortaSrc,
    width: 250,
    height: 480,
    alt: 'Torta decorada com frutas secas, tomates e ervas em composição delicada',
  },
  tortinhas: {
    src: tortinhasSrc,
    width: 300,
    height: 290,
    alt: 'Tortinhas em bandejas suspensas entre folhagens',
  },
}

export const galleryImages = [
  { ...images.mesa, caption: 'Gastronomia' },
  { ...images.salao, caption: 'Ambiente' },
  { ...images.doces, caption: 'Doces' },
  { ...images.orquidea, caption: 'Decoração' },
  { ...images.fachada, caption: 'Fachada' },
  { ...images.frutas, caption: 'Detalhes' },
  { ...images.buffet, caption: 'Gastronomia' },
  { ...images.mesaPosta, caption: 'Mesa posta' },
  { ...images.tortinhas, caption: 'Sabores' },
  { ...images.torta, caption: 'Detalhes' },
  { ...images.ambiente, caption: 'Ambiente' },
  { ...images.salgados, caption: 'Variedade' },
  { ...images.pastas, caption: 'Sabores' },
]
