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
        "game-description": "Brokey-Poly is a fun and unpredictable board game where players navigate financial struggles, take risks, and attempt to survive in a world where fortune can change in an instant. Roll the dice, draw cards, and even test your luck in Russian Roulette! Will you make it big, or end up broke? Play to find out!",
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
         "game-description": "เกมยาจกเป็นเกมกระดานที่เต็มไปด้วยความสนุกและความไม่แน่นอน ซึ่งผู้เล่นต้องเผชิญกับปัญหาทางการเงิน เสี่ยงโชค และพยายามเอาตัวรอดในโลกที่โชคชะตาสามารถเปลี่ยนแปลงได้ตลอดเวลา ทอยลูกเต๋า จั่วไพ่ และแม้กระทั่งลองเสี่ยงโชคในรัสเซียนรูเล็ต! คุณจะรวย หรือจะหมดตัว? เล่นแล้วมาดูกัน!",
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
