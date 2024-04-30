import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  
  //passo 1 - npm run build
  //passo 2 -npm run preview
  //apontar para a porta 80
  preview: {
    host: true, //habilita 
    port: 80
  }
  //passo 3 - arquivo vercel
})
