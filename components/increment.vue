<template>
    <div class="buttonContainers">
        <button type="button" @click="addition" class="btn btn-primary">ADD</button>
        <button type="button" @click="subtraction" class="btn btn-danger">SUBTRACT</button>
        <button type="button" @click="multiplication" class="btn btn-success">MULTIPLY</button>
    </div> 
</template>

<script>
export default {
    name: 'increment',
    methods: {
    addition(){
        this.$store.dispatch('increment')
    },
    subtraction(){
        this.$store.dispatch('decrement')
    },
    multiplication(){
        this.$store.dispatch('multiply')
    }
  }
}
</script>

<style>

</style>
