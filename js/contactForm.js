// ─────────────────────────────────────────────────────────────────
// Formulário de contato funcional via FormSubmit (https://formsubmit.co)
//
// Por que FormSubmit em vez de EmailJS?
// - Não precisa de conta nem de chaves de API no código
// - Ativação: no PRIMEIRO envio, o FormSubmit manda um e-mail de
//   confirmação para o endereço abaixo. Clique no link dele uma vez
//   e pronto, os próximos envios chegam direto na sua caixa.
//
// O fetch() envia os dados em segundo plano (AJAX), sem recarregar
// a página, e mostramos o resultado no <p id="form-status">.
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusMessage = document.getElementById('form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  // window.t vem do i18n.js; o fallback evita erro se ele não carregar
  const t = window.t || ((key) => key);

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // impede o recarregamento padrão da página

    submitButton.disabled = true;
    statusMessage.className = 'text-sm';
    statusMessage.textContent = t('form_sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/gabrielrocha.devstack@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: document.getElementById('contact-name').value,
          email: document.getElementById('contact-email').value,
          message: document.getElementById('contact-message').value,
          _subject: 'Novo contato pelo portfólio 🚀',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      statusMessage.textContent = t('form_success');
      statusMessage.classList.add('form-success');
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      statusMessage.textContent = t('form_error');
      statusMessage.classList.add('form-error');
    } finally {
      submitButton.disabled = false;
    }
  });
});
