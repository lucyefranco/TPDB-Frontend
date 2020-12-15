const url = 'http://localhost:4000/api/v1/projectWorks'

class ProjectWorksModel {
    static byAttraction = (attractionId) => {
        return fetch(`${ url }/byAttraction/${ attractionId }`).then(res => res.json())
    }
    static byCreative = (creativeId) => {
        return fetch(`${ url }/byCreative/${ creativeId }`).then(res => res.json())
    }
}

export default ProjectWorksModel