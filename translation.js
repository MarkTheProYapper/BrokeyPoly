// Store translations
const translations = {
    en: {
        "game-title": "Brokey-Poly",
        "nav-home": "Home",
        "nav-dice": "Dice Roller",
        "nav-card": "Card Shuffle",
        "nav-russian": "Russian Roulette",
        "lang-label": "Language:",
        "card-title": "Card Shuffle",
        "draw-card": "Draw a Card",
        "russian-title": "Russian Roulette",
        "add-player": "Add Player",
        "start-game": "Start Game",
        "game-result": "Waiting for players...",
        "random-events": [
            "You found $20 in a trash can!",
            "You lost $10 while gambling!",
            "You stepped on gum, lose a turn!",
            "You found a rare item worth $50!",
            "You got a free ride to the next checkpoint!"
        ],
        "winner-message": "{winner} wins! {loser} lost the game!"
    },
    th: {
        "game-title": "เกมยาจก",
        "nav-home": "หน้าแรก",
        "nav-dice": "ทอยลูกเต๋า",
        "nav-card": "สุ่มการ์ด",
        "nav-russian": "รัสเซียนรูเล็ต",
        "lang-label": "ภาษา:",
        "card-title": "สุ่มการ์ด",
        "draw-card": "จั่วการ์ด",
        "russian-title": "รัสเซียนรูเล็ต",
        "add-player": "เพิ่มผู้เล่น",
        "start-game": "เริ่มเกม",
        "game-result": "รอผู้เล่น...",
        "random-events": [
            "คุณขุดถังขยะแล้วพบเงิน 20 บาท!",
            "คุณเสียเงิน 10 บาทไปกับการพนัน!",
            "คุณเหยียบหมากฝรั่ง, เสียตาเดิน!",
            "คุณพบไอเทมหายากมูลค่า 50 บาท!",
            "คุณได้รับโดยสารฟรีไปยังจุดหมาย!"
        ],
        "winner-message": "{winner} ชนะ! {loser} แพ้!"
    }
};

// Function to update text when language changes
function changeLanguage() {
    let selectedLang = document.getElementById("language").value;
    localStorage.setItem("selectedLanguage", selectedLang);
    
    document.querySelectorAll("[id]").forEach(el => {
        let key = el.id;
        if (translations[selectedLang][key]) {
            el.innerText = translations[selectedLang][key];
        }
    });
}

// Apply saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language").value = savedLang;
    changeLanguage();
});
