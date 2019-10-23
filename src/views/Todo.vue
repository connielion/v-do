<template>
  <div class="container">
    <h1>Welcome to Vuedo</h1>

    <h3>Enter your tasks below:</h3>

    <input
      type="text"
      class="task-input"
      v-model="newTask"
      placeholder="Enter a new task.."
      @keyup.enter="addTask"
    />

    <!--loooop the tasks/removebtn-->
    <div v-for="task in tasks" :key="task.id" class="tasks">
      <!--CHECKBOX-->

      <input type="checkbox" v-model="task.done" />

      <div class="tasks">
        <!--task label: only show when ! EDITING-->
        <div
          class="label"
          v-if="!task.editing"
          @dblclick="editTask(task)"
          :class="{ done : task.done }"
        >{{ task.label }}</div>
        <!--edit field: DBLCLICK TO EDIT-->
        <input
          type="text"
          v-else
          v-model="task.label"
          class="label-edit"
          @blur="doneEdit(task)"
          @keyup.enter="doneEdit(task)"
          @keyup.esc="cancelEdit(task)"
        />
      </div>
      <!-- remove task 'x' icon -->
      <div class="remove" @click="removeTask(task)">&#10006;</div>
    </div>
  </div>
</template>

<script>
import STORAGE_KEY from "../main.js";

export default {
  data() {
    return {
      newTask: "",
      idForTask: 3,
      beforeEditCache: "",
      filter: "all",
      tasks: [
        {
          id: 1,
          label: "eat",
          done: false,
          editing: false
        },
        {
          id: 2,
          label: "sleep",
          done: false,
          editing: false
        }
      ]
    };
  },
  created() {
    // make task show after stored in local storage and refresh
    this.tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  computed: {
    remaining() {
      return this.tasks.filter(task => !task.done).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    tasksFiltered() {
      if (this.filter == "all") {
        return this.tasks;
      } else if (this.filter == "active") {
        return this.tasks.filter(task => !task.done);
      } else if (this.filter == "done") {
        return this.tasks.filter(task => task.done);
      }
      return this.tasks;
    },
    showCleardoneButton() {
      return this.tasks.filter(task => task.done).length > 0;
    }
  },
  methods: {
    addTask() {
      // empty input?
      if (this.newTask.trim().length == 0) {
        return;
      }

      // push to tasks array
      this.tasks.push({
        id: this.idForTask,
        label: this.newTask,
        done: false,
        editing: false
      });

      this.newTask = "";
      this.idForTask++;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    },
    // edit task label on dblclick
    editTask(task) {
      this.beforeEditCache = task.label;
      task.editing = true;
    },
    // @Blur
    doneEdit(task) {
      if (task.label.trim() == "") {
        task.label = this.beforeEditCache;
      }
      task.editing = false;
    },
    cancelEdit(task) {
      task.label = this.beforeEditCache;
      task.editing = false;
    },

    // remove task
    removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    },

    // check all tasks
    checkAll() {
      this.tasks.forEach(task => (task.done = event.target.checked));
    },
    // clear all checked tasks
    clearAll() {
      this.tasks = this.tasks.filter(task => !task.done);
    }
  }
};
</script>

<style lang="scss">
.task-input {
  padding: 10px 18px;
  font-size: 20px;
  margin-bottom: 18px;

  &:focus {
    outline: 0;
  }
}

.tasks {
  margin-bottom: 12px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  line-height: 200%;
  font-size: 22px;
}

.label-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.done {
  text-decoration: line-through;
  color: grey;
}

.remove {
  margin-left: 10px;
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
  .remove:hover {
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

