<template>
<div id="Todos">
    <div id="main_todoList" v-bind:key="todo.id" v-for="(todo, index) in todos">
        <div>
            <li v-bind:class="'todo' + todo.id">{{todo.text}}<div  class="deleteBtn"> <button v-bind:id="todo.id"  v-on:click="deleteTodos(index)" class="btn btn-primary">Done!</button></div></li>
        </div>
    <br>
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
    padding: 10px;
    height: 500px;
    overflow: auto;
}
.deleteBtn{
    float: right;
}

li{
    margin: 10px;
}
</style>