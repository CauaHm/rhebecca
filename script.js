document.querySelectorAll('.cloud').forEach(cloud => {
    cloud.addEventListener('click', (e) => {
      createParticles(e.pageX, e.pageY); // Posições de onde a nuvem foi clicada
    });
  });
  
  function createParticles(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    particle.style.left = `${x - 5}px`;
    particle.style.top = `${y - 5}px`;
    document.body.appendChild(particle);
  
    // Anima a partícula
    let size = 5;
    let opacity = 1;
    let interval = setInterval(() => {
      size += 1;
      opacity -= 0.1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      if (opacity <= 0) clearInterval(interval);
    }, 50);
  }
  