import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./epilare.html", "./coafor.html", "./contact.html", "./extensii.html", "./laminare.html", "./makeup.html", "./noi.html", "./oferte.html", "./parere.html", "./servicii.html", "./preturi.html", "./tpar.html", "./tface.html", "./cosmetica.html", "./locatie.html", "./masaj.html", "./tatuaj.html", "./cursuri.html"]
    }
  }
})