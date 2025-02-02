const cardEvents = [
    "You dig a trash can and found $20!",
    "You found a rare golden coin! Gain $50.",
    "You stepped on a banana peel and lost $5.",
    "A stranger gave you $100 for no reason!",
    "You got scammed... Lose $30.",
    "You found an old treasure map. What now?",
    "You won a small lottery prize! Gain $10.",
    "A bird stole your wallet. Lose $15.",
    "You found a mysterious key on the ground.",
    "You helped an old lady cross the street. Gain $5.",
    "You got arrested for trespassing. Lose a turn!",
    "You tripped over a rock. Nothing happened.",
    "A dog chased you! Lose $5 running away.",
    "You found a bag of cash! Gain $200.",
    "You accidentally paid double at the shop. Lose $20."
];

function drawCard() {
    let randomEvent = cardEvents[Math.floor(Math.random() * cardEvents.length)];
    document.getElementById("card-display").innerText = randomEvent;
}
