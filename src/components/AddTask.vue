<script setup>
import { ref } from 'vue'
import { saveTask, getTasks } from '@/api/taskManager'

const title = ref('')
const description = ref('')

const addTask = () => {
  if (title.value && description.value) {
    const newTask = { title: title.value, description: description.value }
    saveTask(newTask)
    title.value = ''
    description.value = ''
  } else {
    alert('Please fill out both fields.')
  }
}
</script>

<template>
  <div class="container">
    <h1>Add Task</h1>
    <form @submit.prevent="addTask" class="task-form">
      <div class="form-group">
        <label for="title">Task Title</label>
        <input id="title" v-model="title" type="text" placeholder="Enter task title" required />
      </div>
      <div class="form-group">
        <label for="description">Task Description</label>
        <textarea
          id="description"
          v-model="description"
          placeholder="Enter task description"
          required
        ></textarea>
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.task-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
