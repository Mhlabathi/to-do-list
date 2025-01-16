import './style.css';
import './project.css';
import { ProjectUI } from './projectUI.js';
import { Project } from './project.js';
import { TaskUI } from './taskUI.js';
import { Task } from './task.js';
import { tasks } from './task-project.js';
import { projects } from './task-project.js';

//Default Stuff
const projectInstance = new Project();
const taskInstance = new Task();

function createDefaultProjectAndTasks(){
    //Default Project
    projectInstance.name = 'Default Project';
    projectInstance.description = 'Default Project Description';
    projectInstance.startDate = '2021-01-01';
    projectInstance.endDate = '2021-12-31';
    projectInstance.status = 'Done';
    projectInstance.priority = 'Low';
    projectInstance.notes = 'this is a second mock project';
    projectInstance.tasks = [];

    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';
    projectMainContainer.appendChild(projectContainer);

    const projectOptionsDiv = document.createElement('div');
    projectOptionsDiv.className = 'project-options-div';
    const viewProject = document.createElement('button');
    viewProject.textContent = 'View';
    const editProject = document.createElement('button');
    editProject.textContent = 'Edit';
    const deleteProject = document.createElement('button');
    deleteProject.textContent = 'Delete';
    projectOptionsDiv.appendChild(viewProject);
    projectOptionsDiv.appendChild(editProject);
    projectOptionsDiv.appendChild(deleteProject);

    const newUIProject = new ProjectUI(projectInstance);
    const projectObject = new ProjectObject(projectInstance, newUIProject, projectContainer);

    projects.push(projectInstance);
    projectObjects.push(projectObject);
    projectContainer.appendChild(newUIProject.getProjectContainer());
    projectContainer.appendChild(projectOptionsDiv);
    addEventListenerToProjectOptions(projectObject);
    addProjectToSidePanel(projectObject);

    // Default Task
    taskInstance.header = 'Wash Your Dirty Laundry';
    taskInstance.description = 'Take Laundry to Teanna';
    taskInstance.dueDate = '2021-12-31';
    taskInstance.priority = 'High';
    taskInstance.status = 'In Progress';

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskMainContainer.appendChild(taskContainer);

    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options-div';
    const addToProject = document.createElement('button');
    addToProject.textContent = "Add To Project";
    const editTask = document.createElement('button');
    editTask.textContent = "Edit";
    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';
    taskOptions.appendChild(addToProject);
    taskOptions.appendChild(editTask);
    taskOptions.appendChild(deleteTask);

    const newTaskUI = new TaskUI(taskInstance);
    const taskObject = new TaskObject(taskInstance, newTaskUI, taskContainer);

    tasks.push(taskInstance);
    taskObjects.push(taskObject);
    taskContainer.appendChild(newTaskUI.getTaskContainer());
    taskContainer.appendChild(taskOptions);
    console.log(taskObject);
    console.log(taskObject.container.children[1].children[0]);
    addEventListenerToTaskOptions(taskObject);

}


/*******Dynamic task and project creation***/
//For tasks

const taskObjects = [];

function TaskObject(task, taskui, container){
    this.task = task;
    this.ui_task = taskui;
    this.container = container;
    this.project = null;
}

//Add task elements
const taskMainContainer = document.getElementById('task-panel');

const addTaskButton = document.querySelector('#add-task');
const taskDialog = document.querySelector('#task-dialog');
const taskName = taskDialog.querySelector('#task-name');
const taskDescription = taskDialog.querySelector('#task-description');
const taskDate = taskDialog.querySelector('#task-date');
const taskPriority = taskDialog.querySelector('#task-priority');
const submitTaskButton = taskDialog.querySelector('#submit-task');

submitTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskMainContainer.appendChild(taskContainer);

    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options-div';
    const addToProject = document.createElement('button');
    addToProject.textContent = "Add To Project";
    const editTask = document.createElement('button');
    editTask.textContent = "Edit";
    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';
    taskOptions.appendChild(addToProject);
    taskOptions.appendChild(editTask);
    taskOptions.appendChild(deleteTask);

    const newTask = new Task(
        taskName.value,
        taskDescription.value,
        taskDate.value,
        taskPriority.value,
    );

    const newTaskUI = new TaskUI(newTask);
    const taskObject = new TaskObject(newTask, newTaskUI, taskContainer);

    tasks.push(newTask);
    taskObjects.push(taskObject);
    taskContainer.appendChild(newTaskUI.getTaskContainer());
    taskContainer.appendChild(taskOptions);
    console.log(taskObject);
    console.log(taskObject.container.children[1].children[0]);
    addEventListenerToTaskOptions(taskObject);
    taskDialog.close();

});

addTaskButton.addEventListener( 'click', () => {
    taskDialog.showModal();
});

function addEventListenerToTaskOptions(taskObj){
    //Add to project btn
    taskObj.container.children[1].children[0].addEventListener('click', () =>{
        addTaskToProject(taskObj);
    })

    taskObj.container.children[1].children[1].addEventListener('click', () => {
        
    })

    //Delete task btn
    taskObj.container.children[1].children[2].addEventListener('click', () =>{
        deleteTask(taskObj);
    })


}

function deleteTask(taskObj){
    if(taskObj.project !== null){
        taskObj.project.tasks.splice(taskObj, 1);
    }
    tasks.splice(tasks.indexOf(taskObj.task), 1);
    taskObjects.splice(taskObjects.indexOf(taskObj), 1);
    taskObj.container.replaceChildren();
    taskMainContainer.removeChild(taskObj.container);
}

function addTaskToProject(taskObj){
    const projectDropDown = document.createElement("select");
    projectDropDown.id = 'projectDropdown';

    //first option empty
    const option = document.createElement('option');
    option.innerHTML = '...';
    option.value = null;
    projectDropDown.options.add(option);

    projectObjects.forEach( projectObj => {
        const option = document.createElement('option');
        option.innerHTML = projectObj.project.name;
        option.value = projectObj.project.name;
        projectDropDown.options.add(option);
    });

    let check = taskObj.container.lastElementChild.id;
    if( check === 'projectDropdown'){
        taskObj.container.removeChild(taskObj.container.lastElementChild);
    }

    taskObj.container.appendChild(projectDropDown);

    projectDropDown.addEventListener('change', () => {
        projectObjects.forEach( projectObj => {
            if(projectObj.project.name === projectDropDown.value && !projectObj.tasks.includes(taskObj) && taskObj.project === null){
                projectObj.tasks.push(taskObj);
                taskObj.project = projectObj;
                alert(`Task added to ${projectObj.project.name}`);
                taskObj.container.removeChild(projectDropDown);
                taskObj.task.project = projectObj.project.name;
                console.log(projectObj.tasks);
                return;
            }
        });
    });
}


//For Projects
const projectObjects = [];
function ProjectObject( project, projectui, container){
    this.project = project;
    this.ui_project = projectui;
    this.container = container;
    this.tasks = [];
    this.list = document.createElement('li');   
}

//Add project elements
const projectMainContainer = document.getElementById('project-panel');

const addProjectButton = document.querySelector('#add-project');
const projectDialog = document.querySelector('#project-dialog');
const projectName = projectDialog.querySelector('#project-name');
const projectDescription = projectDialog.querySelector('#project-description');
const projectStartDate = projectDialog.querySelector('#project-start-date');
const projectEndDate = projectDialog.querySelector('#project-end-date');
const projectStatus = projectDialog.querySelector('#project-status');
const projectPriority = projectDialog.querySelector('#project-priority');
const projectNotes = projectDialog.querySelector('#project-notes');
const submitProjectButton = projectDialog.querySelector('#submit-project');


submitProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';
    projectMainContainer.appendChild(projectContainer);

    const projectOptionsDiv = document.createElement('div');
    projectOptionsDiv.className = 'project-options-div';
    const viewProject = document.createElement('button');
    viewProject.textContent = 'View';
    const editProject = document.createElement('button');
    editProject.textContent = 'Edit';
    const deleteProject = document.createElement('button');
    deleteProject.textContent = 'Delete';
    projectOptionsDiv.appendChild(viewProject);
    projectOptionsDiv.appendChild(editProject);
    projectOptionsDiv.appendChild(deleteProject);

    const newProject = new Project(projectName.value,
        projectDescription.value,
        projectStartDate.value,
        projectEndDate.value,
        projectStatus.value,
        projectPriority.value,
        projectNotes.value
    );
    const newUIProject = new ProjectUI(newProject);
    const projectObject = new ProjectObject(newProject, newUIProject, projectContainer);

    projects.push(newProject);
    projectObjects.push(projectObject);
    projectContainer.appendChild(newUIProject.getProjectContainer());
    projectContainer.appendChild(projectOptionsDiv);
    addEventListenerToProjectOptions(projectObject);
    addProjectToSidePanel(projectObject);
    projectDialog.close();
});


addProjectButton.addEventListener('click', () => {
    projectDialog.showModal();
});

function addEventListenerToProjectOptions( projectObj ){
    projectObj.container.children[1].children[2].addEventListener('click', () =>{
        deleteProject(projectObj);
    })
}

function deleteProject( projectObj ){
    projectMainContainer.removeChild(projectObj.container);
    projects.splice(projects.indexOf(projectObj.project), 1);
    projectObjects.splice(projectObjects.indexOf(projectObj), 1);
    deleteProjectFromSidePanel(projectObj);
    console.log(projects);
}

//Side Panel elements
const sidePanelMainContainer = document.getElementById('side-panel');
const projectList = document.getElementById('project-list');
const allTasks = document.getElementById('all-tasks');
const tadayTask = document.getElementById('today-tasks');
const highPriority = document.getElementById('high-tasks');
const leastPriority = document.getElementById('least-tasks');
const selectAllProjects = document.getElementById('all-projects');

leastPriority.addEventListener('click', () => {
    taskMainContainer.replaceChildren();
    projectMainContainer.replaceChildren();
    taskObjects.forEach( taskObj => {
        if(taskObj.task.priority === 'low'){
            taskMainContainer.appendChild(taskObj.container);
        }
    });
})

highPriority.addEventListener('click', () => {
    taskMainContainer.replaceChildren();
    projectMainContainer.replaceChildren();
    taskObjects.forEach( taskObj => {
        if(taskObj.task.priority === 'High'){
            taskMainContainer.appendChild(taskObj.container);
        }
    });
});

tadayTask.addEventListener('click', () => {
    taskMainContainer.replaceChildren();
    projectMainContainer.replaceChildren();
    const date = new Date().toJSON();
    taskObjects.forEach( taskObj => {
        if(taskObj.task.dueDate === date.slice(0, 10)){
            taskMainContainer.appendChild(taskObj.container);
        }
    });
});

selectAllProjects.addEventListener('click', () => {
    viewAllProjects();
});

allTasks.addEventListener('click', () => {
    viewAllTasks();
});

function viewAllTasks(){
    taskMainContainer.replaceChildren();
    taskObjects.forEach( taskObj => {
        taskMainContainer.appendChild(taskObj.container);
    });
}

function populateSidePanel(){
    projectObjects.forEach( projectObj => {
        addProjectToSidePanel(projectObj)
    });

}

function addProjectToSidePanel(projectObj){
    let name = projectObj.project.name;
    projectObj.list.textContent = name;
    projectList.appendChild(projectObj.list);
    projectObj.list.addEventListener( 'click', () => {
        openOnlyProject(projectObj);
        openProjectTask(projectObj);
    });
}

function openOnlyProject(projectObj){
    projectMainContainer.replaceChildren(projectObj.container);
}

function viewAllProjects(){
    projectMainContainer.replaceChildren();
    projectObjects.forEach( projectObj => {
        projectMainContainer.appendChild(projectObj.container);
    });

    //view all tasks as well
    viewAllTasks();
}

function deleteProjectFromSidePanel(projectObj){
    projectList.removeChild(projectObj.list);
}

function openProjectTask(projectObj){
    taskMainContainer.replaceChildren();
    projectObj.tasks.forEach( taskObj => {
        taskMainContainer.appendChild(taskObj.container);
    });
}

export { projectMainContainer , taskMainContainer, createDefaultProjectAndTasks };
