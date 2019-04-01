<template>
	<form>
		<nms-upload name="planet_image_upload" @change.native="fileSelected($event)"></nms-upload>
		<galaxy-select search="true" label="Select a galaxy" name="galaxy_select" v-model="filled.galaxy"></galaxy-select>
		<nms-input v-model="filled.planet" label="Planet Name" name="planet" kind="text"></nms-input>
		<nms-select search="true" v-model="filled.type" name="planet_biome" label="What biome does the planet have?" :options="biomes"></nms-select>
		<nms-select search="true" v-model="filled.weather" name="planet_weather" label="What weather is on the planet?" :options="weathertypes"></nms-select>
		<nms-select v-model="filled.sentinels" name="sentinels" label="How are the sentinels?" :options="sentinels"></nms-select>
		<nms-input name="planet_flora" v-model="filled.flora" kind="text" label="What's the Flora status?"></nms-input>
		<nms-input name="planet_fauna" v-model="filled.fauna" kind="text" label="What's the Fauna status?"></nms-input>
		<nms-input v-model="filled.description" kind="textarea" label="What's so awesome about this planet?"></nms-input>
		<glyph-selector v-model="filled.glyphs" label="Enter the portal glyph combination"></glyph-selector>
		<nms-button @click.native="submitPost" class="nms__form-planet--submit" color="green">Submit post</nms-button>
	</form>
</template>

