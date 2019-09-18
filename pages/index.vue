<template>
  <div class="container">
    <navBar class="navBar"/>
    <Todos class="todoList" v-bind:todos="todoData" />
    <addSection />
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Todos from '../components/todos';
  import navBar from '../components/navbar';
  import addSection from '../components/addSection';
export default {
  components: {
      Todos,
      navBar,
      addSection
  },
  mounted() {
  
     this.$root.$on('onAdd', () => {
       alert('hehehe');
     })
   
  },
  data(){
      return {
        todoData: [
        {
          id: 1,
          text: "1 object",
          subtasks: [
            {desc: 'Finish'},
            {desc: 'This'},
            {desc: 'Now'}
          ]
        },
        {
          id: 2,
          text: "2 objects",
          subtasks: [
            {desc: '2Finish'},
            {desc: '2This'},
            {desc: '2Now'}
          ]
        },
        {
          id: 3,
          text: "three objects",
          subtasks: [
            {desc: '3Finish'},
            {desc: '3This'},
            {desc: '3Now'}
          ]
        }
      ]
      }
  }
}
</script>

<style scoped>
.navBar{
  top: 0px;
  left: 0px;
  position:fixed;
  z-index: 2;
  background-color: rgb(37, 37, 37);
  width: 100%;
}
.todoList{
  margin-bottom: 50%;
}
</style>
