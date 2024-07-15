<template>
    <div class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task">
            <div class="task-checkbox">
                <input type="checkbox" v-model="task.completed" @change="updateTaskStatus(task)" :id="'checkbox-' + task.id" />
                <label :for="'checkbox-' + task.id"></label>
            </div>
            <div class="task-details">
                <span :class="{ 'completed-task': task.completed }">{{ task.title }}</span>
            </div>
            <div class="task-actions">
                <button @click="updateTask(task)" class="btn-update">Update</button>
                <button @click="confirmDelete(task.id)" class="btn-delete">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TaskList',
    props: {
        tasks: Array
    },
    methods: {
        updateTask(task) {
            axios.put(`http://localhost:3000/api/tasks/${task.id}`, task)
                .then(() => {
                    this.$emit('taskUpdated');
                })
                .catch(error => {
                    console.error('Error updating task:', error);
                });
        },
        updateTaskStatus(task) {
            axios.put(`http://localhost:3000/api/tasks/${task.id}`, task)
                .then(() => {
                    // Assuming task status is updated successfully
                })
                .catch(error => {
                    console.error('Error updating task status:', error);
                });
        },
        confirmDelete(id) {
            if (confirm('Are you sure you want to delete this task?')) {
                axios.delete(`http://localhost:3000/api/tasks/${id}`)
                    .then(() => {
                        this.$emit('taskDeleted');
                    })
                    .catch(error => {
                        console.error('Error deleting task:', error);
                    });
            }
        }
    }
};
</script>

<style scoped>
.task-list {
    margin-top: 20px;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px; /* Increased margin for better spacing */
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adding shadow for depth */
}

.task-checkbox {
    margin-right: 10px;
}

.task-checkbox input[type="checkbox"] {
    cursor: pointer;
}

.task-checkbox label {
    cursor: pointer;
}

.task-details {
    flex: 1; /* Take remaining space */
}

.task-actions {
    display: flex;
    align-items: center;
}

.btn-update, .btn-delete {
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    margin-left: 10px; /* Increased distance between buttons */
}

.btn-update {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
}

.btn-delete {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
}

.btn-update:hover, .btn-delete:hover {
    opacity: 0.8;
}

.completed-task {
    text-decoration: line-through; /* Style completed tasks with strike-through */
}
</style>
