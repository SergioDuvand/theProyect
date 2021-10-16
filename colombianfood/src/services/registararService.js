import axios from 'axios'

const ENDPOINT_PATH= 'https://colombian-back.herokuapp.com/api';

export default{
    async createUser(usuario,password){
        const user = {usuario: usuario,password};
        return await axios.post(ENDPOINT_PATH + '/registrar-usuario', user);
    }
}