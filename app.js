const copy={
en:{
navGame:"Game",navGallery:"Gallery",navAbout:"About",navContact:"Contact",
eyebrow:"Independent game studio",tagline:"Free games. No ads. Made with heart.",
lead:"Colorful, family-friendly games built around fun, reflexes and small adventures.",
discover:"Discover the game",playStore:"Google Play",free:"Free",noAds:"No ads",support:"Optional support",
featured:"Featured game",openPlay:"Open in Google Play →",catchTitle:"Catch. Run. Explore.",
gameText:"Catch eggs, avoid obstacles, escape the hens in runner stages and discover a cheerful 3D world. Pick your hero and improve your score at your own pace.",
heroes:"4 heroes",heroesSub:"Wolf, Fox, Ram and Dog",arcade:"Arcade action",arcadeSub:"Eggs, bonuses and obstacles",
runner:"Runner stages",runnerSub:"Fast bonus challenges",mini:"3D mini-games",miniSub:"Memory, Checkers and more",
download:"Play for free on Google Play",inside:"Inside the game",galleryTitle:"A colorful world in your pocket",
ourStory:"Our story",storyTitle:"Small studio. Big pulse.",
storyText:"NextPulse Games is an independent studio focused on friendly games that respect the player. No disruptive ads, no pay-to-win pressure — just play, discover and have fun.",
p1:"Player first",p2:"Family friendly",p3:"No ads",p4:"Built with feedback",follow:"Follow the journey",
socialTitle:"See what we are building next",socialText:"Development clips, new worlds, characters, updates and behind-the-scenes progress.",
privacy:"Privacy Policy",rights:"All rights reserved."
},
pl:{
navGame:"Gra",navGallery:"Galeria",navAbout:"O nas",navContact:"Kontakt",
eyebrow:"Niezależne studio gier",tagline:"Darmowe gry. Bez reklam. Tworzone z pasją.",
lead:"Kolorowe, rodzinne gry oparte na zabawie, refleksie i małych przygodach.",
discover:"Poznaj grę",playStore:"Google Play",free:"Bezpłatna",noAds:"Bez reklam",support:"Dobrowolne wsparcie",
featured:"Nasza gra",openPlay:"Otwórz w Google Play →",catchTitle:"Łap. Biegnij. Odkrywaj.",
gameText:"Łap jajka, unikaj przeszkód, uciekaj przed kurami w etapach biegowych i odkrywaj pogodny świat 3D. Wybierz bohatera i poprawiaj swoje wyniki we własnym tempie.",
heroes:"4 bohaterów",heroesSub:"Wilk, Lis, Baran i Pies",arcade:"Zręcznościowa zabawa",arcadeSub:"Jajka, bonusy i przeszkody",
runner:"Etapy biegowe",runnerSub:"Szybkie wyzwania bonusowe",mini:"Minigry 3D",miniSub:"Memory, Warcaby i więcej",
download:"Zagraj za darmo w Google Play",inside:"Zajrzyj do gry",galleryTitle:"Kolorowy świat w Twojej kieszeni",
ourStory:"Nasza historia",storyTitle:"Małe studio. Duży impuls.",
storyText:"NextPulse Games to niezależne studio tworzące przyjazne gry, które szanują gracza. Bez uciążliwych reklam i presji pay-to-win — po prostu graj, odkrywaj i dobrze się baw.",
p1:"Gracz na pierwszym miejscu",p2:"Przyjazne rodzinie",p3:"Bez reklam",p4:"Rozwój dzięki opiniom",follow:"Obserwuj rozwój",
socialTitle:"Zobacz, co tworzymy dalej",socialText:"Fragmenty prac, nowe światy, bohaterowie, aktualizacje i kulisy tworzenia gry.",
privacy:"Polityka prywatności",rights:"Wszelkie prawa zastrzeżone."
}};
let lang=localStorage.getItem("npg_lang")||((navigator.language||"").toLowerCase().startsWith("pl")?"pl":"en");
function apply(){
 document.documentElement.lang=lang; document.documentElement.dataset.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(copy[lang][k])el.textContent=copy[lang][k]});
 document.getElementById("langBtn").textContent=lang==="pl"?"EN":"PL";
 document.title=lang==="pl"?"NextPulse Games — Darmowe gry. Bez reklam. Tworzone z pasją.":"NextPulse Games — Free games. No ads. Made with heart.";
}
document.getElementById("langBtn").addEventListener("click",()=>{lang=lang==="pl"?"en":"pl";localStorage.setItem("npg_lang",lang);apply()});
document.getElementById("year").textContent=new Date().getFullYear();
apply();