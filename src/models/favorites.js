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
}

export default FavoritesModel