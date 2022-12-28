import { createRouter,createWebHistory } from "vue-router";
import Movie from "../components/Movie.vue"
import About from "../components/About.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Movie
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router;