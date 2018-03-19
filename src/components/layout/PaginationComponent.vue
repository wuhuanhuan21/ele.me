<template lang="html">
	
	<div class="box-footer clearfix">
		<ul class="pagination pagination-sm no-margin pull-right">
		  <li><a href="#/position/0">&laquo;</a></li>
		  	<template v-for="(v, i) in pagecount">
		      <li v-if="i == pageno" class="active"><a :href="`#/position/${i}`">{{i+1}}</a></li>
		      <li v-else><a :href="`#/position/${i}`">{{i+1}}</a></li>
		    </template>
		  <li><a :href="`#/position/${pagecount-1}`">&raquo;</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['pageno', 'pagesize', 'pagecount']
}
</script>