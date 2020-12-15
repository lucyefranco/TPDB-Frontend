const url = 'http://localhost:4000/api/v1/attractions'

class AttractionsModel {
    static all = () => {
        return fetch(`${ url }/`).then(res => res.json())
    }
    static show = (attractionId) => {
        return fetch(`${ url }/${ attractionId }`).then(res => res.json())
    }
    static showByPark = (themeParkId) => {
        return fetch(`${ url }/byPark/${themeParkId}`).then(res => res.json())
    }
    static create = (newAttraction) => {
        return fetch(`${ url }/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAttraction)
        }).then(res => res.json())
    }
}

export default AttractionsModel