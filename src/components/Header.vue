<script setup></script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">All Task</RouterLink></li>
        <li><RouterLink to="/add-task">Add Task</RouterLink></li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background-color: #ffffff;
  border-bottom: 2px solid #eaeaea;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
  color: #555555;
  font-size: 18px;
  font-family: Arial, sans-serif;
  padding: 10px 15px;
  transition: all 0.3s ease;
  border-radius: 5px;
}

a:hover {
  color: #ffffff;
  background-color: #007bff;
  box-shadow: 0 2px 5px rgba(0, 123, 255, 0.2);
}

a.router-link-active {
  font-weight: bold;
  color: #007bff;
  border-bottom: 2px solid #007bff;
}
</style>
