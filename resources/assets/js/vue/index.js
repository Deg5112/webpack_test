import App   from 'VueSrc/components/app';
import testA from 'VueSrc/components/testA/testA.vue';
import testB from 'VueSrc/components/testB/testB.vue';

new referralVue({
  router:     referralRouter,
  store:      referralStore,
  template:   '<App/>',
  components: { App },
}).$mount('#app');
