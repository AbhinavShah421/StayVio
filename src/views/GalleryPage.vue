<template>
  <!-- Page Header -->
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 text-center">Our Gallery</h1>
      <p class="mt-4 text-xl text-gray-600 text-center">Take a tour of our premium PG accommodation</p>
    </div>
  </div>

  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Gallery Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(image, index) in filteredImages" :key="index" class="group relative">
          <div class="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              :src="image.url" 
              :alt="image.title"
              class="w-full h-full object-cover transform transition-transform group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-white text-lg font-semibold">{{ image.title }}</h3>
                <p class="text-gray-200 text-sm">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Like What You See?</h2>
        <p class="text-xl mb-8">Book your stay at Madhav Kunj today!</p>
        <router-link to="/contact" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'Rooms', 'Common Areas', 'Study Areas', 'Amenities']
const activeCategory = ref('All')

const images = [
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Single Room',
    category: 'Rooms',
    description: 'Comfortable single occupancy room with modern amenities'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Double Room',
    category: 'Rooms',
    description: 'Spacious double sharing room with study area'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Triple Room',
    category: 'Rooms',
    description: 'Well-furnished triple sharing accommodation'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Common Lounge',
    category: 'Common Areas',
    description: 'Relaxing common area for residents'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Study Room',
    category: 'Study Areas',
    description: 'Quiet and well-lit study space'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Dining Area',
    category: 'Common Areas',
    description: 'Clean and spacious dining facility'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Library',
    category: 'Study Areas',
    description: 'Well-stocked library for academic needs'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Gym',
    category: 'Amenities',
    description: 'Fully equipped fitness center'
  },
  {
    url: 'https://via.placeholder.com/800x600',
    title: 'Recreation Room',
    category: 'Amenities',
    description: 'Entertainment and gaming zone'
  }
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') {
    return images
  }
  return images.filter(image => image.category === activeCategory.value)
})
</script>

<style>
.aspect-w-4 {
  position: relative;
  padding-bottom: 75%; /* 4:3 aspect ratio */
}

.aspect-w-4 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
