import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import PositionForm from '@/components/position/PositionForm'
import PositionList from '@/components/position/PositionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/position',
    	redirect: '/position/0',
    },
    {
      path: '/position/:pageno',
      name: 'position',
      component: PositionList,
      props: true
    },
    {
      path: '/add',
      name: 'add',
      component: PositionForm,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PositionForm,
    }

  ]
})
