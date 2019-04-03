<template>
	<div class="nms-search-results__inner">
		<nuxt-link :to="'/post/' + result.id" v-for="result in data" :key="result.id" class="nms-search-results__single">
			<div class="nms-search-results__single--wrapper">
				<figure class="nms-search-results__single--image">
					<img :src="result.image_url" alt="image">
				</figure>
				<div class="nms-search-results__single--content">
					<ul class="checklist">
						<li>{{result.type}}</li>
						<li>{{result.class}}</li>
						<li>{{result.galaxy}}</li>
						<li class="glyphs">{{result.glyphs}}</li>
						<li>{{result.display_name}}</li>
						<li>{{result.post_date.toDate().toLocaleDateString()}}</li>
					</ul>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		props: ['data'],
	}
</script>
<style scoped lang='scss'>
	.glyphs {
		font-family: 'glyphs-mono';
	}

	.nms-search-results {
		&__inner {

		}

		&__single {
			padding: 1rem;
			box-sizing: border-box;
			border: 1px solid #e9e9e9;

			&--wrapper {
				display: flex;
				align-items: center;
			}

			&--image {
				flex: 0 1 30%;
				margin-right: 1.5rem;

				img {
					max-width: 12rem;
				}
			}

			&--content {
				flex: 0 1 70%;
			}
		}
	}
</style>