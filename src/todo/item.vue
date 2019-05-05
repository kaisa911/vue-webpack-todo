<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.completed">
    <label :class="['todo-content', todo.completed ? 'completed' : '']">{{todo.content}}</label>
    <button class="destory" @click="$emit('del', todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.todo-item {
  height: 50px;
  line-height: 50px;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid #999;
  border-left: 1px solid #999;
  position: relative;
}

.completed {
  text-decoration: line-through;
}

.toggle {
  vertical-align: center;
}

.todo-content {
  display: inline-block;
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.destory {
  position: absolute;
  right: 20px;
  height: 28px;
  padding: 4px;
  margin-top: 11px;
  border-radius: 5px;
  outline: none;
}
</style>
