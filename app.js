const copy={
  en:{
    navGame:"Game",navGallery:"Gallery",navStudio:"Studio",navSocial:"Follow",eyebrow:"Independent game project",
    heroTitle:"Games with energy. Built with care.",heroText:"We create colorful games designed to be fun, friendly and easy to jump into — without disruptive ads.",
    discover:"Discover Wolf And Eggs 3D",googlePlay:"Google Play",free:"Free to play",freeSub:"Start playing without a paywall",noAds:"No ads",noAdsSub:"No disruptive advertising",support:"Optional support",supportSub:"Support the creator only if you want to",feedback:"Built with feedback",feedbackSub:"The game evolves with player input",
    featured:"Featured game",gameLead:"A cheerful arcade adventure that keeps growing.",openPlay:"Open in Google Play ↗",catchTitle:"Catch. Run. Explore.",gameText:"Catch eggs, score points, take on runner stages, play 3D mini-games and discover a growing world full of lighthearted challenges.",
    heroes:"4 playable heroes",heroesSub:"Wolf, Fox, Ram and Dog",arcade:"Arcade gameplay",arcadeSub:"Catch eggs, bonuses and surprises",runner:"Runner stages",runnerSub:"Fast bonus challenges",mini:"3D mini-games",miniSub:"Memory, Checkers and more",download:"Play for free on Google Play",supportNote:"No ads. Optional creator support.",
    galleryKicker:"Real gameplay",galleryTitle:"See the game in action",galleryLead:"Screenshots from the actual game — no fake gameplay renders.",scrollHint:"Swipe / scroll →",
    studioKicker:"NextPulse Games",studioTitle:"One creator. One vision. Games with a pulse.",studioText:"NextPulse Games is an independent one-person game project. Every idea, test, update and improvement is shaped hands-on — with the goal of creating friendly games that feel simple, joyful and fair.",tag1:"Family-friendly",tag2:"Player-first",tag3:"No disruptive ads",tag4:"Always evolving",
    nextKicker:"What's next",nextTitle:"More worlds. More characters. More adventures.",nextText:"Wolf And Eggs 3D is still growing. Follow NextPulse Games to see development previews, new features and upcoming projects.",followDevelopment:"Follow development",
    follow:"Follow NextPulse Games",socialTitle:"Join the journey",socialText:"Shorts, updates, behind-the-scenes development and new game announcements.",privacy:"Privacy Policy",rights:"All rights reserved."
  },
  pl:{
    navGame:"Gra",navGallery:"Galeria",navStudio:"Studio",navSocial:"Obserwuj",eyebrow:"Niezależny projekt gier",
    heroTitle:"Gry z energią. Tworzone z pasją.",heroText:"Tworzymy kolorowe gry, które mają dawać prostą, przyjazną zabawę — bez uciążliwych reklam.",
    discover:"Poznaj Wolf And Eggs 3D",googlePlay:"Google Play",free:"Bezpłatna gra",freeSub:"Zacznij bez paywalla",noAds:"Bez reklam",noAdsSub:"Bez przerywania rozgrywki reklamami",support:"Dobrowolne wsparcie",supportSub:"Wspierasz twórcę tylko jeśli chcesz",feedback:"Rozwój z graczami",feedbackSub:"Gra zmienia się dzięki opiniom graczy",
    featured:"Nasza gra",gameLead:"Pogodna zręcznościowa przygoda, która ciągle się rozwija.",openPlay:"Otwórz w Google Play ↗",catchTitle:"Łap. Biegnij. Odkrywaj.",gameText:"Łap jajka, zdobywaj punkty, zmierz się z etapami biegowymi, graj w minigry 3D i odkrywaj rosnący świat pełen lekkich wyzwań.",
    heroes:"4 grywalnych bohaterów",heroesSub:"Wilk, Lis, Baran i Pies",arcade:"Zręcznościowa rozgrywka",arcadeSub:"Jajka, bonusy i niespodzianki",runner:"Etapy biegowe",runnerSub:"Szybkie wyzwania bonusowe",mini:"Minigry 3D",miniSub:"Memory, Warcaby i więcej",download:"Zagraj za darmo w Google Play",supportNote:"Bez reklam. Dobrowolne wsparcie twórcy.",
    galleryKicker:"Prawdziwa rozgrywka",galleryTitle:"Zobacz grę w akcji",galleryLead:"Kadry z prawdziwej gry — bez sztucznie wygenerowanej rozgrywki.",scrollHint:"Przesuń / przewiń →",
    studioKicker:"NextPulse Games",studioTitle:"Jeden twórca. Jedna wizja. Gry z energią.",studioText:"NextPulse Games to niezależny projekt tworzony przez jedną osobę. Każdy pomysł, test, aktualizacja i poprawka powstają bezpośrednio w jednym miejscu — z myślą o tworzeniu przyjaznych gier, które dają prostą, radosną i uczciwą zabawę.",tag1:"Przyjazne rodzinie",tag2:"Gracz na pierwszym miejscu",tag3:"Bez uciążliwych reklam",tag4:"Ciągły rozwój",
    nextKicker:"Co dalej",nextTitle:"Więcej światów. Więcej bohaterów. Więcej przygód.",nextText:"Wolf And Eggs 3D nadal rośnie. Obserwuj NextPulse Games, aby zobaczyć zapowiedzi nowych funkcji, aktualizacje i kolejne projekty.",followDevelopment:"Obserwuj rozwój",
    follow:"Obserwuj NextPulse Games",socialTitle:"Dołącz do tej historii",socialText:"Shorty, aktualizacje, kulisy tworzenia i zapowiedzi nowych gier.",privacy:"Polityka prywatności",rights:"Wszelkie prawa zastrzeżone."
  }
};
let lang=localStorage.getItem("npg_lang")||((navigator.language||"").toLowerCase().startsWith("pl")?"pl":"en");
function applyLanguage(){
  document.documentElement.lang=lang;
  document.documentElement.dataset.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(copy[lang][key])el.textContent=copy[lang][key]});
  const btn=document.getElementById("langBtn"); if(btn) btn.textContent=lang==="pl"?"EN":"PL";
  document.title=lang==="pl"?"NextPulse Games — Gry z energią. Tworzone z pasją.":"NextPulse Games — Fun. Energy. Play.";
}
document.getElementById("langBtn")?.addEventListener("click",()=>{lang=lang==="pl"?"en":"pl";localStorage.setItem("npg_lang",lang);applyLanguage()});
document.getElementById("year").textContent=new Date().getFullYear();
applyLanguage();