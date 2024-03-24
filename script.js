document.getElementById("meowButton").addEventListener("click", function() {
  var audio = new Audio('sound.mp3');
  audio.play();
});
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.container');

  container.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.left = `${e.clientX}px`;
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
});
