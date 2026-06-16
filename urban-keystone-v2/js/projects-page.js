// HOME PAGE FEATURED PROJECTS

const featuredProjects =
document.getElementById("featuredProjects");

if (featuredProjects) {

    const featured = [
        "french-villa",
        "english-villa",
        "spanish-villa",
        "apartment",
        "tropical-bungalow",
        "veliyaars-residence"
    ];

    featured.forEach(id => {

        const project = projects.find(
            p => p.id === id
        );

        if(project){

            featuredProjects.innerHTML += `
            <a href="project.html?id=${project.id}" class="project-item">

                <img src="${project.image}" alt="${project.title}">

                <div class="project-overlay">

                    <h3>${project.title}</h3>

                    <p>${project.category}</p>

                </div>

            </a>
            `;
        }

    });

}


// PROJECTS PAGE - ALL 26 PROJECTS

const allProjects =
document.getElementById("allProjects");

if(allProjects){

    projects.forEach(project => {

        allProjects.innerHTML += `
        <a href="project.html?id=${project.id}" class="project-item">

            <img src="${project.image}" alt="${project.title}">

            <div class="project-overlay">

                <h3>${project.title}</h3>

                <p>${project.category}</p>

            </div>

        </a>
        `;
    });

}


// SLIDER

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    }, 5000);


}