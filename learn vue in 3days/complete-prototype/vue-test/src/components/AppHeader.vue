<template>
    <v-app-bar
      style="padding:0px 90px"
      app
      color="dark"
      light
      elevation="6"
      elevate-on-scroll
    >
      <v-toolbar-title>O.T.A.S</v-toolbar-title>
      <v-spacer />
      <v-list class="d-flex align-center">
        <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.route">
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
  
        <v-btn text>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn outlined color="success">Get Started</v-btn>
      </v-list>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        menus: [
          { title: 'Home', route: 'home' },
          { title: 'About', route: 'about' },
          { title: 'Services', route: 'services' },
          { title: 'Support', route: 'support' },
          { title: 'Vision', route: 'vision' },
          { title: 'Mission', route: 'mission' },
          { title: 'Contact', route: 'contact' },
          { title: 'Partners', route: 'partners' },
          { title: 'Languages', route: 'languages' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  