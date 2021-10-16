<template>
<div>
  <section class="bienvenido">
    <form class="formulario" @submit.prevent="">
        <div class="form">
            <input type="text" class="container form-control input-config" id="exampleInputName" placeholder="Ingrese nombre de la receta" v-model="receta">
            <textarea type="text" class="form-control input-config" id="exampleInputIngredientes" placeholder="Ingrese ingredientes requeridos" v-model="ingredientes" rows='4'> </textarea>
            <textarea type="text" class="form-control input-config" id="exampleInputPreparacion" placeholder="Ingrese el modo de preparación" v-model="preparacion" rows='4'> </textarea>
            <input type="text" class="form-control input-config" id="exampleInputAutor" placeholder="Ingrese nombre del chef" v-model="autor">
        </div>
        <button type="submit" class="boton" @click="agregarReceta()">Guardar Receta</button>
    </form>
  </section>

</div>
</template>

<script>
import Service from '../services/agregarRecetaService'
export default {
  name: 'Receta',
  data: () => ({
      receta: '',
      ingredientes: '',
      preparacion: '',
      autor: ''
  }),
  methods: {
    async agregarReceta(){
      const res= Service.agregarReceta(this.receta,this.ingredientes,this.preparacion,this.autor);
      alert('Gracias por compartir tu receta');
      console.log(res.PromiseResult.data);
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
    overflow: auto;
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
