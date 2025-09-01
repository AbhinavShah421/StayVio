import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import RoomsPage from '../views/RoomsPage.vue'
import AmenitiesPage from '../views/AmenitiesPage.vue'
import GalleryPage from '../views/GalleryPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsPage
    },
    {
      path: '/amenities',
      name: 'amenities',
      component: AmenitiesPage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

export default router
