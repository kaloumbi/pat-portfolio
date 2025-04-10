import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Déploiement à la racine du domaine Firebase
  build: {
    outDir: "dist/paterne-portfolio", // Dossier de build identique à "public" dans firebase.json
  },
});




