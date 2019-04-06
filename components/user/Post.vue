<template>
	<div>
		<nuxt-link :to="url" class="nms-single-user__post">
			<div class="nms-single-user__post--image cell">
				<img :src="image_url" alt="post image">
			</div>
			<div class="cell">
				<span class="nms-single-user__post--type">{{type}}</span>
			</div>
			<div class="cell">
				<span class="nms-single-user__post--date">{{post_date.toDate().toLocaleDateString()}}</span>
			</div>
			<div class="cell">
				<span class="nms-single-user__post--date">{{galaxy}}</span>
			</div>
			<div v-if="weather" class="cell">
				<span class="nms-single-user__post--weather">{{weather}}</span>
			</div>
			<div v-if="rank" class="cell">
			<span class="nms-single-user__post--rank">{{rank}}</span>
			</div>
			<div v-if="slots" class="cell">
				<span class="nms-single-user__post--slots">{{slots}}</span>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		props: ['type', 'post_date', 'galaxy', 'weather', 'rank', 'slots', 'image_url', 'url'],
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang='scss'>
	.nms-single-user__post {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: .5rem;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, .2);
		margin-bottom: 1.5rem;
		text-decoration: none;
		transition: all .3s ease-in-out;

		&:hover {
			background-color: rgba(0, 0, 0, .7);
		}

		.cell {
			flex: 0 1 15%;
		}

		img {
			max-height: 50px;
		}

		span {
			text-decoration: none;
			color: #FFF;
		}
	}
</style>