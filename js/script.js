// Form submission mock functionality
const form = document.querySelector('#survey-form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    alert("Submitted! (not really, don't worry)");
});

// Dark Mode
const themeToggle = document.querySelector('#theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Check if the users currently using dark mode
if (currentTheme === 'dark' || (!currentTheme && prefersDark.matches)) {
    document.body.setAttribute('data-theme', 'dark');
    if (themeToggle) {
        themeToggle.checked = true;
    }
} else {
    document.body.setAttribute('data-theme', 'light');
    if (themeToggle) {
        themeToggle.checked = false;
    }
}

// Theme toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('change', function() {
        // is it checked? (set to dark)
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }); 
}