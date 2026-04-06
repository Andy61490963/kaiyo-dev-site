import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json' with { type: 'json' }

const REPO_BASE_PATH = '/kaiyo-dev-site/'
const FORCE_CUSTOM_DOMAIN = false
const CUSTOM_DOMAIN_FLAGS = ['true', '1', 'yes', 'on']

function resolveBasePath(mode) {
  const projectRoot = process.cwd()
  const env = loadEnv(mode, projectRoot, '')
  const rawFlag = env.VITE_CUSTOM_DOMAIN ?? process.env.VITE_CUSTOM_DOMAIN ?? ''
  const normalizedFlag = String(rawFlag).trim().toLowerCase()
  const hasCustomDomainFlag = CUSTOM_DOMAIN_FLAGS.includes(normalizedFlag)
  const envFiles = ['.env', '.env.production']
  const hasEnvFile = envFiles.some((file) => fs.existsSync(path.join(projectRoot, file)))
  const hasCname = fs.existsSync(path.join(projectRoot, 'public', 'CNAME'))

  const homepageBase = (() => {
    const homepage = packageJson.homepage
    if (!homepage) return REPO_BASE_PATH

    try {
      const { pathname } = new URL(homepage)
      return pathname.endsWith('/') ? pathname : `${pathname}/`
    } catch (error) {
      console.warn('Cannot parse homepage in package.json, fallback to repo base.', error)
      return REPO_BASE_PATH
    }
  })()

  const usingCustomDomain = FORCE_CUSTOM_DOMAIN || hasCustomDomainFlag || hasCname
  const basePath = usingCustomDomain ? '/' : homepageBase

  console.log(`Vite base path: ${basePath} | customDomain=${usingCustomDomain} | envFiles=${hasEnvFile ? 'detected' : 'not found'}`)
  return basePath
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: resolveBasePath(mode),
  server: { host: '0.0.0.0', port: 5173 },
}))
