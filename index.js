const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');
const landing = document.getElementById('landing');
const jmb = document.getElementById('jmb');

const landingPage = document.getElementById('landing-page');
const aboutPage = document.getElementById('about-me-page');
const projectsPage = document.getElementById('projects-page');
const contactsPage = document.getElementById('contacts-page');

window.addEventListener('load', () => {
    aboutPage.classList.add('hide');
    projectsPage.classList.add('hide');
    contactsPage.classList.add('hide');
})

jmb.addEventListener('click', () => {
    landingPage.classList.remove('hide');
    aboutPage.classList.add('hide');
    projectsPage.classList.add('hide');
    contactsPage.classList.add('hide');
})

about.addEventListener('click', () => {
    landingPage.classList.add('hide');
    aboutPage.classList.remove('hide');
    projectsPage.classList.add('hide');
    contactsPage.classList.add('hide');
})

projects.addEventListener('click', () => {
    landingPage.classList.add('hide');
    projectsPage.classList.remove('hide');
    aboutPage.classList.add('hide');
    contactsPage.classList.add('hide');
})

contacts.addEventListener('click', () => {
    landingPage.classList.add('hide');
    projectsPage.classList.add('hide');
    aboutPage.classList.add('hide');
    contactsPage.classList.remove('hide');
})