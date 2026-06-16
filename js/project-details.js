const params = new URLSearchParams(window.location.search);

const projectId = params.get("id");

const project = projects.find(
    p => p.id === projectId
);

const container =
document.getElementById("projectContainer");

if(project){

container.innerHTML = `

<div class="project-hero">

<img src="${project.image}" alt="${project.title}">

</div>

<div class="project-content">

<a href="projects.html" class="btn">
← Back To Projects
</a>

<h1>${project.title}</h1>

<div class="project-category">
${project.category}
</div>

<p class="project-description">
${project.description}
</p>

<div class="project-badge">
Completed Project
</div>

<br>

<a href="contact.html" class="btn">
Contact Urban Keystone
</a>

</div>

`;

}