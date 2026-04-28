// header main information
const about = document.getElementById('about');
const resume = document.getElementById('resume');
const skill = document.getElementById('skill');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

// page main information
const about1 = document.getElementById('about1');
const resume1 = document.getElementById('resume1');
const skill1 = document.getElementById('skill1');
const project1 = document.getElementById('project1');
const contact1 = document.getElementById('contact1');

// name headder information
const a = document.getElementById('a');
const r = document.getElementById('r');
const s = document.getElementById('s');
const p = document.getElementById('p');
const c = document.getElementById('c');

about.style.color = 'rgb(255, 230, 0)';
resume.style.color = 'white';
skill.style.color = 'white';
project.style.color = 'white';
contact.style.color = 'white';

about1.style.display = "block";
resume1.style.display = "none";
skill1.style.display = "none";
project1.style.display = "none";
contact1.style.display = "none";

a.style.display = "flex";
r.style.display = "none";
s.style.display = "none";
p.style.display = "none";
c.style.display = "none";

// about information
about.addEventListener('click', () => {
    about1.style.display = "block";
    resume1.style.display = "none";
    skill1.style.display = "none";
    project1.style.display = "none";
    contact1.style.display = "none";
    a.style.display = "flex";
    r.style.display = "none";
    s.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    about.style.color = 'rgb(255, 230, 0)';
    resume.style.color = 'white';
    skill.style.color = 'white';
    project.style.color = 'white';
    contact.style.color = 'white';
});

// resume information
resume.addEventListener('click', () => {
    about1.style.display = "none";
    resume1.style.display = "block";
    skill1.style.display = "none";
    project1.style.display = "none";
    contact1.style.display = "none";
    a.style.display = "none";
    r.style.display = "flex";
    s.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    about.style.color = 'white';
    resume.style.color = 'rgb(255, 230, 0)';
    skill.style.color = 'white';
    project.style.color = 'white';
    contact.style.color = 'white';
});

// skill information
skill.addEventListener('click', () => {
    about1.style.display = "none";
    resume1.style.display = "none";
    skill1.style.display = "block";
    project1.style.display = "none";
    contact1.style.display = "none";
    a.style.display = "none";
    r.style.display = "none";
    s.style.display = "flex";
    p.style.display = "none";
    c.style.display = "none";
    about.style.color = 'white';
    resume.style.color = 'white';
    skill.style.color = 'rgb(255, 230, 0)';
    project.style.color = 'white';
    contact.style.color = 'white';
});

// projetc information
project.addEventListener('click', () => {
    about1.style.display = "none";
    resume1.style.display = "none";
    skill1.style.display = "none";
    project1.style.display = "block";
    contact1.style.display = "none";
    s.style.display = "none";
    a.style.display = "none";
    r.style.display = "none";
    p.style.display = "flex";
    c.style.display = "none";
    about.style.color = 'white';
    resume.style.color = 'white';
    skill.style.color = 'white';
    project.style.color = 'rgb(255, 230, 0)';
    contact.style.color = 'white';
});

// contact information
contact.addEventListener('click', () => {
    about1.style.display = "none";
    resume1.style.display = "none";
    skill1.style.display = "none";
    project1.style.display = "none";
    contact1.style.display = "block";
    s.style.display = "none";
    a.style.display = "none";
    r.style.display = "none";
    p.style.display = "none";
    c.style.display = "flex";
    about.style.color = 'white';
    resume.style.color = 'white';
    skill.style.color = 'white';
    project.style.color = 'white';
    contact.style.color = 'rgb(255, 230, 0)';
});
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "9ec7590d-4485-4bd2-94a5-15d70d02d062");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});