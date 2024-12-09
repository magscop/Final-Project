const words = ["ACCESSIBILITY ADVOCATE.", "DESIGN SYSTEM NINJA.", "PROBLEM SOLVER"];
const animatedWord = document.getElementById('animated-word');

// Function to change word
function changeWord() {
    let currentIndex = 0;

    setInterval(() => {
        animatedWord.textContent = words[currentIndex];
        currentIndex++;

        if (currentIndex >= words.length) {
            currentIndex = 0;
        }
    }, 2500); // Change word every 3 seconds (3000 milliseconds)
}

// Call function to start changing words
changeWord();



document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            // Remove 'big' class from all projects
            projects.forEach(function(proj) {
                proj.classList.remove('big');
            });

            // Add 'big' class to the clicked project
            project.classList.add('big');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-5 a');
    const projects = document.querySelectorAll('.project');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const tag = this.getAttribute('data-tag');

            projects.forEach(project => {
                if (tag === 'all' || project.getAttribute('data-tag').includes(tag)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });

            adjustGridLayout(); // Call function to adjust grid layout after filtering
        });
    });

    // Function to adjust grid layout
    function adjustGridLayout() {
        const container = document.querySelector('.container');
        const visibleProjects = Array.from(container.querySelectorAll('.project:not(.hidden)'));
        const columnCount = 2; // Number of columns in your grid

        visibleProjects.forEach((project, index) => {
            const columnIndex = index % columnCount;
            const rowIndex = Math.floor(index / columnCount);

            project.style.gridColumn = columnIndex + 1; // Adjust for 1-based index
            project.style.gridRow = rowIndex + 1; // Adjust for 1-based index
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-5 a');
    const projects = document.querySelectorAll('.project');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const tag = this.getAttribute('data-tag');

            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));

            // Add active class to the clicked menu item
            this.classList.add('active');

            // Filter projects based on the selected tag
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tag').split(',');
                if (tag === 'all' || projectTags.includes(tag)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
});


const flipContainer = document.getElementById('flip-container');

flipContainer.addEventListener('click', function() {
    if (!this.classList.contains('flipped')) {
        this.classList.add('flipped');
        setTimeout(() => {
            this.classList.add('paused');
        }, 3000); // Pause after 3 seconds
    } else {
        this.classList.remove('flipped');
        this.classList.remove('paused');
    }
});


const navE1 = document.querySelector(".nav");
const hamburgerE1 = document.querySelector(".hamburger");

hamburgerE1.addEventListener("click", () => {
    navE1.classList.toggle("nav--open");
    hamburgerE1.classList.toggle("hamburger--open");

});

navE1.addEventListener("click", () => {
    navE1.classList.remove("nav--open");
    hamburgerE1.classList.remove("hamburger--open");

});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        hamburger.classList.toggle('active');
    });
});


document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var password = document.getElementById('password').value;
    var correctPassword = 'maggie'; // Replace with your actual password

    if (password === correctPassword) {
        // Redirect to the protected page
        window.location.href = 'trindent.html';
    } else {
        // Display error message
        var errorMessage = document.getElementById('error');
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all the filter menu items
    const filterLinks = document.querySelectorAll('.menu-5 a');
    
    // Get all the project elements
    const projects = document.querySelectorAll('.project-1, .project-2, .project-3, .project-4, .project-5, .project-6, .project-7');
    
    // Add click event listener to each filter menu item
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove 'active' class from all filter links
            filterLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked filter
            this.classList.add('active');
            
            // Get the selected tag
            const selectedTag = this.getAttribute('data-tag');
            
            // Filter projects based on the selected tag
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tag').split(', ');
                if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
                    project.style.display = 'block'; // Show project
                } else {
                    project.style.display = 'none'; // Hide project
                }
            });
        });
    });
});
