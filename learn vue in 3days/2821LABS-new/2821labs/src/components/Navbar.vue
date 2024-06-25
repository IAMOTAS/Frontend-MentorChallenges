<template>
    <nav class="border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="../../assets/Logo.svg"
          class="h-16 w-16 rounded-full"
          alt="2821 LABS Logo"
        />
        <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            @click="toggleDropdown"
            data-dropdown-toggle="language-dropdown-menu"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-black rounded-lg cursor-pointer dark:hover:bg-gray-300 dark:hover:text-white font-ibm"
          >
            <Icon :icon="language.icon" />
            {{ language.name }}
          </button>
          <div
            v-if="isDropdownOpen"
            class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-#4327a1 absolute top-6 min-w-40 w-full"
            id="language-dropdown-menu"
          >
            <ul class="py-2 font-medium" role="none">
              <li
                @click="selectLanguage(lang)"
                v-for="lang in languages"
                :key="lang.name"
                class="inline-flex cursor-pointer items-center w-full font-medium px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-customPurple dark:hover:bg-gray-100 dark:hover:text-black font-ibm bg-white"
                role="menuitem"
              >
                <Icon :icon="lang.icon" />
                <div class="inline-flex items-center">{{ lang.name }}</div>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <router-link to="/" class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-ibm">Home</router-link>
            </li>
            <li>
              <div class="relative">
                <button @click="toggleDropdownMenu('about')" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-ibm">
                  About
                </button>
                <div v-if="dropdowns.about" class="absolute bg-white shadow-md rounded mt-1">
                  <router-link to="/vision" class="block px-4 py-2 hover:bg-gray-100">Vision</router-link>
                  <router-link to="/mission" class="block px-4 py-2 hover:bg-gray-100">Mission</router-link>
                </div>
              </div>
            </li>
            <li>
              <div class="relative">
                <button @click="toggleDropdownMenu('services')" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-ibm">
                  Services
                </button>
                <div v-if="dropdowns.services" class="absolute bg-white shadow-md rounded mt-1">
                  <router-link to="/services/webApps" class="block px-4 py-2 hover:bg-gray-100">Web Apps</router-link>
                  <router-link to="/services/desktopApps" class="block px-4 py-2 hover:bg-gray-100">Desktop Apps</router-link>
                  <router-link to="/services/mobileApps" class="block px-4 py-2 hover:bg-gray-100">Mobile Apps</router-link>
                  <router-link to="/services/telecomms" class="block px-4 py-2 hover:bg-gray-100">Telecomms</router-link>
                  <router-link to="/services/systemsAdmin" class="block px-4 py-2 hover:bg-gray-100">Systems Administration</router-link>
                  <router-link to="/services/aiML" class="block px-4 py-2 hover:bg-gray-100">AI & ML</router-link>
                  <router-link to="/services/electronics" class="block px-4 py-2 hover:bg-gray-100">Electronics</router-link>
                  <router-link to="/services/cryptoprogramming" class="block px-4 py-2 hover:bg-gray-100">Crypto Programming</router-link>
                </div>
              </div>
            </li>
            <li>
              <div class="relative">
                <button @click="toggleDropdownMenu('partners')" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-ibm">
                  Partners
                </button>
                <div v-if="dropdowns.partners" class="absolute bg-white shadow-md rounded mt-1">
                  <router-link to="/partners/companies" class="block px-4 py-2 hover:bg-gray-100">Companies</router-link>
                  <router-link to="/partners/projects" class="block px-4 py-2 hover:bg-gray-100">Projects</router-link>
                </div>
              </div>
            </li>
            <li>
              <router-link to="/contact" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-ibm">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { defineAsyncComponent } from "vue";
  
  const Icon = defineAsyncComponent(() => import("@/components/base/icon.vue"));
  
  const languages = [
    { name: "English (US)", icon: "lang-en" },
    { name: "Deutsch", icon: "lang-de" },
    { name: "Italiano", icon: "lang-it" },
    { name: "中文 (繁體)", icon: "lang-zh" }
  ];
  
  const isDropdownOpen = ref(false);
  const language = ref({ name: "English (US)", icon: "lang-en" });
  
  const dropdowns = ref({
    about: false,
    services: false,
    partners: false
  });
  
  function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
  
  function selectLanguage(lang) {
    language.value = lang;
    isDropdownOpen.value = false;
  }
  
  function toggleDropdownMenu(menu) {
    dropdowns.value[menu] = !dropdowns.value[menu];
  }
  </script>
  
  <style scoped>
  /* Your styles go here */
  </style>
  