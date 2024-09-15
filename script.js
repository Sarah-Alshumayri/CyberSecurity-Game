let wheel = document.getElementById('wheel');
let spinButton = document.getElementById('spin-btn');
let currentRotation = 0;
let segments = [
    "password.html",
    "phish.html",
    "awareness.html",
    "attacks.html"
];


function spinWheel() {
    // Randomize the spin rotation
    let randomRotation = Math.floor(Math.random() * 360) + 720; // Add 720 for extra spins
    currentRotation += randomRotation;
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Disable button while spinning
    spinButton.disabled = true;
    spinButton.innerText = "Spinning...";

    // After the spin finishes
    setTimeout(() => {
        let segmentIndex = (currentRotation / 60) % 6;  // Find the segment (each segment is 60 degrees)
        segmentIndex = Math.floor(segmentIndex) % 4; // We have 4 segments

        spinButton.innerText = "Spin Again";
        spinButton.disabled = false;

        // Redirect to the selected game's page
        window.location.href = `${segments[segmentIndex]}`;
    }, 4000);
}
