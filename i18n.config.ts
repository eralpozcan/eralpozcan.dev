export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      about_us: 'About Me',
      projects: 'Projects',
      blog: 'Blog',
      contact_us: 'Contact',
      english_lang: 'English',
      turkish_lang: 'Türkçe',
      contact: {
        title: 'Contact Me',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
    tr: {
      welcome: 'Hoşgeldiniz',
      about_us: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact_us: 'İletişim',
      english_lang: 'English',
      turkish_lang: 'Türkçe',
      contact: {
        title: 'Bana Ulaşın',
        name: 'İsim',
        email: 'Email',
        message: 'Mesajınız',
        send: 'Gönder',
      },
    }
  }
}))