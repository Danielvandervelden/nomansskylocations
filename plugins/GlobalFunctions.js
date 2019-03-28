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
  }
})