import './task.css';
import { Task } from './task';
import { taskInstance } from './task-project';

class  TaskUI{
    //Task Container Elements
    taskContainer = document.createElement('div');
    taskDetails = document.createElement('div');
    taskDates = document.createElement('div');

    constructor(taskObj){
        this.populateDOMObj(taskObj);
    }

    populateDOMObj(taskObj){
        this.taskContainer.className = 'task-container';
        this.taskDetails.className = 'task-details';
        this.taskDates.className = 'task-dates';

        this.taskContainer.appendChild(this.taskDetails);
        this.taskContainer.appendChild(this.taskDates);

        //Task Details Elements
        //title-descr-container
        const taskHeader = document.createElement('h2');
        taskHeader.textContent = taskObj.header;
        const taskProject = document.createElement('p');
        taskProject.textContent = 'For: ' + taskObj.project;
        const taskDescription = document.createElement('p');
        taskDescription.textContent = taskObj.description;
        this.taskDetails.appendChild(taskHeader);
        this.taskDetails.appendChild(taskProject);
        this.taskDetails.appendChild(taskDescription);

        //dates-container
        const dueDate = document.createElement('p');
        dueDate.textContent = taskObj.dueDate;
        const priority = document.createElement('p');
        priority.textContent = taskObj.priority;
        this.taskDates.appendChild(dueDate);
        this.taskDates.appendChild(priority);    
    }

    getTaskContainer(){
        return this.taskContainer;
    }
}

const taskContentContainer = new TaskUI(taskInstance).getTaskContainer();

export { TaskUI, taskContentContainer };