const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
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
  plugins: [
	{ src: '~plugins/GlobalComponents.js' },
	{ src: '~plugins/GlobalFunctions.js' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
	'@nuxtjs/pwa',
	'@nuxtjs/style-resources',
	'cookie-universal-nuxt'
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
	widthCredentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },

  env: {
	firebaseApiKey: 'AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}