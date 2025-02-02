function changeLanguage() {
  var language = document.getElementById("language").value;

  if (language === "th") {
    document.getElementById("header-title").innerText = "บโรคีย์ โพลี";
    document.getElementById("nav-home").innerText = "หน้าแรก";
    document.getElementById("nav-dice").innerText = "ทอยลูกเต๋า";
    document.getElementById("nav-card").innerText = "สับไพ่";
    document.getElementById("nav-roulette").innerText = "รูเล็ตต์รัสเซีย";

    if (document.getElementById("home-title")) {
      document.getElementById("home-title").innerText = "ยินดีต้อนรับสู่บโรคีย์โพลี!";
      document.getElementById("home-description").innerText = "ประสบการณ์บอร์ดเกมสุดยอด";
    }

    if (document.getElementById("dice-title")) {
      document.getElementById("dice-title").innerText = "ทอยลูกเต๋า";
      document.getElementById("dice-description").innerText = "คลิกปุ่มเพื่อทอยลูกเต๋า!";
    }
  } else {
    document.getElementById("header-title").innerText = "Brokey Poly";
    document.getElementById("nav-home").innerText = "Home";
    document.getElementById("nav-dice").innerText = "Dice Roller";
    document.getElementById("nav-card").innerText = "Card Shuffle";
    document.getElementById("nav-roulette").innerText = "Russian Roulette";

    if (document.getElementById("home-title")) {
      document.getElementById("home-title").innerText = "Welcome to Brokey Poly!";
      document.getElementById("home-description").innerText = "The ultimate board game experience.";
    }

    if (document.getElementById("dice-title")) {
      document.getElementById("dice-title").innerText = "Roll the Dice";
      document.getElementById("dice-description").innerText = "Click the button to roll the dice!";
    }
  }
}
