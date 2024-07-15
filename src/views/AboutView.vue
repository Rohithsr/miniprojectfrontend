<template>
  <div class="about">
    <h1>Welcome to our To-Do List Application!</h1>
    <p>
      Our application helps you organize your tasks efficiently. Whether it's
      personal chores or professional projects, manage them all with ease using
      our intuitive interface.
    </p>
    <h2>Features:</h2>
    <ul>
      <li>Create tasks with due dates</li>
      <li>Mark tasks as completed</li>
      <li>Update task details</li>
      <li>Delete tasks you no longer need</li>
    </ul>
    <h2>Future Enhancements:</h2>
    <ul>
      <li>Calendar integration for better task scheduling</li>
      <li>Collaboration tools to share tasks with team members</li>
      <li>Reminders and notifications</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.about ul {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about li {
  margin-bottom: 8px;
}
</style>
