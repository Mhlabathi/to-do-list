import {Task as Task} from './task.js';
import { Project as Project } from './project.js';

const projects = [];
const tasks = [];

const taskInstance = new Task();

taskInstance.header = 'MyTask Header';
taskInstance.description = 'MyTask Description';
taskInstance.dueDate = '2021-12-31';
taskInstance.priority = 'High';
taskInstance.status = 'In Progress';

// Display project details

export { projects, tasks, taskInstance };
