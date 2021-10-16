<template>
<header class="encabeza">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
              <div class="container-fluid">

                <router-link to="/" class="navbar-brand" aria-current="page">
                    <img src="../assets/img/logo.png" href="index.html" alt="" width="40" height="40" class="d-inline-block align-text-top">
                    Colombian Food
                </router-link>
                <!-- <a class="navbar-brand" href="index.html">
                    <img src="../assets/img/logo.png" href="index.html" alt="" width="40" height="40" class="d-inline-block align-text-top">
                  Colombian Food
                </a> -->

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup" >
                  <div class="navbar-nav">
                    <router-link to="/" class="nav-link fas fa-home"></router-link>
                    <!-- <router-link to="/" class="nav-link fas fa-shopping-cart"> </router-link> -->
                    <router-link to="/login" class="nav-link fas fa-user"> </router-link>
                  </div>
                </div>
              </div>
            </nav> 
          </div> 
        
      </header>
</template>

<script>
export default {
  name: 'encabezado',
}
</script>

<style>

header.encabeza {
    background: #ffbd59;
}
.fa-home:before {
    color: #293039;
    font-size: 1.6rem;
}
.fa-shopping-cart:before {
    color: #293039;
    font-size: 1.6rem;
}
.fa-user:before {
    color: #293039;
    font-size: 1.6rem;
}
.navbar-light .navbar-brand {
    color: #293039;
    font-size: 0.9rem;
    font-weight: bold;
}
</style>
