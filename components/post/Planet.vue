<template>
	<div class="nms-single-planet">
		<figure class="nms-single-planet__image">
			<img :src="data.image_url" alt="">
		</figure>
		<div class="nms-single-planet__glyphs">
			{{data.glyphs}}
		</div>
		<div class="nms-single-planet__meta">
			<span><strong>Posted on: </strong>{{data.post_date.toDate().toLocaleDateString()}}</span>
			<nuxt-link tag="span" :to="`/user/${data.user_id}`"><strong>By: </strong><span class="user-link">{{data.display_name}}</span></nuxt-link>
		</div>

		<div class="nms-single-planet__location">
			<span><strong>Planet: </strong> {{data.planet}}</span>
		</div>

		<div class="nms-single-planet__description">
			<h4>Description:</h4>
			{{data.description}}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data'],
	}
</script>
<style scoped lang='scss'>
	.nms-single-planet {
		max-width: 800px;
		margin: 0 auto;

		&__image {
			max-width: 600px;
			margin: 0 auto;

			
			img {
				max-width: 100%;
			}
		}

		&__meta {
			text-align: left;

			span:not(.user-link) {
				display: block;
			}

			.user-link {
				color: $red;
				text-decoration: underline;
				cursor: pointer;
			}
		}

		&__location {
			text-align: left;

			span {
				display: block;
			}
		}

		&__glyphs {
			font-family: 'glyphs-mono';
			text-align: center;
			font-size: 5rem;
		}
	}
</style>