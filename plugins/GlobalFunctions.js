import Vue from 'vue';

Vue.mixin({
  methods: {

	// METHOD FOR DISPLAYING A QUICK MESSAGE
    createMessage($message, $elementToAppendTo) {
	console.log($elementToAppendTo);
      let self = this;
      let wrapper = document.createElement('div');
      wrapper.classList.add('nms-message');
      wrapper.style.transition = 'all .3s ease-in-out';

      let message = document.createTextNode($message);

      wrapper.appendChild(message);

	  this.fadeIn(wrapper);
      $elementToAppendTo.appendChild(wrapper);
	  setTimeout(() => {self.fadeOut(wrapper)}, 5000);
    },

	// FADE IN AN ELEMENT
    fadeIn($el) {	
		$el.classList.add('fade-in');
	},

	// FADEOUT AN ELEMENT
	fadeOut($el) {	
		$el.classList.add('fade-out');
		$el.classList.remove('fade-in');
		setTimeout(() => {$el.parentNode.removeChild($el)}, 1000);
	},

	// SET A COOKIE
	setCookie(name, value, days) {
		if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		} else
		var expires = "";
		document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
	},

	// GET A COOKIE
	getCookie(name) {
		var nameEQ = name + "=",
		ca = document.cookie.split(';');

		for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return JSON.parse(c.substring(nameEQ.length, c.length));
		}
		return null;
	}
  }
})