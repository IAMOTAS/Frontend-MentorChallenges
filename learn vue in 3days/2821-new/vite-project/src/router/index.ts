import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/home/homePage.vue';
import ScheduledMaintenance from '../components/scheduledMaintenance/Brb.vue';
import PageNotFound from '../components/notFound/pageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/vision',
    name: 'Vision',
    component: () => import('../components/about/Vision.vue'),
  },
  {
    path: '/mission',
    name: 'Mission',
    component: () => import('../components/about/Mission.vue'),
  },
  {
    path: '/services/webApps',
    name: 'WebApps',
    component: () => import('../components/services/WebApps.vue'),
  },
  {
    path: '/services/desktopApps',
    name: 'DesktopApps',
    component: () => import('../components/services/DesktopApps.vue'),
  },
  {
    path: '/services/mobileApps',
    name: 'MobileApps',
    component: () => import('../components/services/MobileApps.vue'),
  },
  {
    path: '/services/telecomms',
    name: 'Telecomms',
    component: () => import('../components/services/Telecomms.vue'),
  },
  {
    path: '/services/systemsAdmin',
    name: 'SystemsAdmin',
    component: () => import('../components/services/SystemsAdmin.vue'),
  },
  {
    path: '/services/aiML',
    name: 'AiML',
    component: () => import('../components/services/AiML.vue'),
  },
  {
    path: '/services/electronics',
    name: 'Electronics',
    component: () => import('../components/services/Electronics.vue'),
  },
  {
    path: '/services/cryptoprogramming',
    name: 'Cryptoprogramming',
    component: () => import('../components/services/CryptoProgramming.vue'),
  },
  {
    path: '/partners/companies',
    name: 'Companies',
    component: () => import('../components/partners/Companies.vue'),
  },
  {
    path: '/partners/projects',
    name: 'Projects',
    component: () => import('../components/partners/Projects.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/contact/Contact.vue'),
  },
  {
    path: '/brb',
    name: 'ScheduledMaintenance',
    component: ScheduledMaintenance,
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
