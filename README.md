# How this app was built, note for myself.
Allrighty, figuring this out the first time was a bitch. Here's things you need to do:

## Configuration of Babel 7 inside Nuxt 2.4+
1. After creating a fresh project, we need Babel. The newest babel is currently Babel 7 and in order to transpile/polyfill everything correctly we need a few things:
   
`npm install --save ` the following packages:
`"@babel/preset-env"`
`"@babel/runtime"`

Then use the development flag and install the following ones:
`"@babel/plugin-syntax-dynamic-import"`
`"@babel/plugin-transform-runtime"`
`"extract-text-webpack-plugin"`

Now that that's all done, here's an example of a babel object that you'd need inside of your `build` config in `nuxt.config.js`:

<pre>
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
</pre>

That'll set everything up beautifully in order for babel to transpile everything correctly.

## Use of firebase
Create a `firebase.js` file somewhere in your plugins folder and include that in your `nuxt.config.js`.

Here's an example of a `firebase.js` config file:

<pre>
import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""	
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({})
}

const fireDb = firebase.firestore()

export {fireDb}
</pre>

And everything should work beautifully.