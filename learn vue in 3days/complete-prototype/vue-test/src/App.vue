<template>
  <v-app>
    <AppHeader />
    <v-main>
      <!-- Main content -->

<HeroComponent/>

    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroComponent from './components/HeroComponent.vue'
export default {
  name: 'App',
  components: { HeroComponent, AppHeader },
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
