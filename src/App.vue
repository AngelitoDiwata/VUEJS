<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
    <div class="form-group">
      <div class="controls">
      <label for="exampleInputEmail1">Input todo title</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref="todoTitle"></textarea>
       <center>
    <button id="submitBtn" type="submit" v-on:click="addTodos" class="btn btn-primary"><i id="addBtn" class="material-icons">
add_circle
</i></button>
    </center>
      </div>
    </div>

  </div>
</template>

<script>
import Todos from "./components/Todo";
export default {
  name: "app",
  components: {
    Todos 
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "one object"
        },
        {
          id: 2,
          text: "two objects"
        },
        {
          id: 3,
          text: "three objects"
        }
      ]
    };
  },

  methods: {
    addTodos: function() {
      let todoValue = this.$refs.todoTitle.value;
      this.todos.push({ id: this.todos.length + 1, text: todoValue });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
    width: 10px;
    height: 2em
}
::-webkit-scrollbar-button {
    background: dodgerblue
}
::-webkit-scrollbar-track-piece {
    background: #eee
}
::-webkit-scrollbar-thumb {
    background: rgb(12, 231, 247)
}​

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.4;
}

.form-group{
  width: 100%;
  bottom: 100px;
  position: fixed;
}

.controls{
   margin: 0 auto;
   position: relative;
  width: 70%;
  left: -15px;
}

#app{
  width: 100%;
  padding: 20px;
  position: relative;
}

#submitBtn{
  margin-top: 10%;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  padding: 0px; 
}

#addBtn{
  font-size: 99px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
