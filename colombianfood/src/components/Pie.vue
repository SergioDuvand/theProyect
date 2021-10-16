<template>
  <section class="footer">
      <div class="container">
        <p>2021 © TODOS LOS DERECHOS RESERVADOS A SMARTDEV</p>
      </div>
  </section>
</template>

<script>

export default {
  name: 'pie',
 
}
</script>

<style>
.footer{
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 4px 0px;    
    background-color: #ffbd59;
}


@media (min-width: 768px) { 
    .footer{
        font-size: 1rem;
    }
}

</style>
