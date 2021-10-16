import axios from "axios";

const ENDPOINT_PATH = "https://colombian-back.herokuapp.com/api";

export default {
    async agregarReceta(receta, ingredientes, preparacion, autor) {
        const recetas = { receta : receta, ingredientes, preparacion, autor };
        console.log(recetas);
        return await axios.post(ENDPOINT_PATH + "/Recetas", recetas);
    }
};