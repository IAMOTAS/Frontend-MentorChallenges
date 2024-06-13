<template>
  <v-app>
    <AppHeader />
    <v-main>
      <!-- Main content -->
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: { AppHeader },
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
