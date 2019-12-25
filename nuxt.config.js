const pkg = require('./package')
const fs = require('fs')

module.exports = {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: "No Man's Sky Database",
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'title',
				property: 'og:title',
				content: "No Man's Sky Database"
			},
			{
				name: 'description',
				property: 'og:description',
				content: "This is a Web Application written specifically to find multitools, ships and planets in the popular game No Man's Sky made by Hello Games"
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: "stylesheet",
				href: "https://use.fontawesome.com/releases/v5.7.1/css/all.css"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Work+Sans:300,900"
			},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},

	/*
	 ** Global CSS
	 */
	css: [
		"~assets/styles/_base.scss"
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [{
			src: '~plugins/GlobalComponents.js'
		},
		{
			src: '~plugins/GlobalFunctions.js'
		},
		{
			src: '~plugins/GlobalFilters.js'
		},
		{
			src: '~plugins/database/firebase.js'
		}
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
		'cookie-universal-nuxt',
		['@nuxtjs/google-analytics', {
			id: 'UA-147622979-1',
			dev: false
		}]
	],

	/*
	 ** Global SCSS loader
	 */
	styleResources: {
		scss: ['~assets/styles/_base.scss']
	},

	/*
	 ** Axios module configuration
	 */
	axios: {
		baseURL: "https://nomansskylocations-9e8b5.firebaseio.com/",
		widthCredentials: false,
	},

	/*
	 ** Build configuration
	 */
	build: {
		extractCSS: true,
		babel: {
			presets: [
				["@babel/preset-env", {
					useBuiltIns: 'usage',
					corejs: '3.0.0',
					targets: {
						ie: 11,
						browsers: 'last 2 versions'
					}
				}],
			],
			plugins: [
				["@babel/plugin-syntax-dynamic-import"],
				["@babel/plugin-transform-runtime", {
					"regenerator": true
				}]
			]
		},
	},

	transition: {
		name: 'fade',
		mode: 'out-in'
	},

	server: {
		port: 3000,
		host: process.env.NODE_ENV === 'production' ? 'nmsdatabase.com' : 'localhost',
		https: {
				key: process.env.NODE_ENV === 'production' ? fs.readFileSync('./privkey.pem') : null,
				cert: process.env.NODE_ENV === 'production' ? fs.readFileSync('./cert.pem') : null
		}
	}
}