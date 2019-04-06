<template>
	<div class="nms-single-multitool">
		<figure class="nms-single-multitool__image">
			<img :src="data.image_url" alt="">
			<div class="nms-single-multitool__glyphs">
				{{data.glyphs}}
			</div>
		</figure>

		<div class="nms-single-multitool__content">
			
			<div class="nms-single-multitool__meta">
				<span><strong>Posted on: </strong>{{data.post_date.toDate().toLocaleDateString()}}</span>
				<nuxt-link tag="span" :to="`/user/${data.user_id}`"><strong>By: </strong><span class="user-link">{{data.display_name}}</span></nuxt-link>
			</div>

			<div class="nms-single-multitool__location">
				<span><strong>Location: </strong> {{data.location}}</span>
				<span v-if="data.location === 'planet'"><strong>Planet: </strong> {{data.planet}}</span>
				<span v-if="data.location === 'planet'"><strong>Galactic Coordinates: </strong>{{data.coords}}</span>
			</div>

			<div class="nms-single-multitool__description">
				<h4>Description:</h4>
				{{data.description}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data'],
	}
</script>
<style scoped lang='scss'>
	.nms-single-multitool {
		margin: 0 auto;
		display: flex;

		&__image {
			margin: 0 auto;
			flex: 0 1 50%; 
			margin-right: 2%;

			
			img {
				max-width: 100%;
			}
		}

		&__content {
			flex: 0 1 48%
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
			text-align: left;
			font-size: 5rem;
		}
	}
</style>