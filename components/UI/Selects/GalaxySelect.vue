<template>
	<div class='nms__select--galaxy'>
		<div class="form-group">
		<label v-if="label" :for="name">{{label}}</label>
		<select :id="name + '_select'" :name="name" @input="$emit('input', $event.target.value)">
			<option selected value="null"></option>
			<option v-for="galaxy in galaxies" :value="galaxy" :key="galaxy">{{galaxy}}</option>
		</select>
		<div :id="name" class="nms-select">
			<div class="nms-selected"><span><slot></slot></span></div>
			<div class="nms-select__options">
				<div class="dropdown-filter-wrapper">
					<input id="dropdown-filter" v-if="search" type="text" @input="filterDropdown($event)" />
				</div>
				<div class="nms-select__options--wrapper">
					<div :data-option="index" v-for="(galaxy, index) in galaxies" :key="galaxy" class="nms-select__option">{{galaxy}}</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			galaxies: [
				"Euclid",
				"Hilbert Dimension",
				"Calypso",
				"Hesperius Dimension",
				"Hyades",
				"Ickjamatew",
				"Budullangr",
				"Kikolgallr",
				"Eltiensleen",
				"Eissentam",
				"Elkupalos",
				"Aptarkaba",
				"Ontiniangp",
				"Odiwagiri",
				"Ogtialabi",
				"Muhacksonto",
				"Hitonskyer",
				"Rerasmutul",
				"Isdoraijung",
				"Doctinawyra",
				"Loychazinq",
				"Zukasizawa",
				"Ekwathore",
				"Yeberhahne",
				"Twerbetek",
				"Sivarates",
				"Eajerandal",
				"Aldukesci",
				"Wotyarogii",
				"Sudzerbal",
				"Maupenzhay",
				"Sugueziume",
				"Brogoweldian",
				"Ehbogdenbu",
				"Ijsenufryos",
				"Nipikulha",
				"Autsurabin",
				"Lusontrygiamh",
				"Rewmanawa",
				"Ethiophodhe",
				"Urastrykle",
				"Xobeurindj",
				"Oniijialdu",
				"Wucetosucc",
				"Ebyeloofdud",
				"Odyavanta",
				"Milekistri",
				"Waferganh",
				"Agnusopwit",
				"Teyaypilny",
				"Jewijkmas",
				"Itlhotagra",
				"Podalicess",
				"Hiviusauer",
				"Halsebenk",
				"Puikitoac",
				"Gaybakuaria",
				"Grbodubhe",
				"Rycempler",
				"Indjalala",
				"Fontenikk",
				"Pasycihelwhee",
				"Ikbaksmit",
				"Telicianses",
				"Oyleyzhan",
				"Uagerosat",
				"Impoxectin",
				"Twoodmand",
				"Hilfsesorbs",
				"Ezdaranit",
				"Wiensanshe",
				"Ewheelonc",
				"Litzmantufa",
				"Emarmatosi",
				"Mufimbomacvi",
				"Wongquarum",
				"Hapirajua",
				"Igbinduina",
				"Wepaitvas",
				"Sthatigudi",
				"Yekathsebehn",
				"Ebedeagurst",
				"Nolisonia",
				"Ulexovitab",
				"Iodhinxois",
				"Irroswitzs",
				"Bifredait",
				"Beiraghedwe",
				"Yeonatlak",
				"Cugnatachh",
				"Nozoryenki",
				"Ebralduri",
				"Evcickcandj",
				"Ziybosswin",
				"Heperclait",
				"Sugiuniam",
				"Aaseertush",
				"Uglyestemaa",
				"Horeroedsh",
				"Drundemiso",
				"Ityanianat",
				"Purneyrine",
				"Dokiessmat",
				"Nupiacheh",
				"Dihewsonj",
				"Rudrailhik",
				"Tweretnort",
				"Snatreetze",
				"Iwunddaracos",
				"Digarlewena",
				"Erquagsta",
				"Logovoloin",
				"Boyaghosganh",
				"Kuolungau",
				"Pehneldept",
				"Yevettiiqidcon",
				"Sahliacabru",
				"Noggalterpor",
				"Chmageaki",
				"Veticueca",
				"Vittesbursul",
				"Nootanore",
				"Innebdjerah",
				"Kisvarcini",
				"Cuzcogipper",
				"Pamanhermonsu",
				"Brotoghek",
				"Mibittara",
				"Huruahili",
				"Raldwicarn",
				"Ezdartlic",
				"Badesclema",
				"Isenkeyan",
				"Iadoitesu",
				"Yagrovoisi",
				"Ewcomechio",
				"Inunnunnoda",
				"Dischiutun",
				"Yuwarugha",
				"Ialmendra",
				"Reponudrle",
				"Rinjanagrbo",
				"Zeziceloh",
				"Oeileutasc",
				"Zicniijinis",
				"Dugnowarilda",
				"Neuxoisan",
				"Ilmenhorn",
				"Rukwatsuku",
				"Nepitzaspru",
				"Chcehoemig",
				"Haffneyrin",
				"Uliciawai",
				"Tuhgrespod",
				"Iousongola",
				"Odyalutai",
				"Yilsrussimil",
				"Tuychelisaor",
				"Rivskimbe",
				"Daksanquix",
				"Kissonlin",
				"Aediabiel",
				"Ulosaginyik",
				"Roclaytonycar",
				"Kichiaroa",
				"Irceauffey",
				"Nudquathsenfe",
				"Getaizakaal",
				"Hansolmien",
				"Bloytisagra",
				"Ladsenlay",
				"Luyugoslasr",
				"Ubredhatk",
				"Cidoniana",
				"Jasinessa",
				"Torweierf",
				"Saffneckm",
				"Thnistner",
				"Dotusingg",
				"Luleukous",
				"Jelmandan",
				"Otimanaso",
				"Enjaxusanto",
				"Sezviktorew",
				"Zikehpm",
				"Bephembah",
				"Broomerrai",
				"Meximicka",
				"Venessika",
				"Gaiteseling",
				"Zosakasiro",
				"Drajayanes",
				"Ooibekuar",
				"Urckiansi",
				"Dozivadido",
				"Emiekereks",
				"Meykinunukur",
				"Kimycuristh",
				"Roansfien",
				"Isgarmeso",
				"Daitibeli",
				"Gucuttarik",
				"Enlaythie",
				"Drewweste",
				"Akbulkabi",
				"Homskiw",
				"Zavainlani",
				"Zalienkosm",
				"Ladgudiraf",
				"Mushonponte",
				"Amsentisz",
				"Fladiselm",
				"Laanawemb",
				"Ilkerloor",
				"Davanossi",
				"Ploehrliou",
				"Corpinyaya",
				"Leckandmeram",
				"Quulngais",
				"Nokokipsechl",
				"Rinblodesa",
				"Loydporpen",
				"Ibtrevskip",
				"Elkowaldb",
				"Heholhofsko",
				"Yebrilowisod",
				"Husalvangewi",
				"Ovna'uesed",
				"Bahibusey",
				"Nuybeliaure",
				"Doshawchuc",
				"Ruckinarkh",
				"Thorettac",
				"Nuponoparau",
				"Moglaschil",
				"Uiweupose",
				"Nasmilete",
				"Ekdaluskin",
				"Hakapanasy",
				"Dimonimba",
				"Cajaccari",
				"Olonerovo",
				"Umlanswick",
				"Henayliszm",
				"Utzenmate",
				"Umirpaiya",
				"Paholiang",
				"Iaereznika",
				"Yudukagath",
				"Boealalosnj",
				"Yaevarcko",
				"Coellosipp",
				"Wayndohalou",
				"Smoduraykl",
				"Apmaneessu",
				"Hicanpaav",
				"Akvasanta"
			]
		}
	},
	props: [
			'options',
			'name',
			'label',
			'search'
		],
		methods: {
			filterDropdown(e) {
				let filterInput = e.target.value;
				let allOptions = [...e.target.closest('.nms-select__options').querySelectorAll('.nms-select__option')];
				allOptions.forEach(option => {
					if(option.innerText.toLowerCase().indexOf(filterInput.toLowerCase()) < 0) {
						option.classList.add('hidden');
					} else {
						option.classList.remove('hidden');
					}
				})
			}
		},
		mounted() {
			let dropdownChildren = [...document.querySelectorAll('#' + this.name + ' .nms-select__option')];
			let customSelect = document.getElementById(this.name);
			let dropdownFilter = customSelect.querySelector('#dropdown-filter'); // Gotta select the dropdown filter to check it's length, otherwise we don't focus it.
			dropdownChildren.forEach(child => {
				child.addEventListener(this.clickEvent(), (e) => {
					let parent = e.target.closest('.nms-select'); // Find the parent since we will need it anyway later to remove dropdown active class
					let selected = parent.querySelector('.nms-selected span'); // Get the selected div so we can change its text
					let select = document.getElementById(this.name + '_select'); // Get the actual select dropdown
					let allOptions = select.options; // Grab all the options of the select
					this.selected = e.target.value;
					
					selected.innerText = e.target.innerText; // Set the text of our custom select
					allOptions[Number(e.target.getAttribute('data-option')) + 1].selected = true; // Set the selected item in the original select
					select.dispatchEvent(new Event('input', {'bubbles': true, 'cancelable': true})); // Dispatch an actual input event so v-model works properly
					parent.classList.remove('dropdown-active'); // Remove the dropdown class so it closes.
				})
			})
			customSelect.addEventListener(this.clickEvent(), (e) => {
				let allSelects = [...document.querySelectorAll('.nms-select')];

				for(let i=0;i<allSelects.length;i++) {
					if(allSelects[i] === e.target && !allSelects[i].classList.contains('dropdown-active')) {
						allSelects[i].classList.add('dropdown-active');
					} else if(e.target.tagName.toUpperCase() !== "INPUT") {
						allSelects[i].classList.remove('dropdown-active');
					}
				}
			})
		},
		computed: {
			getSelected() {
				return this.selected;
			}
		}
	}
