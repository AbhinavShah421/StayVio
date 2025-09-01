<template>
  <!-- Page Header -->
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 text-center">Our Amenities</h1>
      <p class="mt-4 text-xl text-gray-600 text-center">Everything you need for a comfortable stay</p>
    </div>
  </div>

  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Main Amenities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Wi-Fi -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 pl-3">High-Speed Wi-Fi</h3>
            </div>
          </div>
          
          <p class="text-gray-600">Stay connected with high-speed internet access available throughout the premises.</p>
        </div>

        <!-- Security -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 pl-3">24/7 Security</h3>
          </div>
          <p class="text-gray-600">Round-the-clock security with CCTV surveillance and professional security staff.</p>
        </div>

        <!-- Power Backup -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 pl-3">Power Backup</h3>
          </div>
          <p class="text-gray-600">Uninterrupted power supply with backup generators for your convenience.</p>
        </div>

        <!-- Study Areas -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4 pl-3">Study Areas</h3>
          </div>
          <p class="text-gray-600">Dedicated study spaces with proper lighting and furniture for focused learning.</p>
        </div>

        <!-- Dining -->
        <div class="bg-white rounded-lg shadow-lg p-8">
         <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 pl-3">Dining Facility</h3>
          </div>
          <p class="text-gray-600">Clean and hygienic dining area with quality food service available.</p>
        </div>

        <!-- Housekeeping -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class=" inline-flex">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 pl-3">Housekeeping</h3>
          </div>
          <p class="text-gray-600">Regular cleaning and maintenance services to ensure a hygienic living environment.</p>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-left">Additional Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-left">Laundry Service</h3>
              <p class="text-gray-600">Professional laundry service available at nominal charges.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-left">Recreation Room</h3>
              <p class="text-gray-600">Entertainment zone with indoor games and TV.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-left">Medical Assistance</h3>
              <p class="text-gray-600">First-aid and emergency medical support.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-left">Transport Facility</h3>
              <p class="text-gray-600">Assistance with local transportation arrangements.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Experience Premium Living</h2>
        <p class="text-xl mb-8">Book your stay at Madhav Kunj and enjoy all these amenities!</p>
        <router-link to="/contact" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Book Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>
