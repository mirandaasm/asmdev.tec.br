export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "Anderson Miranda | Analista de Sistemas Sênior",
      meta: [
        { name: "description", content: "Currículo e portfólio profissional de Anderson Miranda." },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" }
      ]
    }
  },
  css: ["~/assets/css/main.css"]
});