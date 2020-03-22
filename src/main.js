import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import Landing from '@/components/Landing'
import About from '@/components/About'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '/', component: Landing
	},
	{
		path: '/about', component: About
	}
	]
});

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
