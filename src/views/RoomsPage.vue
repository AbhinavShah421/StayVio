<template>
  <!-- Page Header -->
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 text-center">Our Rooms</h1>
      <p class="mt-4 text-xl text-gray-600 text-center">Comfortable and affordable accommodation options</p>
    </div>
  </div>

  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Room Categories -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Single Room -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Single Room" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              ₹16,000/month
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Single Room</h3>
            <p class="text-gray-600 mb-4">Perfect for individuals seeking privacy and comfort.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Private bed with mattress
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Study table & chair
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Air conditioning
              </li>
            </ul>
            <router-link to="/contact" class="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </router-link>
          </div>
        </div>

        <!-- Double Room -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Double Room" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              ₹12,000/month
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Double Room</h3>
            <p class="text-gray-600 mb-4">Ideal for those who prefer shared accommodation.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Two beds with mattresses
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Shared study area
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Air conditioning
              </li>
            </ul>
            <router-link to="/contact" class="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </router-link>
          </div>
        </div>

        <!-- Triple Room -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Triple Room" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              ₹10,000/month
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Triple Room</h3>
            <p class="text-gray-600 mb-4">Economical option with all essential amenities.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Three beds with mattresses
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Shared study space
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Air conditioning
              </li>
            </ul>
            <router-link to="/contact" class="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </router-link>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Room Features & Amenities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Air Conditioning</h3>
              <p class="text-gray-600">Stay comfortable with modern AC units in every room.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Study Area</h3>
              <p class="text-gray-600">Dedicated space for studying with proper lighting.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Furniture</h3>
              <p class="text-gray-600">Quality beds, mattresses, and storage solutions.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Security</h3>
              <p class="text-gray-600">24/7 security with CCTV surveillance.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Power Backup</h3>
              <p class="text-gray-600">Uninterrupted power supply with generators.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Housekeeping</h3>
              <p class="text-gray-600">Daily cleaning and maintenance services.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Book Your Room?</h2>
        <p class="text-xl mb-8">Contact us now to check availability and reserve your space.</p>
        <router-link to="/contact" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>