<script>
	import GlyphSelector from '@/components/custom/GlyphSelector.vue';
	import GalaxySelect from '@/components/UI/Selects/GalaxySelect.vue';
	export default {
		components: {
			'glyph-selector': GlyphSelector,
			'galaxy-select': GalaxySelect
		},
		data() {
			return {
				biomes: ['Scorched', 'Frozen', 'Toxic', 'Irradiated', 'Arid', 'Bleak', 'Corrosive', 'Dead', 'Desert',
					'Forsaken', 'Galcial', 'Lifeless', 'Noxious', 'Poisonous', 'Sub-zero', 'Tropical',
					'Viridiscent', 'Incandescent'
				],
				weathertypes: [
					"Absent",
					"Acid Rain",
					"Acidic Deluges",
					"Acidic Dust",
					"Acidic Dust Pockets",
					"Airless",
					"Alkaline Cloudbursts",
					"Alkaline Rain",
					"Alkaline Storms",
					"Anomalous",
					"Arid",
					"Atmospheric Corruption",
					"Atmospheric Heat Instabilities",
					"Baked",
					"Balmy",
					"Beautiful",
					"Bilious Storms",
					"Billowing Dust Storms",
					"Blasted Atmosphere",
					"Blazed",
					"Blissful",
					"Blistering Damp",
					"Blistering Floods",
					"Blizzard",
					"Blood Rain",
					"Boiling Monsoons",
					"Boiling Puddles",
					"Boiling Superstorms",
					"Bone-Stripping Acid Storms",
					"Broiling Humidity",
					"Burning",
					"Burning Air",
					"Burning Gas Clouds",
					"Caustic Dust",
					"Caustic Floods",
					"Caustic Moisture",
					"Caustic Winds",
					"Ceaseless Drought",
					"Choking Clouds",
					"Choking Humidity",
					"Choking Sandstorms",
					"Clear",
					"Cold",
					"Combustible Dust",
					"Contaminated",
					"Contaminated Puddles",
					"Contaminated Squalls",
					"Corrosive Cyclones",
					"Corrosive Damp",
					"Corrosive Rainstorms",
					"Corrosive Sleet Storms",
					"Corrosive Storms",
					"Crimson Heat",
					"Crisp",
					"Damp",
					"Dangerously Hot",
					"Dangerously Hot Fog",
					"Dangerously Toxic Rain",
					"Dead Wastes",
					"Deep Freeze",
					"Dehydrated",
					"Deluge",
					"Desolate",
					"Desiccated",
					"Direct Sunlight",
					"Downpours",
					"Drifting Snowstorms",
					"Drizzle",
					"Droughty",
					"Dry Gusts",
					"Dust-Choked Winds",
					"Eerily Calm",
					"Electric Rain",
					"Elevated Radioactivity",
					"Emollient",
					"Energetic Storms",
					"Enormous Nuclear Storms",
					"Extreme Acidity",
					"Extreme Atmospheric Decay",
					"Extreme Cold",
					"Extreme Contamination",
					"Extreme Heat",
					"Extreme Nuclear Decay",
					"Extreme Radioactivity",
					"Extreme Thermonuclear Fog",
					"Extreme Toxicity",
					"Extreme Wind Blasting",
					"Extreme Winds",
					"Fair",
					"Fine",
					"Firestorms",
					"Flaming Hail",
					"Freezing",
					"Freezing Night Winds",
					"Freezing Rain",
					"Frequent Blizzards",
					"Frequent Particle Eruptions",
					"Frequent Toxic Floods",
					"Frigid",
					"Frost",
					"Frozen",
					"Frozen Clouds",
					"Gamma Cyclones",
					"Gamma Dust",
					"Gas Clouds",
					"Gelid",
					"Glacial",
					"Harmful Rain",
					"Harsh Winds",
					"Harsh, Icy Winds",
					"Haunted Frost",
					"Hazardous Temperature Extremes",
					"Hazardous Whiteouts",
					"Heated",
					"Heated Atmosphere",
					"Heavily Toxic Rain",
					"Heavy Rain",
					"Highly Variable Temperatures",
					"Hot",
					"Howling Blizzards",
					"Howling Gales",
					"Humid",
					"Ice Storms",
					"Icebound",
					"Icy",
					"Icy Blasts",
					"Icy Nights",
					"Icy Tempests",
					"Incendiary Dust",
					"Indetectable Burning",
					"Inert",
					"Inferno",
					"Inferno Winds",
					"Infrequent Blizzards",
					"Infrequent Dust Storms",
					"Infrequent Heat Storms",
					"Infrequent Toxic Drizzle",
					"Intense Cold",
					"Intense Dust",
					"Intense Heat",
					"Intense Heatbursts",
					"Intense Rainfall",
					"Intermittent Wind Blasting",
					"Internal Rain",
					"Invisible Mist",
					"Irradiated",
					"Irradiated Downpours",
					"Irradiated Storms",
					"Irradiated Thunderstorms",
					"Irradiated Winds",
					"Lethal Atmosphere",
					"Lethal Humidity Outbreaks",
					"Light Showers",
					"Lost Clouds",
					"Lung-Burning Night Wind",
					"Mellow",
					"Memories of Frost",
					"Migratory Blizzards",
					"Mild",
					"Mild Rain",
					"Moderate",
					"Moistureless",
					"Monsoon",
					"Mostly Calm",
					"No Atmosphere",
					"Noxious Gas Storms",
					"Noxious Gases",
					"Nuclear Emission",
					"Nuclidic Atmosphere",
					"Obsidian Heat",
					"Occasional Acid Storms",
					"Occasional Ash Storms",
					"Occasional Radiation Outbursts",
					"Occasional Sandstorms",
					"Occasional Scalding Cloudbursts",
					"Occasional Snowfall",
					"Outbreaks of Frozen Rain",
					"Overly Warm",
					"Painfully Hot Rain",
					"Parched",
					"Parched Sands",
					"Particulate Winds",
					"Passing Toxic Fronts",
					"Peaceful",
					"Peaceful Climate",
					"Perfectly Clear",
					"Permafrost",
					"Planet-Wide Radiation Storms",
					"Planetwide Desiccation",
					"Pleasant",
					"Poison Flurries",
					"Poison Rain",
					"Poisonous Dust",
					"Poisonous Gas",
					"Pouring Rain",
					"Pouring Toxic Rain",
					"Powder Snow",
					"Radioactive",
					"Radioactive Damp",
					"Radioactive Decay",
					"Radioactive Dust Storms",
					"Radioactive Humidity",
					"Radioactive Storms",
					"Radioactivity",
					"Raging Snowstorms",
					"Rain of Atlas",
					"Rainstorms",
					"Rare Firestorms",
					"Reactive",
					"Reactive Dust",
					"Reactive Rain",
					"Refreshing Breeze",
					"Roaring Ice Storms",
					"Roaring Nuclear Wind",
					"Sand Blizzards",
					"Sandstorms",
					"Scalding Heat",
					"Scaling Rainstorms",
					"Scorched",
					"Self-Igniting Storms",
					"Silent",
					"Smouldering",
					"Snow",
					"Snowfall",
					"Snowstorms",
					"Snowy",
					"Sporadic Grit Storms",
					"Sterile",
					"Stinging Atmosphere",
					"Stinging Puddles",
					"Sunny",
					"Supercooled Storms",
					"Superheated Air",
					"Superheated Drizzle",
					"Superheated Gas Pockets",
					"Superheated Rain",
					"Sweltering",
					"Sweltering Damp",
					"Temperate",
					"Tempered",
					"Thirsty Clouds",
					"Torrential Acid",
					"Torrential Heat",
					"Torrential Rain",
					"Torrid Deluges",
					"Toxic Clouds",
					"Toxic Damp",
					"Toxic Dust",
					"Toxic Monsoons",
					"Toxic Outbreaks",
					"Toxic Rain",
					"Toxic Superstorms",
					"Tropical Storms",
					"Unclouded Skies",
					"Unending Sunlight",
					"Unstable",
					"Unstable Atmosphere",
					"Unstable Fog",
					"Unusually Mild",
					"Usually Mild",
					"Utterly Still",
					"Volatile",
					"Volatile Dust Storms",
					"Volatile Storms",
					"Volatile Winds",
					"Volatile Windstorms",
					"Wandering Frosts",
					"Wandering Hot Spots",
					"Warm",
					"Wet",
					"Whiteout",
					"Wind",
					"Winds of Glass",
					"Wintry",
					"Withered"
				],
				sentinels: ['Passive', 'Lacking', 'Relaxed', 'Limited', 'Low', 'Low Security', 
				'Minimal', 'Active', 'Average', 'Standard', 'Typical', 'Mindful', 'Engaging', 
				'Frenzied', 'High Security', 'Aggresive', 'Hostile'],
				filled: {
					postType: 'planets',
					image: null,
					type: null,
					weather: null,
					flora: null,
					fauna: null,
					planet: null,
					glyphs: null,
					galaxy: null,
					description: null
				}
			}
		},
		methods: {
			fileSelected(e) {
				if (e.target.files[0].size < 1000000) {
					this.filled.image = e.target.files[0];
					this.filled.image.id = +new Date() + this.filled.image.name.replace(/\s/g, '-');
				}
			},
			uploadFile() {
				if (this.filled.image !== '') {
					document.querySelector('body').classList.add('loading');
					this.$store.dispatch('newpost/new-post/uploadFile', this.filled.image);
				}
			},
			submitPost() {
				if (this.filled.image === null) {
					document.getElementById('planet_image_upload').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please upload an image before submiting", document.getElementById('planet_image_upload'));
				} else if (this.filled.galaxy === null) {
					document.getElementById('galaxy_select').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select a galaxy before submiting", document.getElementById('galaxy_select'));
				} else if (this.filled.planet == null) {
					document.getElementById('planet').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select the planet's name before submiting", document.getElementById('planet'));
				} else if (this.filled.type == null) {
					document.getElementById('planet_biome').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select a planet biome before submiting", document.getElementById('planet_biome'));
				} else if (this.filled.weather == null) {
					document.getElementById('planet_weather').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select the planet's weather before submiting", document.getElementById('planet_weather'));
				} else if (this.filled.flora == null) {
					document.getElementById('planet_flora').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select the planet's fauna before submiting", document.getElementById('planet_flora'));
				} else if (this.filled.fauna == null) {
					document.getElementById('planet_fauna').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please select the planet's flora before submiting", document.getElementById('planet_fauna'));
				} else if (this.filled.glyphs == null) {
					document.getElementById('glyph-selector').scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					this.createMessage("Please enter the portal glyphs before submiting", document.getElementById('glyph-selector'));
				} else {
					document.querySelector('body').classList.add('loading');
					this.$store.dispatch('newpost/new-post/submitNewPost', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>