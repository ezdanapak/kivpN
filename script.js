// Poem lines
const poemLines = [
    "მოდი! გეძახი ათას წლის მერე,",
    "დამნაცროს ელვამ შენი ტანისა;",
    "ვარდის ფურცლობის ნიშანი არი",
    "და დრო ახალი პაემანისა!.."
];

const poemDiv = document.getElementById('poem');
let currentLine = 0;

// Function to display next poem line
function displayNextLine() {
    poemDiv.style.opacity = 0; // Fade out
    setTimeout(() => {
        poemDiv.textContent = poemLines[currentLine]; // Change text
        poemDiv.style.opacity = 1; // Fade in
        currentLine = (currentLine + 1) % poemLines.length; // Loop
    }, 1000);
}

setInterval(displayNextLine, 4000); // Change lines every 4 seconds
displayNextLine(); // Show the first line immediately

// Falling roses animation
const canvas = document.getElementById('roseCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const roseColors = ['#ff4d4d', '#ffa64d', '#ff66b3', '#e066ff', '#4da6ff']; // Different rose colors
const roses = [];

class Rose {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.color = roseColors[Math.floor(Math.random() * roseColors.length)];
        }
        this.draw();
    }
}

// Create roses
function initRoses() {
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 5 + 5; // Random size
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 2 + 1; // Random speed
        const color = roseColors[Math.floor(Math.random() * roseColors.length)];
        roses.push(new Rose(x, y, size, speed, color));
    }
}

// Animate roses
function animateRoses() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roses.forEach(rose => rose.update());
    requestAnimationFrame(animateRoses);
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize and start animation
initRoses();
animateRoses();
