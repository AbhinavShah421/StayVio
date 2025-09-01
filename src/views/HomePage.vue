<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Welcome to Madhav Kunj</h1>
        <p class="text-xl mb-8">Premium PG Accommodation in Noida Sector 128</p>
        <router-link to="/contact" class="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block">
          Book Now
        </router-link>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Madhav Kunj?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Premium Location</h3>
            <p class="text-gray-600">Located in the heart of Noida Sector 128, close to major tech parks and metro stations.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Modern Amenities</h3>
            <p class="text-gray-600">Fully furnished rooms with modern amenities including AC, Wi-Fi, and daily housekeeping.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Security & Safety</h3>
            <p class="text-gray-600">24/7 security, CCTV surveillance, and secure access control for your peace of mind.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Rooms Preview -->
    <div class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Rooms</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="rounded-lg overflow-hidden shadow-md">
            <img src="https://via.placeholder.com/400x300" alt="Single Room" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Single Room</h3>
              <p class="text-gray-600 mb-4">Perfect for individuals seeking comfort and privacy.</p>
              <p class="text-blue-600 font-semibold">₹16,000/month</p>
            </div>
          </div>
          
          <div class="rounded-lg overflow-hidden shadow-md">
            <img src="https://via.placeholder.com/400x300" alt="Double Room" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Double Room</h3>
              <p class="text-gray-600 mb-4">Spacious accommodation for two with modern amenities.</p>
              <p class="text-blue-600 font-semibold">₹12,000/month per person</p>
            </div>
          </div>
          
          <div class="rounded-lg overflow-hidden shadow-md">
            <img src="https://via.placeholder.com/400x300" alt="Triple Room" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Triple Room</h3>
              <p class="text-gray-600 mb-4">Economical option with all essential facilities.</p>
              <p class="text-blue-600 font-semibold">₹10,000/month per person</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Move In?</h2>
        <p class="text-xl mb-8">Book your room today and experience comfortable living at Madhav Kunj</p>
        <router-link to="/contact" class="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>
