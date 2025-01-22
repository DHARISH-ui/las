// Auto visible enquery popup
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash if any
  if (path === "" || path === "/" || path.endsWith("/index.html")) {
      setTimeout(function () {
          const modalElement = document.getElementById('Enquiry_Form_Modal');
          if (modalElement) {
              const modal = new bootstrap.Modal(modalElement, {
                  keyboard: true
              });
              modal.show();
          }
      }, 5000);
  }
});

// tooltip bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.querySelectorAll('#accordion .card-header').forEach(header => {
    header.addEventListener('click', () => {
      document.querySelectorAll('#accordion .card-header').forEach(h => h.classList.remove('active-header'));
      if (!header.querySelector('.collapsed')) {
        header.classList.add('active-header');
      }
    });
});


// Number count
document.addEventListener('DOMContentLoaded', function () {
  function countUp(element, end, duration) {
      let start = 0;
      let step = Math.ceil(end / (duration / 60)); // Calculate step for 60FPS

      function updateCount() {
          start += step;
          if (start < end) {
              element.innerText = start + "+";
              setTimeout(updateCount, 16); // ~16ms for smooth animation
          } else {
              element.innerText = end + "+"; // Ensure final number
          }
      }

      updateCount();
  }

  function startCounting(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              document.querySelectorAll('.las_count_anime').forEach(element => {
                  const targetNumber = parseInt(element.innerText.replace(/\D/g, ''), 10);
                  countUp(element, targetNumber, 10000); // Start animation
              });
              observer.unobserve(entry.target); // Stop observing once triggered
          }
      });
  }

  // IntersectionObserver to watch when section comes into view
  const observer = new IntersectionObserver(startCounting, {
      root: null,    // Observe based on the viewport
      threshold: 0.5 // Trigger when 50% of the section is visible
  });

  const targetSection = document.querySelector('.las_who_we_are');
  if (targetSection) {
      observer.observe(targetSection);
  }
});
