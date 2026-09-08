const messages = {
  ru: {
    title: "🚧 Сайт находится в разработке 🚧",
    text: "Совсем скоро здесь появится что-то интересное!",
    byline: "Сайт разрабатывается Cocieru Ion.",
    contact: "Связаться в Instagram"
  },
  en: {
    title: "🚧 Website under construction 🚧",
    text: "Something exciting is coming very soon!",
    byline: "Site developed by Cocieru Ion.",
    contact: "Contact via Instagram"
  },
  ro: {
    title: "🚧 Site în construcție 🚧",
    text: "Foarte curând aici va apărea ceva interesant!",
    byline: "Site dezvoltat de Cocieru Ion.",
    contact: "Contactează pe Instagram"
  }
};

function setLang(lang) {
  document.getElementById("title").textContent = messages[lang].title;
  document.getElementById("text").textContent = messages[lang].text;
  document.getElementById("byline").textContent = messages[lang].byline;
  document.getElementById("contact").textContent = messages[lang].contact;
}

// по умолчанию RU (можно выбрать другую)
setLang("ru");
