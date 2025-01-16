// // Purpose: To import all task and project UI modules into one file for easy access and use in the indexUI.js file.
// import { ProjectUI } from './projectUI.js';
// import { Project } from './project.js';
// import { taskUI } from './taskUI.js';
// import { projects } from './task-project.js';
// import { tasks } from './task-project.js';

// const projectDialog = document.querySelector('#project-dialog');

// const projectName = projectDialog.querySelector('#project-name');
// const projectDescription = projectDialog.querySelector('#project-description');
// const projectStartDate = projectDialog.querySelector('#project-start-date');
// const projectEndDate = projectDialog.querySelector('#project-end-date');
// const projectStatus = projectDialog.querySelector('#project-status');
// const projectPriority = projectDialog.querySelector('#project-priority');
// const projectNotes = projectDialog.querySelector('#project-notes');
// const submitProjectButton = projectDialog.querySelector('#submit-project');

// const addTaskButton = document.getElementById('add-task');

// const ui_projects = [];
// ui_projects.push(new ProjectUI(projects[0]));
// ui_projects.push(new ProjectUI(projects[1]));
// const ui_tasks = [];

// function addProject(){
    
//     projectDialog.showModal();
    
//     submitProjectButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         const newProject = new Project(projectName.value, projectDescription.value, projectStartDate.value, projectEndDate.value, projectStatus.value, projectPriority.value, projectNotes.value);
//         const newUIProject = new ProjectUI(newProject);
//         console.log("Ui projects");
//         projects.push(newProject);
//         ui_projects.push(newUIProject);
//         console.log(ui_projects);
//         console.log(projects);
//         projectDialog.close();
//     });
// }

// export { addProject, ui_projects, ui_tasks };

// // const addProjectButton = document.querySelector('#add-project');
// // const projectDialog = document.querySelector('#project-dialog');

// // const projectName = projectDialog.querySelector('#project-name');
// // const projectDescription = projectDialog.querySelector('#project-description');
// // const projectStartDate = projectDialog.querySelector('#project-start-date');
// // const projectEndDate = projectDialog.querySelector('#project-end-date');
// // const projectStatus = projectDialog.querySelector('#project-status');
// // const projectPriority = projectDialog.querySelector('#project-priority');
// // const projectNotes = projectDialog.querySelector('#project-notes');
// // const submitProjectButton = projectDialog.querySelector('#submit-project');

// // const addTaskButton = document.getElementById('add-task');

// // addProjectButton.addEventListener('click', () => {
// //     projectDialog.showModal();
// // });

// // submitProjectButton.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     const newProject = new Project(projectName.value, projectDescription.value, projectStartDate.value, projectEndDate.value, projectStatus.value, projectPriority.value, projectNotes.value);
// //     const newUIProject = new ProjectUI(newProject);
// //     projects.push(newProject);
// //     ui_projects.push(newUIProject);
// //     projectDialog.close();
// // });
