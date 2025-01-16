import './project.css';

class ProjectUI{

    //Project Container Elements
    projectContainer = document.createElement('div');
    projectDetails = document.createElement('div');

    constructor(projectObj){
        this.populateDOMObj(projectObj);
    }

    populateDOMObj(projectObj){
        this.projectContainer.className = 'project-container';
        this.projectDetails.className = 'project-details';

        this.projectContainer.appendChild(this.projectDetails);

        //Project Details Elements
        //title-descr-container
        const title_descr_container = document.createElement('div');
        title_descr_container.className = 'title-descr-container';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = projectObj.name;
        const ProjectDescription = document.createElement('p');
        ProjectDescription.textContent = projectObj.description;
        title_descr_container.appendChild(projectTitle);
        title_descr_container.appendChild(ProjectDescription);

        this.projectDetails.appendChild(title_descr_container);

        //notes-container
        const notes_container = document.createElement('div');
        notes_container.className = 'notes-container';
        const projectNotes = document.createElement('p');
        projectNotes.textContent = projectObj.notes;
        notes_container.appendChild(projectNotes);
        this.projectDetails.appendChild(notes_container);
    }



    getProjectContainer(){
        return this.projectContainer;
    }
}


export { ProjectUI };

