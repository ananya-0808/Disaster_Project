// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the elements
  const energy = document.querySelector('.energy');
  const stocks = document.querySelector('.stocks');
  const building = document.querySelector('.building');
  const cycle = document.querySelector('.cycle');

  // Add hover effect for .energy
  energy.addEventListener('mouseenter', () => {
    stocks.style.opacity = '0';
    building.style.opacity = '0';
    cycle.style.opacity = '0';
  });

  energy.addEventListener('mouseleave', () => {
    stocks.style.opacity = '1';
    building.style.opacity = '1';
    cycle.style.opacity = '1';
  });

  // Add hover effect for .stocks
  stocks.addEventListener('mouseenter', () => {
    energy.style.opacity = '0';
    building.style.opacity = '0';
    cycle.style.opacity = '0';
  });

  stocks.addEventListener('mouseleave', () => {
    energy.style.opacity = '1';
    building.style.opacity = '1';
    cycle.style.opacity = '1';
  });

  building.addEventListener('mouseenter', () => {
    stocks.style.opacity = '0';
    energy.style.opacity = '0';
    cycle.style.opacity = '0';
  });

  building.addEventListener('mouseleave', () => {
    stocks.style.opacity = '1';
    energy.style.opacity = '1';
    cycle.style.opacity = '1';
  });

  // Add hover effect for .stocks
  cycle.addEventListener('mouseenter', () => {
    energy.style.opacity = '0';
    building.style.opacity = '0';
    stocks.style.opacity = '0';
  });

  cycle.addEventListener('mouseleave', () => {
    energy.style.opacity = '1';
    building.style.opacity = '1';
    stocks.style.opacity = '1';
  });
});
