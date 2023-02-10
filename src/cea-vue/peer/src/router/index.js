import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Peer from "../pages/Peer.vue";
const routes = [
  {
    path: "/",
    name: "Home-page",
    component: Home,
  },
  {
    path: "/peer",
    name: "Peer-page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Peer,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
