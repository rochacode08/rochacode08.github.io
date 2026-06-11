document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusMessage = document.getElementById('form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  const t = window.t || ((key) => key);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    statusMessage.className = 'text-sm';
    statusMessage.textContent = t('form_sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/12b362f70fef437619c7667c0feb820a', {
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
