# Amelie Eventos e Gastronomia — site institucional

Site one page da **Amelie Eventos e Gastronomia | Casa de Festas** (Saguaçu · Joinville/SC).

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide. O HTML é pré-renderizado no build (SEO e primeira pintura rápida). Fontes hospedadas localmente.

## Comandos

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # gera dist/ (estático, pronto para publicar)
npm run preview   # visualizar o build
```

Para publicar em subdiretório (ex.: GitHub Pages): `BASE_PATH=/Amelie-Eventos-Gastronomia/ npm run build`.

## Onde editar o conteúdo

- `src/data/site.js` — nome, endereço, telefone, WhatsApp e mensagem automática, nota no Google, **avaliações** (o carrossel exibe navegação sozinho quando houver mais de uma) e **Instagram** (fica oculto enquanto for `null`).
- `src/data/images.js` — fotos, textos alternativos e ordem da galeria.
- `src/assets/images/` — arquivos das fotos. As atuais vieram de capturas do Instagram (~870 px); trocar pelos originais em alta resolução, mantendo os nomes, melhora bastante o resultado em telas grandes.
- `src/sections/` — uma seção por arquivo (Hero, Intro, Espaço, Gastronomia, Experiências, Galeria, Pilares, Avaliações, CTA, Contato).
