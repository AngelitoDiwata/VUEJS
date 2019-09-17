<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
    <br>
    <div class="form-group">
      <label for="exampleInputEmail1">Input todo title</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter todo title here..."
        ref="todoTitle"
      />
    </div>
    <button id="submitBtn" type="submit" v-on:click="addTodos" class="btn btn-primary">Submit</button>
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

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.4;
}

#app{
  width: 100%;
  padding: 10px;
}

#submitBtn{
  float: right;
}
</style>
