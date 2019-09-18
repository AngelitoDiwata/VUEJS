<template>
    <div id="addSection">
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button id="submitBtn" type="submit" v-on:click="addTodos" class="btn btn-primary">Add to list!</button>
    </div>
</template>

<script>
export default {
  name: "addSection",
  methods: {
      addTodos(){
          this.$root.$emit('onAdd')
      }
  }
};
</script>

<style scoped>
#addSection {
  left: -1px;
  padding: 10px;
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: #131010;
}
</style>
