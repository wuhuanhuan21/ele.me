<template>
	<div class="content-wrapper" >
    <!-- Content Header (Page header) -->
    <nav-component></nav-component>
			
    <!-- Main content -->
    <section class="content">

      <!-- Your Page Content Here -->
			<router-view></router-view>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
	import NavComponent from './NavComponent.vue'
	import PositionList from '../position/PositionList.vue'
	export default{
		components:{
			NavComponent,
			PositionList
		}
	}
</script>