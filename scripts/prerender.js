// Pré-renderiza o HTML da página para SEO e carregamento inicial mais rápido.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist/index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const html = fs.readFileSync(htmlPath, 'utf-8').replace('<!--app-html-->', render())
fs.writeFileSync(htmlPath, html)
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('✓ HTML pré-renderizado em dist/index.html')
