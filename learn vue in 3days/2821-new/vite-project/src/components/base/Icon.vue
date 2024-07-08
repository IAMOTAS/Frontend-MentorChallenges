<template>
    <svg
      v-if="icon === 'lang-zh'"
      class="h-3.5 w-3.5 rounded-full me-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="flag-icon-css-cn"
      viewBox="0 0 512 512"
    >
      <defs>
        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
      </defs>
      <path fill="#de2910" d="M0 0h512v512H0z" />
      <use
        width="30"
        height="20"
        transform="matrix(76.8 0 0 76.8 128 128)"
        xlink:href="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-121 142.6 -47) scale(25.5827)"
        xlink:href="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-98.1 198 -82) scale(25.6)"
        xlink:href="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-74 272.4 -114) scale(25.6137)"
        xlink:href="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(16 -19.968 19.968 16 256 230.4)"
        xlink:href="#a"
      />
    </svg>
  
    <svg
      v-if="icon === 'lang-en'"
      class="w-3.5 h-3.5 rounded-full me-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 3900 3900"
    >
      <path fill="#b22234" d="M0 0h7410v3900H0z" />
      <path
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
        stroke="#fff"
        stroke-width="300"
      />
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  id="a"
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                />
                <use xlink:href="#a" y="420" />
                <use xlink:href="#a" y="840" />
                <use xlink:href="#a" y="1260" />
              </g>
              <use xlink:href="#a" y="1680" />
            </g>
            <use xlink:href="#b" x="247" y="210" />
          </g>
          <use xlink:href="#c" x="494" />
        </g>
        <use xlink:href="#d" x="988" />
        <use xlink:href="#c" x="1976" />
        <use xlink:href="#e" x="2470" />
      </g>
    </svg>
  
    <svg
      v-if="icon === 'lang-de'"
      class="h-3.5 w-3.5 rounded-full me-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-de"
      viewBox="0 0 512 512"
    >
      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
      <path d="M0 0h512v170.7H0z" />
      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
    </svg>
  
    <svg
      v-if="icon === 'lang-it'"
      class="h-3.5 w-3.5 rounded-full me-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-it"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009246" d="M0 0h170.7v512H0z" />
        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  </template>
  
  <script setup lang="ts">
  import { icons } from "@/utils";
  
  defineProps<{ icon: (typeof icons)[number] }>();
  </script>
  
  <style scoped>
  /* Your component's styles go here */
  </style>
  