<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <!-- Logo and Nav Links -->
        <router-link to="/">
          <img src="@/assets/Logo.svg" class="h-12 w-12 rounded-full" alt="2821 LABS Logo" />
        </router-link>

        <!-- Nav Links -->
        <ul class="flex space-x-4 font-ibm">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li class="relative" @mouseenter="isAboutDropdownOpen = true" @mouseleave="isAboutDropdownOpen = false">
            <router-link to="/about">About</router-link>
            <ul v-if="isAboutDropdownOpen" class="absolute bg-white shadow-lg rounded-lg py-2 mt-1 w-36">
              <li><router-link to="/about/mission" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Mission</router-link></li>
              <li><router-link to="/about/vision" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Vision</router-link></li>
            </ul>
          </li>
          <li class="relative" @mouseenter="isServicesDropdownOpen = true" @mouseleave="isServicesDropdownOpen = false">
            <router-link to="/services">Services</router-link>
            <ul v-if="isServicesDropdownOpen" class="absolute bg-white shadow-lg rounded-lg py-2 mt-1 w-36">
              <li><router-link to="/services/aiml" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">AI/ML</router-link></li>
              <li><router-link to="/services/cryptoprogramming" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Crypto Programming</router-link></li>
              <li><router-link to="/services/desktopapp" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Desktop App</router-link></li>
              <li><router-link to="/services/electronics" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Electronics</router-link></li>
              <li><router-link to="/services/mobileapp" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Mobile App</router-link></li>
              <li><router-link to="/services/systemadmin" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">System Admin</router-link></li>
              <li><router-link to="/services/telecomms" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Telecomms</router-link></li>
              <li><router-link to="/services/webapps" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Web Apps</router-link></li>
            </ul>
          </li>
          <li class="relative" @mouseenter="isPartnersDropdownOpen = true" @mouseleave="isPartnersDropdownOpen = false">
            <router-link to="/partners">Partners</router-link>
            <ul v-if="isPartnersDropdownOpen" class="absolute bg-white shadow-lg rounded-lg py-2 mt-1 w-36">
              <li><router-link to="/partners/companies" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Companies</router-link></li>
              <li><router-link to="/partners/projects" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Projects</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>

        <!-- Language Dropdown -->
        <div class="relative">
          <button @click="toggleDropdown" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black rounded-lg dark:hover:bg-gray-300 dark:hover:text-white font-ibm">
            <Icon :icon="language.icon" />
            {{ language.name }}
          </button>
          <ul v-if="isDropdownOpen" class="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg py-2">
            <li v-for="lang in languages" :key="lang.name" @click="selectLanguage(lang)">
              <div class="flex items-center px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100">
                <Icon :icon="lang.icon" />
                <span class="ml-2">{{ lang.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/base/Icon.vue';

const languages = [
  { name: 'English (US)', icon: 'lang-en' as const },
  { name: 'Deutsch', icon: 'lang-de' as const },
  { name: 'Italiano', icon: 'lang-it' as const },
  { name: '中文 (繁體)', icon: 'lang-zh' as const }
] as const;

const isAboutDropdownOpen = ref(false);
const isServicesDropdownOpen = ref(false);
const isPartnersDropdownOpen = ref(false);

const isDropdownOpen = ref(false);
const language = ref<{ name: string; icon: 'lang-en' | 'lang-de' | 'lang-it' | 'lang-zh'; }>({
  name: 'English (US)',
  icon: 'lang-en'
});

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectLanguage(lang: (typeof languages)[number]) {
  language.value = lang;
  isDropdownOpen.value = false;
}
</script>

<style scoped>
/* Additional styles for the component */
ul {
  display: flex;
  align-items: center;
}

/* Adjust logo size */
.h-12, .w-12 {
  height: 3rem; /* Adjust as needed */
  width: 3rem; /* Adjust as needed */
}
</style>
