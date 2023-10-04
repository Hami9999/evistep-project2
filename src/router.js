import {createRouter, createWebHistory} from 'vue-router'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
// import HelloWorld from "./components/HelloWorld.vue";
import ProductComponent from "./components/ProductComponent.vue";
import WelcomeComponent from "./Views/WelcomeComponent.vue";
import StandartLayout from "./Layouts/StandartLayout.vue";
const routes = [
    {   path: '/',
        component: WelcomeComponent ,
        meta: { Layout: StandartLayout }
    },

    {   path: '/product',
        component: ProductComponent ,
        meta: { Layout: StandartLayout}
    },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router

// Now the app has started!