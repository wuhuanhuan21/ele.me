<template lang="html">
  <div id="wrapper">
    <header-component></header-component>
    <menu-component></menu-component>
    <content-component></content-component>
    <footer-component></footer-component>	
    <sidebar-component></sidebar-component>	
  </div>
</template>

<script>
	import HeaderComponent from './components/layout/HeaderComponent'
  import MenuComponent from './components/layout/MenuComponent'
  import SidebarComponent from './components/layout/SidebarComponent'
  import ContentComponent from './components/layout/ContentComponent'
  import FooterComponent from './components/layout/FooterComponent'

	export default {
	  name: 'App',
	  components:{
	  	HeaderComponent,
	  	MenuComponent,
	  	SidebarComponent,
	  	ContentComponent,
	  	FooterComponent
	  }
	}
</script>

<style>

</style>
