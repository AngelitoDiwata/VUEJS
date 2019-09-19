<template>
  <div class="container">
    <anywhereNavbar />
    <div v-bind:key="counted.title" v-for="ite in counted">

  <div class="card" style="width: 100%;">
  <div class="card-body">
    
        <h1 :count="ite" class="card-title">{{ ite.title }}</h1>
        <br>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>

  <increment />
  </div>
</template>

<script>
import increment from "../components/increment";
import anywhereNavbar from "../components/anywhereNavbar";
export default {
  components: {
    anywhereNavbar,
    increment
  },
  computed: {
    counted(){
      return this.$store.state.counter
    }
  }
}
</script>

<style scoped>

</style>
