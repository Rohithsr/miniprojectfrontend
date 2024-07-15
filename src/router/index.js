import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import CalendarView from '../views/CalendarView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: CalendarView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;