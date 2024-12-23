<script setup>
import { ref, computed } from 'vue'
import CardComponent from './CardComponent.vue'
import { getTasks } from '@/api/taskManager'
import colors from '@/api/colors'

const tasks = ref(getTasks())
const searchQuery = ref('')

const filteredTasks = computed(() => {
  return tasks.value.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="home-container">
    <h1>Task List</h1>

    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search tasks by title or description..."
        class="search-bar"
      />
    </div>

    <div class="cards-container">
      <CardComponent
        v-for="(task, index) in filteredTasks"
        :key="index"
        :title="task.title"
        :description="task.description"
        :style="{ backgroundColor: colors[index % colors.length] }"
      />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.search-container {
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.search-bar:focus {
  border-color: #007bff;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