</script>
<style scoped lang='scss'>

	.form-group {
		position: relative;
	}

	.hidden {
		display: none;
	}

	.nms-select {
		background-color: #FFF;
		height: 5rem;
		position: relative;
		display: inline-block;
		width: 100%;
		border-radius: .8rem;
		cursor:pointer;

		// selected option
		&ed {
			height: inherit;
			display: inline-flex;
			align-items: center;
			pointer-events: none;

			span {
				padding: .5rem 1rem;
			}
		}

		&__options {
			position: absolute;
			z-index: 10;
			top: 5rem;
			left: 0;
			width: 100%;
			background-color: #FFF;
			max-height: 0;
			overflow: hidden;
			transition: all .3s ease-in-out;
			border-radius: 0 0 .8rem .8rem;
			box-shadow: 0 3px 3px rgba(0, 0, 0, .5);

			#dropdown-filter {
				width: 97%;
				padding: 18px;
				margin: 0 auto;
				display: block;
				border: 1px solid #c9c9c9;
				box-sizing: border-box;
				margin-bottom: 1.5rem;
			}
		}

		.nms-select__option {
			padding: 1.5rem 1rem;
			border-bottom: 1px solid #e9e9e9;
			cursor: pointer;
			transition: all .3s ease-in-out;

			&:nth-child(1) {
				border-top: 1px solid #e9e9e9;
			}

			&:hover {
				background-color: #c9c9c9;
			}
		}

		&:after {
			@include fa-icon('\f078', 1.6rem, $red);
			pointer-events: none;
			position: absolute;
			right: 1rem;
			top: 50%;
			transform: translateY(-50%);
			display: block;
			transition: all .3s ease-in-out;
		}
	}
	.dropdown-active {

		&.nms-select {
			border-radius: .8rem .8rem 0 0;
			box-shadow: 0 3px 3px rgba(0, 0, 0, .5);

			&:after {
				transform: translateY(-50%) rotate(180deg);
			}
		}

		.nms-select__options {
			max-height: 300px;
			
			&--wrapper {
				overflow: auto;
				 max-height: 230px;
			}
		}
	}

	label {
		margin-bottom: .5rem;
		display: block;
	}

	select {
		display: none;

		&:focus,
		&:active {
			outline: 0;
		}
	}

	select:-moz-focusring {
		color: transparent;
		text-shadow: 0 0 0 #000;
		/* your normal text color here */
	}

	select:-moz-focusring * {
		color: #000;
		/* your normal text color here */
		text-shadow: none;
	}
</style>