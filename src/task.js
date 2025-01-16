

class Task {

    header;
    description;
    dueDate;
    priority;
    project;
    status;

    constructor(taskHeader, taskDescription, taskDueDate, taskPriority, project) {
        this.header = taskHeader;
        this.description = taskDescription;
        this.dueDate = taskDueDate;
        this.priority = taskPriority;
        this.project = project;
    };

    getTask() {
        return {
            header: this.header,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            project: this.project,
            status: this.status
        }
    };

    // Getters and Setters
    // Getters
    getTaskHeader() {
        return this.header;
    }

    getTaskDescription() {
        return this.description;
    }

    getTaskDueDate() {
        return this.dueDate;
    }

    getTaskPriority() {
        return this.priority;
    }

    getTaskProject() {
        return this.project;
    }

    getTaskStatus() {
        return this.status;
    }

    // Setters
    setTaskHeader(taskHeader) {
        this.header = taskHeader;
    }

    setTaskDescription(taskDescription) {
        this.description = taskDescription;
    }

    setTaskDueDate(taskDueDate) {
        this.dueDate = taskDueDate;
    }

    setTaskPriority(taskPriority) {
        this.priority = taskPriority;
    }

    setTaskProject(taskProject) {
        this.project = taskProject;
    }

    setTaskStatus(taskStatus) {
        this.status = taskStatus;
    }
    
};

export { Task };

