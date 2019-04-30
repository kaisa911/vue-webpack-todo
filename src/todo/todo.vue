<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <Item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @del="deleteTodo"/>
    <Tabs
      :filter="filter"
      :todoLeft="todoLeft"
      @toggleState="toggleState"
      @deleteCompleted="deleteCompleted"
    />
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
export default {
  data() {
    return {
      todos: [],
      filter: "all",
      activeTodos: 0,
      inputContent: ""
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: this.todos.length,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      console.log(id);
      this.todos = this.todos.filter(item => item.id !== id);
    },
    toggleState(state) {
      this.filter = state;
    },
    deleteCompleted() {
      this.todos = this.todos.filter(item => item.completed === false);
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    todoLeft() {
      return this.todos.filter(item => item.completed === false).length;
    },
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else {
        if (this.filter === "active") {
          return this.todos.filter(item => item.completed === false);
        } else {
          return this.todos.filter(item => item.completed !== false);
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  width: 100%;
  height: 50px;
  text-indent: 1.2em;
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  box-sizing: border-box;
}

.add-input::placeholder {
  font-size: 20px;
  font-weight: bold;
}
</style>
