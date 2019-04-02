import Vue from 'vue';

Vue.mixin({
	methods: {

		// METHOD FOR DISPLAYING A QUICK MESSAGE
		createMessage($message, $elementToAppendTo) {
			let self = this;
			let wrapper = document.createElement('div');
			wrapper.classList.add('nms-message');
			wrapper.style.transition = 'all .3s ease-in-out';

			let message = document.createTextNode($message);

			wrapper.appendChild(message);

			this.fadeIn(wrapper);
			$elementToAppendTo.appendChild(wrapper);
			setTimeout(() => {
				self.fadeOut(wrapper)
			}, 5000);
		},

		// FADE IN AN ELEMENT
		fadeIn($el) {
			$el.classList.add('fade-in');
		},

		// FADEOUT AN ELEMENT
		fadeOut($el) {
			$el.classList.add('fade-out');
			$el.classList.remove('fade-in');
			setTimeout(() => {
				$el.parentNode.removeChild($el)
			}, 1000);
		},

		// WHENEVER A CLICK EVENT OCCURS ANYWHERE, CALL THIS FUNCTION TO GET THE CORRECT ONE
		clickEvent() {
			return "ontouchstart" in document.documentElement ? "touchstart" : "click"
		},

		// BASICALLY FORM CHECKING FUNCTION
		evaluateInput($condition, $elementToScrollToAndAppendMessageTo, $message) {
			if($condition) {
				document.getElementById($elementToScrollToAndAppendMessageTo).scrollIntoView({behavior: 'smooth', block: 'center'});
				this.createMessage($message, document.getElementById($elementToScrollToAndAppendMessageTo));
				return false;
			} else {
				return true;
			}
		},

		// BODY LOADING ON OR OFF
		loading($status) {
			if($status) {
				document.querySelector('body').classList.add('loading');
			} else if(!$status) {
				document.querySelector('body').classList.remove('loading');
			} else {
				console.log("Pass a status you moron");
			}
		}
	}
})