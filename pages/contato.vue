<template>
  <section>
    <h2 class="section-title">Contato</h2>
    <p class="subtitle-block">
      Fique à vontade para enviar uma mensagem ou me chamar diretamente pelos canais abaixo.
    </p>

    <div class="columns is-variable is-6 mt-4 is-multiline">
      <div class="column is-6">
        <div class="contact-box">
          <h3 class="title is-6">Informações</h3>
          <p><strong>Email:</strong> <a href="mailto:anderson.smiranda@gmail.com">anderson.smiranda@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/5511987663056" target="_blank">+55 11 98766-3056</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/mirandaasm" target="_blank">github.com/mirandaasm</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mirandaasm/" target="_blank">linkedin.com/in/mirandaasm</a></p>
        </div>
      </div>

      <div class="column is-6">
        <div class="contact-box">
          <h3 class="title is-6">Formulário</h3>
          <form>
            <div class="field">
              <label class="label">Nome</label>
              <div class="control">
                <input class="input" type="text" placeholder="Seu nome" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Seu email" />
              </div>
            </div>

            <div class="field">
              <label class="label">Mensagem</label>
              <div class="control">
                <textarea class="textarea" rows="4" placeholder="Como posso ajudar?"></textarea>
              </div>
            </div>

            <button class="button is-link is-fullwidth" type="button">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>