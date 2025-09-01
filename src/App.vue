<template>
  <div class="min-h-screen bg-white">
    <!-- Header Top -->
    <div class="bg-white py-4 border-b">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-6">
            <span>Welcome to Madhav Kunj</span> 
            <a href="mailto:info@madhavkunj.com" class="text-gray-600 hover:text-blue-600 flex items-center text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@madhavkunj.com
            </a>
            <a href="tel:+919876543210" class="text-sm hover:text-blue-400 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98765 43210
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" class="hover:text-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.143 19.378c-1.736 0-3.376-.438-4.768-1.208l-3.318.986.996-3.367c-.837-1.435-1.318-3.116-1.318-4.909 0-5.297 4.303-9.6 9.6-9.6s9.6 4.303 9.6 9.6-4.303 9.6-9.6 9.6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header & Navigation -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <span class="text-3xl font-bold text-blue-600">Madhav</span>
              <span class="text-3xl font-bold text-gray-900 ml-1">Kunj</span>
            </a>
          </div>

          <nav class="hidden lg:flex">
            <div class="flex items-center space-x-1">
              <router-link 
                to="/" 
                class="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                active-class="text-blue-600"
                exact
              >
                Home
              </router-link>
              <router-link 
                to="/about" 
                class="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                active-class="text-blue-600"
              >
                About
              </router-link>
              <div class="relative group">
                <button class="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md flex items-center">
                  Rooms
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div class="py-1">
                    <router-link to="/rooms/single" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Single Rooms</router-link>
                    <router-link to="/rooms/double" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Double Rooms</router-link>
                    <router-link to="/rooms/triple" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Triple Rooms</router-link>
                  </div>
                </div>
              </div>
              <router-link 
                to="/amenities" 
                class="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                active-class="text-blue-600"
              >
                Amenities
              </router-link>
              <router-link 
                to="/gallery" 
                class="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                active-class="text-blue-600"
              >
                Gallery
              </router-link>
              <router-link 
                to="/contact" 
                class="ml-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Contact Us
              </router-link>
            </div>
          </nav>

          <!-- Mobile menu button -->
          <div class="lg:hidden">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-900 hover:text-blue-600 p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path 
                  v-else
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="lg:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            to="/" 
            class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            active-class="text-blue-600"
            exact
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            active-class="text-blue-600"
            @click="mobileMenuOpen = false"
          >
            About
          </router-link>
          <router-link 
            to="/rooms" 
            class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            active-class="text-blue-600"
            @click="mobileMenuOpen = false"
          >
            Rooms
          </router-link>
          <router-link 
            to="/amenities" 
            class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            active-class="text-blue-600"
            @click="mobileMenuOpen = false"
          >
            Amenities
          </router-link>
          <router-link 
            to="/gallery" 
            class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            active-class="text-blue-600"
            @click="mobileMenuOpen = false"
          >
            Gallery
          </router-link>
          <router-link 
            to="/contact" 
            class="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            @click="mobileMenuOpen = false"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div class="mb-6">
              <span class="text-2xl font-bold text-blue-400">Madhav</span>
              <span class="text-2xl font-bold text-white ml-1">Kunj</span>
            </div>
            <p class="text-gray-400 mb-6">Premium PG accommodation with modern amenities and comfortable living spaces in Noida Sector 128.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">WhatsApp</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.143 19.378c-1.736 0-3.376-.438-4.768-1.208l-3.318.986.996-3.367c-.837-1.435-1.318-3.116-1.318-4.909 0-5.297 4.303-9.6 9.6-9.6s9.6 4.303 9.6 9.6-4.303 9.6-9.6 9.6z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" class="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/rooms" class="text-gray-400 hover:text-white">Rooms</a></li>
              <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Info</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Sector 128, Noida
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 98765 43210
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@madhavkunj.com
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.143 19.378c-1.736 0-3.376-.438-4.768-1.208l-3.318.986.996-3.367c-.837-1.435-1.318-3.116-1.318-4.909 0-5.297 4.303-9.6 9.6-9.6s9.6 4.303 9.6 9.6-4.303 9.6-9.6 9.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Madhav Kunj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const mobileMenuOpen = ref(false)
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.container {
  max-width: 1200px;
}
</style>
