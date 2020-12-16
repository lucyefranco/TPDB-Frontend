const url = 'http://localhost:4000/api/v1/creatives'

class CreativesModel {
    static all = () => {
        return fetch(`${ url }/`).then(res => res.json())
    }
    static show = (id) => {
        return fetch(`${ url }/${ id }`).then(res => res.json())
    }
    static showAttractions = (id) => {
        return fetch(`${url}/findAttractions/${id}`).then(res => res.json())
    }
    static create = (creativeData) => {
        return fetch(`${ url }/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creativeData)
        }).then(res => res.json())
    }
}

export default CreativesModel