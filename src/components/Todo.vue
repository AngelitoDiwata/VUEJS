<template>
<div id="Todos">
    <div id="main_todoList" v-bind:key="todo.id" v-for="(todo, index) in todos">
            <div>
                <transition name="fade">
                    <li v-bind:class="'todo' + todo.id">
                        {{todo.text}} <br><br>
                        <div  class="deleteBtn"> <button v-bind:id="todo.id"  @click="deleteTodos(index)" class="btn btn-primary">
                            <i id="doneBtn" class="material-icons"> check_circle</i></button>
                        </div>
                    </li>    
                </transition>
                <br>
            </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Todos',
    props: ['todos'],
    methods: {
        deleteTodos: function(index) {
            this.todos.splice(index,1);
        }
    } 
}
</script>

<style scoped>

#Todos{
    padding: 0px;
    width: 100%;
    height: 400px;
    overflow: auto;
}

.todo pre{
    white-space: pre-wrap;
    word-wrap: break-word;
}

.btn-primary{
    float: right;
    width: 50px;
    height: 50px;
    border-radius: 100%;
     padding: 0px; 
}

#doneBtn{
     font-size: 305%;
     color:rgb(12, 231, 247);
}

li{
    padding: 5%;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px black;
    margin: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>