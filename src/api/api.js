import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/aleksey-10/online-store/db"
});

const productsAPI = {
    getCatalog() {
        return instance.get().then(response => response.data);
    }
};

export default productsAPI;

