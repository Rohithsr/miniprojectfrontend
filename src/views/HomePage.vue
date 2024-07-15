<template>
    <div class="home-page">
        <TaskForm @taskAdded="handleTaskAdded"/>
        <TaskList :tasks="tasks" @taskUpdated="handleTaskUpdated" @taskDeleted="handleTaskDeleted"/>
        <div v-if="loading" class="loading">Loading...</div>
    </div>
</template>

<script>
import axios from 'axios';
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
    name: 'HomePage',
    components: { TaskForm, TaskList },
    data() {
        return {
            tasks: [],
            loading: false
        };
    },
    methods: {
        fetchTasks() {
            this.loading = true;
            axios.get('http://localhost:3000/api/tasks')
                .then(response => {
                    this.tasks = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Error fetching tasks:', error);
                    this.loading = false;
                });
        },
        handleTaskAdded() {
            this.fetchTasks(); // Refresh tasks after adding a new task
            // Optionally, show a success message or notification
        },
        handleTaskUpdated() {
            this.fetchTasks(); // Refresh tasks after updating a task
            // Optionally, show a success message or notification
        },
        handleTaskDeleted() {
            this.fetchTasks(); // Refresh tasks after deleting a task
            // Optionally, show a success message or notification
        }
    },
    mounted() {
        this.fetchTasks();
    }
};
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.loading {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 20px;
}
</style>
