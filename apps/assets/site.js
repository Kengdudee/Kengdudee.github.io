(() => {
  const translations = document.querySelectorAll("[data-th][data-en]");
  const languageButtons = document.querySelectorAll("[data-language]");
  const setLanguage = (language) => {
    const selected = language === "en" ? "en" : "th";
    document.documentElement.lang = selected;
    translations.forEach((element) => { element.textContent = element.dataset[selected]; });
    languageButtons.forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.language === selected)); });
    document.querySelectorAll("[data-th-content][data-en-content]").forEach((element) => {
      element.content = element.getAttribute("data-" + selected + "-content");
    });
    document.querySelectorAll("[data-th-href][data-en-href]").forEach((element) => {
      element.href = element.getAttribute("data-" + selected + "-href");
    });
    document.querySelectorAll("[data-language-link]").forEach((element) => {
      const destination = new URL(element.href);
      destination.searchParams.set("lang", selected);
      element.href = destination.href;
    });
  };
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      setLanguage(language);
      const currentURL = new URL(window.location.href);
      currentURL.searchParams.set("lang", language);
      window.history.replaceState(null, "", currentURL);
    });
  });
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const language = requestedLanguage === "th" || requestedLanguage === "en"
    ? requestedLanguage
    : (navigator.language || "th").toLowerCase().startsWith("th") ? "th" : "en";
  setLanguage(language);
})();
