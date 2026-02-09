<template>
  <section>
    <h2 class="section-title">Sobre mim</h2>
    <p class="subtitle-block">
      Sou Anderson Miranda, Analista de Sistemas Sênior com foco em soluções completas de e-commerce
      B2B e B2C. Atuo com arquitetura, desenvolvimento e sustentação de sistemas críticos,
      entregando estabilidade, performance e evolução contínua do negócio.
    </p>

    <div class="info-grid mt-4">
      <span>Idade</span><div>44 anos</div>
      <span>Estado civil</span><div>Casado</div>
      <span>Endereço</span><div>Av. Nova Cantareira, 3443 - Tucuruvi - São Paulo/SP</div>
      <span>Idiomas</span><div>Português (nativo) / Inglês (avançado)</div>
    </div>

    <div class="mt-5">
      <h3 class="section-title">Gostos e interesses</h3>
      <p class="subtitle-block">
        Entusiasta de novas tecnologias, amante de astronomia, curioso por natureza e apreciador
        de uma boa cerveja. Gosto de explorar soluções modernas e buscar novas formas de otimizar
        processos.
      </p>
    </div>

    <div class="matrix-box">
      <MatrixEffect />
      <div class="matrix-content">
        <h3 class="section-title has-text-white">Resumo profissional</h3>
        <p class="subtitle-block has-text-white">
          Mais de 17 anos de experiência em desenvolvimento full stack e arquitetura de sistemas,
          com forte atuação em .NET, Azure e Vue.js. Especialista em plataformas de e-commerce,
          integrações e sustentação de ambientes críticos.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MatrixEffect from "@/components/MatrixEffect.vue";
</script>