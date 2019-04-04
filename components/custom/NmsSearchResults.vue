<template>
	<div class="nms-search-results__inner">
		<nuxt-link :to="`/post/${result.post_type}/${result.type}/${result.id}`" tag="div" v-for="result in data" :key="result.id" class="nms-search-results__single">
			<div class="nms-search-results__single--wrapper">
				<figure class="nms-search-results__single--image">
					<img :src="result.image_url" alt="image">
				</figure>
				<div class="nms-search-results__single--meta">
					<span class="post-date">Date posted: {{new Date(result.post_date.toDate()).toLocaleDateString()}}</span>
					<nuxt-link :to="'user/' + result.user_id" class="post-date">By: {{result.display_name}}</nuxt-link>
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
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		&__single {
			flex: 0 1 49%;
			cursor: pointer;
			transition: all .3s ease-in-out;

			&--wrapper {
				position: relative;
			}

			&--meta {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: rgba($red, .8);
				font-size: 1.2rem;
				color: #FFF;
				padding: .5rem;
				box-sizing: border-box;

				span:first-of-type {
					float: left;
				}

				span:last-of-type {
					float: right;
				}

				a {
					color: #FFF;
				}

				&:after {
					content: '';
					display: table;
					clear: both;
				}
			}

			&:hover {
				.nms-search-results__single--image {
					img {
						opacity: .8;
					}
				}
			}

			&--image {
				margin: 0;
				font-size: 0;

				img {
					max-width: 100%;
					width: 100%;
					transition: all .3s ease-in-out;
				}
			}
		}
	}
</style>