<template>
  <div class="container">
    <h1>Welcome to V-do</h1>

    <input type="text" class="task-input" v-model="newTask" placeholder="Enter a new task.." @keyup.enter="addTask">

    <div v-for="task in tasks" :key="task.id" class="task">

      <div>
        {{ task.title }}
      </div>
      <!-- 'x' icon -->
      <div class="remove">&#10006;</div>
    </div>






  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      idForTask: 3,
      tasks: [
        {
          id: 1,
          title: "eat",
          done: false
        },
        {
          id: 2,
          title: "sleep",
          done: false
        }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim().length == 0) {
        return;
      }

      // push to tasks array
      this.tasks.push({
        id: this.idForTask,
        title: this.newTask,
        done: false
      });

      this.newTask = "";
      this.idForTask++;
    }
  }
};
</script>

<style lang="scss">
.task-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 18px;

  &:focus {
    outline: 0;
  }
}

.task {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove {
  margin-left: 16px;
  color: red;
}

/* Larger than mobile screen */
@media (min-width: 40rem) {
  .remove {
    color: red;
  }
}

/* Larger than tablet screen */
@media (min-width: 80rem) {
  .remove {
    cursor: pointer;
    margin-left: 16px;
    color: red;
    &:hover {
      color: black;
    }
  }
}

/* Larger than desktop screen */
@media (min-width: 120rem) {
  .remove {
    cursor: pointer;
    font-size: 20px;
    margin-left: 16px;
    font-weight: bold;
    &:hover {
      color: black;
    }
  }
}
</style>

