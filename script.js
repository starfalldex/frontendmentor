import { projectList } from "./assets/projectList.js";
const selectedProjectsWrapper = document.querySelector('#selectedProjectsWrapper');
const allProjectsWrapper = document.querySelector('#allProjectsWrapper');

const selectedIds = [24, 27, 30, 29, 31, 25,];

const selectedProjectsList = selectedIds.map(id =>
  projectList.find(project => id === project.id)
).filter(Boolean);


selectedProjectsList.forEach((project, i) => {
  addProject(project, selectedProjectsWrapper);
})
projectList.reverse().forEach((project, i) => {
  addProject(project, allProjectsWrapper);
})


function addProject(project, wrapper) {
  const a = document.createElement('a');
  a.classList.add('project-link');
  a.setAttribute('href', project.projectLink);

  // Project Content
  const projectContent = document.createElement('div');
  projectContent.classList.add('project-content');

  const img = document.createElement('img');
  img.classList.add('project-image');
  img.src = project.projectImage;
  img.alt = 'image here';

  // const video = document.createElement('video');
  // video.classList.add('project-video');
  // video.src = project.projectVideo;
  // video.autoplay = true;
  // video.loop = true;

  projectContent.appendChild(img);
  // projectContent.appendChild(video);

  // Project Details
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('project-name');
  nameDiv.textContent = project.projectName;

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('project-date');
  dateDiv.textContent = project.projectDate;

  projectDetails.appendChild(nameDiv);
  projectDetails.appendChild(dateDiv);

  // Open Project
  const openProject = document.createElement('div');
  openProject.classList.add('open-project');
  openProject.appendChild(document.createTextNode('Open'));

  a.append(projectContent, projectDetails, openProject);


  wrapper.appendChild(a);
}
