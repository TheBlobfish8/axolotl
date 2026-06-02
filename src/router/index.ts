import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServerListView from "@/views/ServerListView.vue";
import ServerView from "@/views/ServerView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: HomeView },
		{ path: "/about", component: AboutView },
		{ path: "/servers", component: ServerListView },
		{ path: "/server/:id", component: ServerView },
	],
});

export default router;
