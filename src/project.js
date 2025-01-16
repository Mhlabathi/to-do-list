class Project {

    name;
    description;
    startDate;
    endDate;
    status;
    priority;
    notes;
    tasks = [];
    constructor(name, description, startDate, endDate, status, priority, notes) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.priority = priority;
        this.notes = notes;
        
    }

    // Function to display project details
    displayDetails() {    
        console.log(`Name: ${this.name}`);
        console.log(`Description: ${this.description}`);
        console.log(`Start Date: ${this.startDate}`);
        console.log(`End Date: ${this.endDate}`);
        console.log(`Status: ${this.status}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Notes: ${this.notes}`);
        console.log(`Tasks: ${this.tasks}`);
    }

    // Getters and Setters
    // Getters
    getProjectName() {
        return this.name;
    }

    getProjectDescription() {
        return this.description;
    }

    getProjectStartDate() {
        return this.startDate;
    }

    getProjectEndDate() {
        return this.endDate;
    }

    getProjectStatus() {
        return this.status;
    }

    getProjectPriority() {
        return this.priority;
    }

    getProjectNotes() {
        return this.notes;
    }

    getProjectTasks() {
        return this.tasks;
    }

    // Setters
    setProjectName(name) {
        this.name = name;
    }

    setProjectDescription(description) {
        this.description = description;
    }

    setProjectStartDate(startDate) {
        this.startDate = startDate;
    }

    setProjectEndDate(endDate) {
        this.endDate = endDate;
    }

    setProjectStatus(status) {
        this.status = status;
    }

    setProjectPriority(priority) {
        this.priority = priority;
    }

    setProjectNotes(notes) {
        this.notes = notes;
    }

    setProjectTasks(tasks) {
        this.tasks = tasks;
    }

    // Function to add task to project
    addTask(task) {
        this.tasks.push(task);
    }

    // Function to remove task from project
    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
    }
}

export { Project };