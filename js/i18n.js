const translations = {
  pt: {
    hero_subtitle: 'Hello World! Meu nome é <strong>Gabriel Rocha</strong> e sou',
    hero_title: 'Desenvolvedor Fullstack',
    hero_text: 'Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas através da <br> minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.',

    projects_eyebrow: '<strong>Meus trabalhos</strong>',
    projects_title: 'Veja meus projetos',
    filter_all: 'Todos',
    filter_fullstack: 'Fullstack &amp; IA',
    show_more: 'Mostrar mais',
    show_less: 'Mostrar menos',

    proj_g915x: 'Página premium e animada focada na conversão para o teclado Logitech G915X.',
    proj_sniptap: 'Plataforma vibrante e interativa desenvolvida para venda de patins.',
    proj_bolos: 'Vitrine de bolos artesanais com assistente de IA para atendimento.',
    proj_zingen: 'Apresentação moderna e fluida para um aplicativo mobile de karaokê.',
    proj_festivite: 'Layout elegante para divulgação de eventos e organização de festas.',
    proj_nlwpocket: 'App fullstack para acompanhamento de metas (NLW Pocket).',
    proj_nlwagents: 'Sistema interativo focado em integração com agentes de IA (NLW).',
    proj_technews: 'Interface focada em grid e tipografia para portais de notícias de tecnologia.',
    proj_estrelas: 'Formulário de matrícula interativo com validações focadas na experiência do usuário.',
    proj_convert: 'Aplicação utilitária para cálculos e conversões para praticar JavaScript.',
    proj_travelgram: 'Interface de feed fotográfico inspirada em redes sociais de viajantes.',
    proj_gta: 'Página promocional imersiva com elementos gráficos do game GTA V.',
    proj_receita: 'Layout limpo e bem estruturado para guias culinários passo a passo.',
    proj_santorini: 'Página de exploração turística com foco em tipografia clássica e belas fotografias.',
    proj_comidabr: 'Apresentação visual rica dedicada à gastronomia tradicional nacional.',
    proj_indieny: 'Vitrine festiva de final de ano projetada para a loja EspaçoIndie.',

    services_eyebrow: '<strong>Meus serviços</strong>',
    services_title: 'Como posso ajudar o seu negócio',
    service1_title: 'Websites e aplicativos',
    service1_text: 'Desenvolvimento de interfaces modernas e responsivas',
    service2_title: 'API e banco de dados',
    service2_text: 'Criação de serviços e estruturas de dados robustas',
    service3_text: 'Gestão e infraestrutura da aplicação',

    contact_eyebrow: 'Contato',
    contact_title: 'Gostou do meu trabalho?',
    contact_text: 'Me mande uma mensagem ou acompanhe as minhas redes sociais!',
    form_name: 'Nome',
    form_name_ph: 'Como posso te chamar?',
    form_email: 'E-mail',
    form_email_ph: 'seu@email.com',
    form_message: 'Mensagem',
    form_message_ph: 'Me conte sobre o seu projeto...',
    form_send: 'Enviar mensagem',
    form_sending: 'Enviando...',
    form_success: 'Mensagem enviada! Obrigado pelo contato. 💙',
    form_error: 'Não foi possível enviar agora. Tente de novo ou use o e-mail logo abaixo.',

    back_to_top: 'Voltar ao topo ↑',
  },

  en: {
    hero_subtitle: "Hello World! My name is <strong>Gabriel Rocha</strong> and I'm a",
    hero_title: 'Fullstack Developer',
    hero_text: 'I turn needs into real, engaging and functional applications. I build systems driven by <br> my passion for technology, contributing innovative and effective solutions to complex challenges.',

    projects_eyebrow: '<strong>My work</strong>',
    projects_title: 'Check out my projects',
    filter_all: 'All',
    filter_fullstack: 'Fullstack &amp; AI',
    show_more: 'Show more',
    show_less: 'Show less',

    proj_g915x: 'Premium, animated, conversion-focused page for the Logitech G915X keyboard.',
    proj_sniptap: 'Vibrant, interactive platform built for selling roller skates.',
    proj_bolos: 'Showcase of artisanal cakes with an AI assistant for customer service.',
    proj_zingen: 'Modern, fluid presentation for a mobile karaoke app.',
    proj_festivite: 'Elegant layout for promoting events and party planning.',
    proj_nlwpocket: 'Fullstack app for tracking personal goals (NLW Pocket).',
    proj_nlwagents: 'Interactive system focused on AI agent integration (NLW).',
    proj_technews: 'Grid- and typography-focused interface for tech news portals.',
    proj_estrelas: 'Interactive enrollment form with UX-focused validations.',
    proj_convert: 'Utility app for calculations and conversions, built to practice JavaScript.',
    proj_travelgram: 'Photo feed interface inspired by travel social networks.',
    proj_gta: 'Immersive promo page with graphic elements from GTA V.',
    proj_receita: 'Clean, well-structured layout for step-by-step cooking guides.',
    proj_santorini: 'Tourism page focused on classic typography and beautiful photography.',
    proj_comidabr: 'Visually rich presentation dedicated to traditional Brazilian cuisine.',
    proj_indieny: 'Festive year-end showcase designed for the EspaçoIndie store.',

    services_eyebrow: '<strong>My services</strong>',
    services_title: 'How I can help your business',
    service1_title: 'Websites and apps',
    service1_text: 'Building modern, responsive interfaces',
    service2_title: 'APIs and databases',
    service2_text: 'Creating robust services and data structures',
    service3_text: 'Application management and infrastructure',

    contact_eyebrow: 'Contact',
    contact_title: 'Like my work?',
    contact_text: 'Send me a message or follow me on social media!',
    form_name: 'Name',
    form_name_ph: 'What should I call you?',
    form_email: 'Email',
    form_email_ph: 'your@email.com',
    form_message: 'Message',
    form_message_ph: 'Tell me about your project...',
    form_send: 'Send message',
    form_sending: 'Sending...',
    form_success: 'Message sent! Thanks for reaching out. 💙',
    form_error: "Couldn't send right now. Try again or use the email below.",

    back_to_top: 'Back to top ↑',
  },
};

let currentLang = localStorage.getItem('lang') || 'pt';

window.t = (key) => translations[currentLang][key] ?? translations.pt[key] ?? key;

document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');

  function applyTranslations() {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.innerHTML = window.t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = window.t(el.dataset.i18nPlaceholder);
    });

    if (langToggle) {
      langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
      langToggle.setAttribute(
        'aria-label',
        currentLang === 'pt' ? 'Switch language to English' : 'Mudar idioma para Português'
      );
    }

    document.dispatchEvent(new CustomEvent('langchange'));
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', currentLang);
      applyTranslations();
    });
  }

  if (currentLang !== 'pt') applyTranslations();
});
