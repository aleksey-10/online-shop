import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://store-6f41d.firebaseio.com"
});

const productsAPI = {
    getCatalog() {
        return instance.get("/catalog.json").then(response => response.data);
    },

    setStock(id, stock) {
        return instance.put(`/catalog/${id}/stock.json`, stock )
    }
};

export default productsAPI;

