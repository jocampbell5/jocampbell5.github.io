import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// `base` controls the path your assets are served from.
//   - For a USER site (repo named  <username>.github.io ) the site lives at the
//     root of the domain, so base must be '/'.  <-- this is your setup.
//   - For a PROJECT site (any other repo name) it would be '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
