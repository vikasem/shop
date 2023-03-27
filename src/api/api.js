import axios from "axios"

const instance = axios.create({
    baseURL:' http://localhost:3000/'
})

export let menuApi = {
    getItems() {
        return instance.get('items')
        .then(response => {
            return response.data
        })
    },
    getCategory() {
        return instance.get('category')
        .then(response => {
            return response.data
        })
    }
}