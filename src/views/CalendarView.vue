<template>
    <div class="calendar-view">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else>
            <Calendar :tasks="tasks"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Calendar from '@/components/FullCalendar.vue';

export default {
    name: 'CalendarView',
    components: { Calendar },
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
        }
    },
    mounted() {
        this.fetchTasks();
    }
};
</script>

<style scoped>
.calendar-view {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.loading {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 20px;
}
</style>
