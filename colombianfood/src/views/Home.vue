<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <section class="bienvenido">
      <!--MENSAJE DE BIENVENIDA-->
        <div class="texto-bienvenido">
          <h1>BIENVENIDO A COLOMBIA</h1>
          <h2>ANÍMATE Y COMPARTE TU RECETA</h2>
          <a href="/registroreceta"><button type="button" class="btn btn-warning">REGISTRO DE RECETAS</button></a>
        </div>  
    </section>

    <section class="informacion-principal">
          
    </section>

    
    <div class="row" style="background-color: #4c7031;">
      <div class="col-md-4">
        <router-link to="/servicios"><i class="fas fa-concierge-bell"></i></router-link>
        <p class="texto">SERVICIOS</p>
      </div>
      <div class="col-md-4">
        <router-link to="/noticias"><i class="far fa-newspaper"></i></router-link>
        <p class="texto">NOTICIAS</p>
      </div>
      <div class="col-md-4">
        <router-link to="/programadores"><i class="fas fa-users-cog"></i></router-link>
        <p class="texto">PROGRAMADORES</p>
      </div>
    </div>

  <pie/>
  </div>
</template>

<script>
import Pie from '../components/Pie.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { Pie },
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
.bienvenido{
    background: url("../assets/img/fondo-movil.jpg");
    background-size: cover;
    height: 100vh;
    overflow: hidden;
}

 .boton{
        margin-top: 10px;
        background-color: #ffbd59;
        text-align: center
    }

.h2, h2{
    margin: 2rem 0rem 2rem 0rem;
}
.btn-warning {
    background-color: #ffbd59;
    border-color: #ffbd59;
    padding: 1.2rem;
    font-weight: bold;
}
.row{
    text-align: center;
    padding: 40px 0px;
}

.fa-concierge-bell:before {
    color: #293039;
    font-size: 3rem;
}
.fa-newspaper:before {
    color: #293039;
    font-size: 3rem;
}
.fa-users-cog:before {
    color: #293039;
    font-size: 3rem;
}

.texto-bienvenido{
    text-align: center;
    margin-top: 8rem;
    color: #fff;
}


@media (min-width: 768px) { 
    .bienvenido{
        background: url("../assets/img/fondo.jpg");
        background-size: cover;
        height: 100vh;
        overflow: hidden;
    }
    .navbar-light .navbar-brand {
        color: #293039;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    .texto{
        font-size: 1.6rem;
    }
    .nombre{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
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
    
    .fa-concierge-bell:before {
        font-size: 3rem;
    }
    .fa-newspaper:before {
        font-size: 3rem;
    }
    .fa-users-cog:before {
        font-size: 3rem;
    }
    .footer{
        font-size: 1rem;
    }
}
</style>
