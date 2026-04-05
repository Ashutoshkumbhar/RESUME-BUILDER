// theme.js - Global Theme Management

function initTheme() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  // Check Local Storage and apply it
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (toggleSwitch && currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  } else {
    // Check system preference if no local storage preference exists
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if(prefersDarkScheme.matches) {
       document.documentElement.setAttribute('data-theme', 'dark');
       if(toggleSwitch) toggleSwitch.checked = true;
    }
  }

  // Handle Switch Change
  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }, false);
  }
}

// Run on document ready
document.addEventListener('DOMContentLoaded', initTheme);
