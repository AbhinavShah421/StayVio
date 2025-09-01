<template>
  <!-- Page Header -->
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 text-center">About Us</h1>
      <p class="mt-4 text-xl text-gray-600 text-center">Learn more about Madhav Kunj and our commitment to quality living</p>
    </div>
  </div>

  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- About Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Welcome to Madhav Kunj</h2>
          <p class="text-gray-600 mb-4">
            Established in 2023, Madhav Kunj has become synonymous with quality living spaces in Noida. We understand the 
            importance of a comfortable and secure living environment for working professionals and students.
          </p>
          <p class="text-gray-600 mb-4">
            Located in the heart of Noida Sector 128, our PG accommodation offers the perfect blend of comfort, 
            convenience, and community living. With 36 well-appointed rooms, we provide a home away from home for our residents.
          </p>
          <p class="text-gray-600">
            Our commitment to excellence extends beyond just providing a place to stay - we create an environment 
            where our residents can thrive, focus on their goals, and enjoy a balanced lifestyle.
          </p>
        </div>
        <div class="relative">
          <img src="https://via.placeholder.com/600x400" alt="Madhav Kunj Building" class="rounded-lg shadow-lg">
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4 inline-flex">
            <div>
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div>
                  <span class="text-xl font-semibold mb-2 pl-2">Prime Location</span>
            </div>
          </div>
          
          <p class="text-gray-600">Conveniently located in Sector 128, close to major tech parks, shopping centers, and public transportation.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4 inline-flex">
            <div>
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div> 
            <div>
                <h3 class="text-xl font-semibold mb-2 pl-2">Security First</h3>
            </div>
          </div>
          
          <p class="text-gray-600">24/7 security, CCTV surveillance, and secure access control for complete peace of mind.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4 inline-flex">
            <div>
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 pl-2">Modern Amenities</h3>
            </div>  
          </div>
          
          <p class="text-gray-600">Fully furnished rooms with AC, high-speed Wi-Fi, modern furniture, and daily housekeeping services.</p>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="bg-gray-50 rounded-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Madhav Kunj?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 mt-1">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Quality Living Spaces</h3>
              <p class="text-gray-600">Well-designed rooms with quality furnishings and regular maintenance.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 mt-1">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Professional Management</h3>
              <p class="text-gray-600">Dedicated staff ensuring smooth operations and resident comfort.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 mt-1">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Affordable Pricing</h3>
              <p class="text-gray-600">Competitive rates with flexible payment options.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 mt-1">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Community Living</h3>
              <p class="text-gray-600">Foster meaningful connections in a vibrant community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>
