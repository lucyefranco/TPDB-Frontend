const url = 'http://localhost:4000/api/v1/favorites'

class FavoritesModel {
    static userAttractions = (userId) => {
        return fetch(`${ url }/attractions/byUser/${userId}`).then(res => res.json())
    }
    static byAttraction = (attractionId) => {
        return fetch(`${ url }/attractions/byAttraction/${ attractionId }`).then(res => res.json())
    }
    static createAttraction = (attractionData) => {
        return fetch(`${ url }/attractions/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attractionData)
        }).then(res => res.json())
    }
    static deleteAttraction = (id) => {
        return fetch (`${ url }/attractions/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }
    static userParks = (userId) => {
        return fetch(`${ url }/themeParks/byUser/${ userId }`).then(res => res.json())
    }
    static byPark = (parkId) => {
        return fetch(`${ url }/themeParks/byPark/${ parkId }`).then(res => res.json())
    }
    static createPark = (parkData) => {
        return fetch(`${ url }/themeParks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parkData)
        }).then(res => res.json())
    }
    static deletePark = (id) => {
        return fetch (`${ url }/themeParks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }
    static userCreatives = (userId) => {
        return fetch(`${ url }/creatives/byUser/${ userId }`).then(res => res.json())
    }
    static byCreative = (creativeId) => {
        return fetch(`${ url }/creatives/byCreative/${ creativeId }`).then(res => res.json())
    }
    static createCreative = (creativeData) => {
        return fetch(`${ url }/creatives/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creativeData)
        }).then(res => res.json())
    }
    static deleteCreative = (id) => {
        return fetch (`${ url }/creatives/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }
}

export default FavoritesModel