<script setup lang="ts">

import { getGoogleContacts, getGooglePhotos, refSession } from '@/models/users';
import { ref } from 'vue'

const session = refSession();

const contacts = ref<any[]>([])
async function getContacts() {
  const result = await getGoogleContacts()
  contacts.value = result.connections
}

const photos = ref([])
async function getPhotos() {
  const result = await getGooglePhotos()
  photos.value = result.mediaItems
}
</script>

<template>
  <main>
    <h1 class="title">Home</h1>
    <p>Welcome to your Vue.js app!</p>

    <button class="button is-warning" :disabled="!session.token" @click="getContacts">Get Google Contacts</button>
    <ul class="contacts">
      <li v-for="contact in contacts" :key="contact.id">
        <img :src="contact.photos[0].url" alt="contact.name" />
        <b>{{ contact.names[0].displayName }}</b>
        <div v-for="number in contact.phoneNumbers" :key="number.value">
          <span>{{ number.value }}</span>
        </div>
      </li>
    </ul>

    <button class="button is-warning" :disabled="!session.token" @click="getPhotos">Get Google Photos</button>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.baseUrl" alt="photo.filename" />
      </li>
    </ul>

  </main>
</template>

<style scoped>
.contacts li {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.contacts img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}
</style>