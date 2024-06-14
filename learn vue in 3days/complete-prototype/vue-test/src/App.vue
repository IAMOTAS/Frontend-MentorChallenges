<template>
  <v-app>
    <AppHeader />
    <v-main>
      <!-- Main content -->

<HeroComponent/>
  <AboutUs/>
  <ServiceOffer/>
  <AppSupport/>


    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroComponent from './components/HeroComponent.vue'
import AboutUs from './components/AboutUs.vue'
import ServiceOffer from './components/ServiceOffer.vue'
import AppSupport from './components/AppSupport.vue'
export default {
  name: 'App',
  components: {AboutUs,HeroComponent, AppHeader,ServiceOffer,AppSupport },
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
