<template>
	<div class="nms-upload__wrapper">
		<div :id="name" class="nms-upload">
			<span class="label">Click here to upload an image!</span>
			<input @change="changeLabel($event)" type="file">
		</div>
		<nms-button type="submit" @click.native.prevent="uploadFile($event)" color="red">Upload!</nms-button>
	</div>
</template>

<script>
	export default {
		props: ['name'],
		data() {
			return {
				filled: {
					image: ''
				}
			}
		},
		methods: {
			changeLabel(e) {
				if(e.target.files[0].size < 1000000) {
					e.target.closest('.nms-upload').querySelector('.label').innerText = e.target.files[0].name;
					this.filled.image = e.target.files[0];
				} else {
					this.createMessage("Filesize is too big. Must be less than 1MB!", document.getElementById('multitool_image_upload'));
				}
			},
			uploadFile(e) {
				e.target.disabled = true;
				if(this.filled.image !== '') {
					this.loading(true);
					this.$store.dispatch('post/new-post/uploadFile', this.filled.image);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.nms-upload {
		margin: 2rem 0;
		width: 100%;
		background-color: rgba($red, .5);
		border: 5px dashed $red;
		min-height: 6rem;
		box-sizing: border-box;
		position: relative;

		&__wrapper {
			margin-bottom: 2rem;
		}

		.label {
			color: #FFF;
			pointer-events: none;
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			text-align: center;
			padding: 1rem;
			box-sizing: border-box;
		}

		input {
			appearance: none;
			opacity: 0;
			cursor: pointer;
			min-height: inherit;
			display: block;
			width: 100%;
		}
	}
</style>