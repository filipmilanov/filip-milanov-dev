// Usage: node screenshot.mjs <url> [label] [--width=1440] [--height=1000]
// Saves to "./temporary screenshots/screenshot-N.png" (auto-incremented).
import puppeteer from 'puppeteer'
import { mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const args = process.argv.slice(2)
const flags = Object.fromEntries(
  args.filter((a) => a.startsWith('--')).map((a) => a.replace(/^--/, '').split('=')),
)
const positional = args.filter((a) => !a.startsWith('--'))

const url = positional[0] ?? 'http://localhost:3000'
const label = positional[1]
const width = Number(flags.width ?? 1440)
const height = Number(flags.height ?? 1000)
const outDir = 'temporary screenshots'

mkdirSync(outDir, { recursive: true })
const next =
  readdirSync(outDir)
    .map((f) => Number(f.match(/^screenshot-(\d+)/)?.[1] ?? 0))
    .reduce((a, b) => Math.max(a, b), 0) + 1
const file = join(outDir, `screenshot-${next}${label ? `-${label}` : ''}.png`)

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width, height, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
// Give webfonts a beat to swap in before capture.
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 400))
await page.screenshot({ path: file, fullPage: Boolean(flags.full) })
await browser.close()

console.log(file)
