<template>
  <div class="helper">
    <span class="left">{{todoLeft}} items left</span>
    <span class="tabs">
      <span
        v-for="(state,index) in status"
        :key="`${state}+${index}`"
        :class="['state', filter===state ? 'active' : '']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todoLeft: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      status: ["all", "active", "completed"] // 状态
    };
  },

  methods: {
    // 删除所有已完成的todos
    clearAllCompleted() {
      this.$emit("deleteCompleted");
    },
    // 交换选中的状态
    toggleFilter(state) {
      console.log(state);
      this.$emit("toggleState", state);
    }
  }
};
</script>

<style lang="stylus" scoped>
.helper {
  height: 40px;
  background: #fff;
  line-height: 40px;
  border: 1px solid #999;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
}

.left {
  margin-right: 20px;
  width: 100px;
  display: inline-block;
}

.state {
  margin-right: 20px;
}

.state.active {
  padding: 5px 8px;
  border: 1px solid #888;
  border-radius: 5px;
}

.clear {
  float: right;
}
</style>
