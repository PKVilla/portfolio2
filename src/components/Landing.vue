<template>
	<div :style="{backgroundImage:`url('${background}')`}" style="height:100vh"> 
		<v-container >
			<v-row class="justify-center">
				<v-col cols="8">
					<v-card class="sample">
						<h1 class="text-center">Landing page</h1>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
	import background from '@/assets/images/cube.jpg'
	export default{
		data(){
			return{
				background: background
			}
		}
	}
</script>
<style>
.sample{
	-webkit-box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
	box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.75);
/*	opacity: 0.001;
*/}
</style>