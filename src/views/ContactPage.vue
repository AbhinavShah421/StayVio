<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com';

const mapContainer = ref(null)
const map = ref(null)
const marker = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const reviews = ref([
  {
    name: 'Saurabh Sharma',
    rating: 5,
    date: '2 months ago',
    comment: 'Best PG in sector 128 noida . Good staff . Good food . Clean surrounding. Best part the owner ( Mr. Parichay) is very good and cooperative .',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKD_hVEhFyR6QJH45U5KG0wGR6ZDKrGV4Y7WFkrcA=w36-h36-p-rp-mo-br100'
  },
  {
    name: 'Nitanshu Pandey',
    rating: 5,
    date: '4 months ago',
    comment: 'Beautiful property available at affordable prices. Rooms are available in different ranges. There is regular maintenance of rooms, toilet and regular water facility.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWoB3smChOvx4oYSlhgKiLGAp0JYsEqnFsX-bkOBmTqfS0=w36-h36-p-rp-mo-br100'
  },
  {
    name: 'Pranshu Pandey',
    rating: 5,
    date: '7 months ago',
    comment: 'Friendly staff, spacious rooms and clean environment.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKu5oM_KbS6BiwSsikoXIkQ0pl0B4Q25hCPZ0xls5w=w36-h36-p-rp-mo-br100'
  },
  {
    name: 'Ankita Mohanty',
    rating: 5,
    date: 'a year ago',
    comment: 'Very good place to stay, well maintained property with all basic amenities. The owner is very helpful and friendly.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK8AkaELXfH5uokPmGK7vkRRfVvoBFGj06kV9DtAqo=w36-h36-p-rp-mo-br100'
  }
])

const handleSubmit = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred. Please try again later.');
  }
}

const initMap = () => {
  try {
    // Initialize Google Map
    const location = { lat: 28.5168125, lng: 77.3689521 } // Madhav Kunj actual location
    const mapOptions = {
      center: location,
      zoom: 15,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
        }
      ]
    }

    // Create the map
    map.value = new google.maps.Map(mapContainer.value, mapOptions)

    // Add custom marker
    marker.value = new google.maps.Marker({
      position: location,
      map: map.value,
      title: 'Madhav Kunj',
      animation: google.maps.Animation.DROP
    })

    // Custom info window content
    const contentString = `
      <div class="p-4 max-w-xs">
        <h3 class="text-lg font-semibold mb-2">Madhav Kunj</h3>
        <p class="text-sm mb-2">Premium PG Accommodation</p>
        <p class="text-sm mb-2">Plot No 8, Sector 128, Noida, Uttar Pradesh 201304</p>
        <div class="flex flex-col space-y-2 mt-2">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-green-600 text-sm">Open 24 hours</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-sm">5.0 (8 reviews)</span>
          </div>
          <div class="flex items-center space-x-3">
            <a href="tel:+919876543210" class="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Us
            </a>
            <a href="https://maps.google.com/maps?daddr=28.5168125,77.3689521" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    `

    // Create and configure info window
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    })

    // Add click listener to marker
    marker.value.addListener('click', () => {
      infoWindow.open(map.value, marker.value)
    })

    // Create the search box for nearby places
    const input = document.createElement('input')
    input.className = 'bg-white p-2 rounded-md shadow-md w-60 text-sm'
    input.placeholder = 'Search nearby places...'

    const searchBox = new google.maps.places.SearchBox(input)
    map.value.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

    // Bias the SearchBox results towards current map's viewport
    map.value.addListener('bounds_changed', () => {
      searchBox.setBounds(map.value.getBounds())
    })

    // Listen for the event fired when the user selects a prediction
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces()
      if (places.length === 0) return

      // For each place, add a marker
      places.forEach(place => {
        if (!place.geometry || !place.geometry.location) return

        new google.maps.Marker({
          map: map.value,
          title: place.name,
          position: place.geometry.location,
          icon: {
            url: place.icon,
            size: new google.maps.Size(24, 24),
            scaledSize: new google.maps.Size(24, 24)
          }
        })
      })

      // Fit the map to show all markers
      if (places[0].geometry.viewport) {
        map.value.fitBounds(places[0].geometry.viewport)
      } else {
        map.value.setCenter(places[0].geometry.location)
        map.value.setZoom(17)
      }
    })

  } catch (error) {
    console.error('Error initializing map:', error)
    // Show error message to user
    if (mapContainer.value) {
      mapContainer.value.innerHTML = `
        <div class="h-full flex items-center justify-center text-red-600">
          <p>Error loading map. Please refresh the page or try again later.</p>
        </div>
      `
    }
  }
}

onMounted(() => {
  // Check if Google Maps is loaded
  if (window.google && window.google.maps) {
    initMap()
  } else {
    console.error('Google Maps not loaded')
    if (mapContainer.value) {
      mapContainer.value.innerHTML = `
        <div class="h-full flex items-center justify-center text-red-600">
          <p>Error loading Google Maps. Please check your internet connection and try again.</p>
        </div>
      `
    }
  }
})
</script>

<template>
  <!-- Page Header -->
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900 text-center">Contact Us</h1>
      <p class="mt-4 text-xl text-gray-600 text-center">Get in touch with us for booking or any inquiries</p>
    </div>
  </div>

  <div class="container mx-auto px-4 py-12">
    <!-- Contact and Map Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-lg p-8 text-left">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="4"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        <!-- Quick Contact Info -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold mb-4">Quick Contact</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div class="ml-3">
                <p class="text-gray-900 font-medium">Address</p>
                <p class="text-gray-600">Madhav Kunj, Sector 128, Noida, Uttar Pradesh</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div class="ml-3">
                <p class="text-gray-900 font-medium">Phone</p>
                <p class="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div class="ml-3">
                <p class="text-gray-900 font-medium">Email</p>
                <p class="text-gray-600">info@madhavkunj.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map and Reviews Section -->
      <div class="space-y-8">
        <!-- Google Map -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div ref="mapContainer" class="h-[400px]"></div>
        </div>

        <!-- Reviews Section -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-semibold mb-6">What Our Residents Say</h3>
          <div class="space-y-6">
            <div v-for="(review, index) in reviews" :key="index" class="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div class="flex items-center mb-4">
                <div class="flex-shrink-0">
                  <img :src="review.avatar" :alt="review.name" class="h-10 w-10 rounded-full">
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">{{ review.name }}</h4>
                  <div class="flex items-center">
                    <div class="flex text-yellow-400">
                      <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span class="ml-2 text-sm text-gray-500">{{ review.date }}</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600">{{ review.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
