const url = 'http://localhost:3000/api/v1/creatives'

class CreativesModel {
    static all = () => {
        return fetch(`${ url }/`).then(res => res.json())
    }
    static show = (id) => {
        return fetch(`${ url }/${ id }`).then(res => res.json())
    }
}