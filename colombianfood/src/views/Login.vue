<template>
<div>
  <section class="bienvenido">
    <form class="formulario" @submit.prevent="">
      <div class="form">
        <input type="email" class="form-control input-config" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar usuario" v-model="usuario">
        <input type="password" class="form-control input-config" id="exampleInputPassword1" placeholder="Ingresar contraseña" v-model="password">
      </div>
      <button type="submit" class="boton" @click="login()">Ingresar</button>
      <button type="submit" class="boton" @click="resgistrar()">Crear usuario</button>
    </form>
  </section>

</div>
</template>

<script>
import Service from '../services/loginService';
import Service2 from '../services/registararService'
export default {
  name: 'Login',
  data: () => ({
    usuario: "",
    password: ""
  }),
  methods: {
    async login() {
        const res = await Service.login(this.usuario, this.password)
      alert(res.data.msg);
      console.log(res.data);
    }, 
    async resgistrar(){
      const res= await Service2.createUser(this.usuario, this.password);
      alert(res.data.msg)
      console.log(res.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .boton{
        margin-top: 10px;
        background-color: #ffbd59;
        text-align: center
    }
    
.input-config{
    margin-top: 20px;
    text-align: center;
    width: 250px;
}

.formulario{
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 120px;
}


@media (min-width: 768px) { 
    .formulario{
        width: 500px;
        text-align: center;
        font-size: 1rem;
        color:#fff;
        margin-top: 60px;
    }

      .boton{
        margin-top: 10px;
        background-color: #ffbd59;
        text-align: center
    }
}
</style>
