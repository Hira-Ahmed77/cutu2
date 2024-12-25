// JavaScript: Populate reasons why you love her dynamically
const reasons = [
    "You have the kindest heart.",
    "Your smile lights up my world.",
    "You make every moment special.",
    "You are my inspiration every day.",
    "You are simply perfect just the way you are."
];

const reasonsList = document.getElementById("reasons");

// Add each reason as a list item
reasons.forEach(reason => {
    const listItem = document.createElement("li");
    listItem.textContent = reason;
    reasonsList.appendChild(listItem);
});
