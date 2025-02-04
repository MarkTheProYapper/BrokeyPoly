const translations = {
    en: {
        "game-title": "Brokey-Poly",
        "roll-title": "Roll the Dice!",
        "dice-count-label": "Number of Dice:",
        "one-die": "One Die",
        "two-dice": "Two Dice",
        "roll-button": "Roll Dice",
        "result-text": "Press 'Roll Dice' to see the result.",
        "rolled-one": "You rolled a {0}!",
        "rolled-two": "You rolled a {0} and a {1}!",
        "lang-label": "Language:"
    },
    th: {
        "game-title": "เกมยาจก",
        "roll-title": "ทอยลูกเต๋า!",
        "dice-count-label": "จำนวนลูกเต๋า:",
        "one-die": "หนึ่งลูก",
        "two-dice": "สองลูก",
        "roll-button": "ทอยลูกเต๋า",
        "result-text": "กด 'ทอยลูกเต๋า' เพื่อดูผลลัพธ์",
        "rolled-one": "คุณทอยได้ {0}!",
        "rolled-two": "คุณทอยได้ {0} และ {1}!",
        "lang-label": "ภาษา:"
    }
};

function changeLanguage() {
    let selectedLang = document.getElementById("language").value;
    localStorage.setItem("selectedLang", selectedLang);
    applyTranslations();
}

function applyTranslations() {
    let selectedLang = localStorage.getItem("selectedLang") || "en";
    let elements = document.querySelectorAll("[id]");

    elements.forEach((element) => {
        let key = element.id;
        if (translations[selectedLang][key]) {
            element.innerText = translations[selectedLang][key];
        }
    });
}

function getTranslation(key) {
    let selectedLang = localStorage.getItem("selectedLang") || "en";
    return translations[selectedLang][key] || key;
}
