window.onload = function() {
	document.querySelector('#close').onclick = function() {
		window.close();
	};
	var MyComponent = Vue.extend({
		template: '<div>A custom component!</div>'
	});
	Vue.component('my-component', MyComponent);
	new Vue({
		el: '#app'
	});
}
