<template>
<div>
    <div style="background-color: #4c7031;">
        <section class="bienvenido"></section>
        <div class="container">
            <div class="row" >
                <div class="col-md-6">
                <img src="../assets/img/Yenny.jpg" alt="..." width="140" height="140" class="img-thumbnail">
                <p class="nombre">Jenny Johanna Forero Ávila</p>
                <p class="texto-1">Diseñadora gráfica, encargada de la maquetación del sitio WEB, distribución de colores, creación de logos y modificación de imagenes según el dispositivo a visualizar</p>
                </div>
                <div class="col-md-6">
                <img src="../assets/img/Alfonso.jpg" alt="..." width="140" height="140" class="img-thumbnail">
                <p class="nombre">Alfonso Jaraba Casas</p>
                <p class="texto-1">Desarrollador FRONT-END, encargado de  la interfaz desde el punto de vista del código para que el usuario pueda interactuar con un sistema</p>>
                </div>
                <div class="col-md-6">
                <img src="../assets/img/Sergio.jpg" alt="..." width="140" height="140" class="img-thumbnail">
                <p class="nombre">Sergio Duvand Silva Merchán</p>
                <p class="texto-1">Desarrollador BACK-END, encargado de implementar la interacción entre el usuario y el sitio web</p>
                </div>
                <div class="col-md-6">
                <img src="../assets/img/David.jpg" alt="..." width="140" height="140" class="img-thumbnail">
                <p class="nombre">David Gálvez Puerta</p>
                <p class="texto-1">Desarrollador BACK-END,  encargado de implementar la interacción entre el usuario y el sitio web</p>
                </div>
                <div class="col-md-6">
                <img src="../assets/img/juancamilo.jpg" alt="..." width="140" height="100" class="img-thumbnail">
                <p class="nombre">Juan Camilo Gómez Álvarez</p>
                <p class="texto-1">Desarrollador DB, encargado de  implementar y desarrollar la base de datos del sistema</p>
                </div>
                
            </div>
        </div>
    </div>

    <pie/>
</div>
</template>

<script>
import Pie from '../components/Pie.vue'
export default {
  components: { Pie },
  name: 'Programadores',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
