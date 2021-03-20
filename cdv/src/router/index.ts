import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import Customers from '../views/Customers.vue';
import Products from '../views/Products.vue';
import Sell from '../views/Sell.vue';
import Sales from '../views/Sales.vue';
import Home from '../views/Home.vue';

Vue.use(Router);

class RouteMeta {
  title: string;

  constructor({title}: { title: string }) {
    this.title = title;
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      //name: 'no-customers',
      component: Home,
      meta: new RouteMeta({ title: 'Controle de Vendas' })
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      meta: new RouteMeta({ title: 'Clientes' })
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: new RouteMeta({ title: 'Produtos' })
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales,
      meta: new RouteMeta({ title: 'Vendas' })
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell,
      meta: new RouteMeta({ title: 'Venda Rápida' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {

  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;