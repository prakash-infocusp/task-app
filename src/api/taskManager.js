export const getTasks = () => {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : []
}

export const saveTask = (task) => {
  const tasks = getTasks()
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
