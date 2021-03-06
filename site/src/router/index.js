import Vue from 'vue'
import Router from 'vue-router'
import atBash from '@/components/atbash'
import scytale from '@/components/scytale'
import cesar from '@/components/cesar'
import authors from '@/components/authors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'atbash',
      component: atBash
    },
    {
      path: '/scytale',
      name: 'scytale',
      component: scytale
    },
    {
      path: '/cesar',
      name: 'cesar',
      component: cesar
    },
    {
      path: '/team',
      name: 'team',
      component: authors
    }
  ]
})
