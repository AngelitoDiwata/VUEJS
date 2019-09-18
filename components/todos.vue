<template>
  <div id="Todos">
      <br>
      <div class="card"  v-bind:key="todo.id" v-for="(todo, index1) in todos">
           <div class="card-header">
         <h1 card-title>{{todos[index1].text}}</h1>
          <div class="card-body">
          <div v-bind:id="todo.id" v-for="(todoDesc, index2) in todos[index1].subtasks">
                <br>
                 <p class="card-text">{{todos[index1].subtasks[index2].desc}}</p>
             </div>
          </div>
      </div>
      </div>
  </div>
  </div>
  
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'Todos',
    props: ['todos']
}
</script>

<style scoped>
#Todo{
  
  bottom: 100px;
}
.card{
    padding: 5px;
    border-style: none;
    overflow: auto;
}
</style>