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
      error: {
        title: 'Error',
        message: 'Something went wrong.',
        message2: 'But dont worry, you can find plenty of other things on our homepage.',
        button: 'Go to homepage',
      },
      blogs: {
        title: 'Blog Posts',
      },
      cv_download: 'Download CV',
      hello_everyone: '👋🏻 Hello Everyone, I am Eralp Özcan!',
      job_title: 'Frontend Developer',
      description: "I'm a Full Stack Developer who is passionate about various web technologies. I'm currently working at Protein.Tech as a frontend developer.",
      calendly_text: 'Schedule a meeting',
      read_more: 'Read More',
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
      error: {
        title: 'Hata',
        message: 'Bir şeyler yanlış gitti.',
        message2: 'Ama merak etmeyin, ana sayfamızda daha pek çok şey bulabilirsiniz.',
        button: 'Ana sayfaya git',
      },
      blogs: {
        title: 'Blog Gönderileri',
      },
      cv_download: 'CV İndir',
      hello_everyone: '👋🏻 Merhaba,Ben Eralp Özcan!',
      job_title: 'Ön Uç Geliştirici',
      description: "Ben çeşitli web teknolojileri konusunda tutkulu bir Full Stack Developer'ım. Şu anda Protein.Tech'te ön uç geliştiricisi olarak çalışıyorum.",
      calendly_text: 'Bir toplantı ayarla',
      read_more: 'Devamını Oku',
    }
  }
}))