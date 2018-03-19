<template lang="html">
	<section class="content-header" id="nav">
		<h1>
		  <span>{{nav.title}}</span>
		  <small>{{nav.subtitle}}</small>
		</h1>
		<ol class="breadcrumb">
		  <li><a :href="nav.url"><i class="fa fa-dashboard"></i> <span>{{nav.navLevel1}}</span></a></li>
		  <li class="active">{{nav.navLevel2}}</li>
		</ol>
 	</section>
</template>

<script>
	export default {
		computed: {
			nav() {
				return this.$store.state.nav
			}
		}
	}
</script>