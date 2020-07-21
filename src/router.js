import Vue from 'vue';
import Router from 'vue-router';
import index from './pages/index.vue';
import jekyll from './pages/jekyll.vue';
import docker from './pages/docker.vue';
import regex from './pages/regex-password.vue';
import skrollr from './pages/skrollr.vue';
import landingpage from './pages/landing-page.vue';
import fullhero from './pages/fullhero.vue';
import modal from './pages/modal.vue';
import https from './pages/https.vue';
import parallax from './pages/parallax.vue';
import nattempts from './pages/nth-attempts.vue';
import apptest from './pages/app-test.vue';
import bdchome from './pages/bdc-home.vue';
import developerbdc from './pages/developer-bdc.vue';
import nav from './layout/nav.vue';
import footer from './layout/footer.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: index, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/docker',
      name: 'docker',
      components: { default: docker, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/jekyll',
      name: 'jekyll',
      components: { default: jekyll, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/regex',
      name: 'regex',
      components: { default: regex, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/skrollr',
      name: 'skrollr',
      components: { default: skrollr, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      components: { default: landingpage, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/fullhero',
      name: 'fullhero',
      components: { default: fullhero, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/modal',
      name: 'modal',
      components: { default: modal, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/https',
      name: 'https',
      components: { default: https, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/parallax',
      name: 'parallax',
      components: { default: parallax, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/nth-attempts',
      name: 'nattempts',
      components: { default: nattempts, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/app-test',
      name: 'apptest',
      components: { default: apptest, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/bdc-home',
      name: 'bdchome',
      components: { default: bdchome, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/developer-bdc',
      name: 'developerbdc',
      components: { default: developerbdc, header: nav, footer: footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
