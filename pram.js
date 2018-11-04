/*
 * Pram.js ©2018
 * Sam Barnard
 * © 2018
*/

var pram = {
	queries: function() {
		return window.location.search;
	},
	update: function(t, v) {
		window.location.search = this.modify(t, v, true);
	},
	set: function(param_string) {
		let url = location.protocol + '//' + location.host + location.pathname;
		url += param_string;
		window.history.replaceState(null, null, url);
	},
	construct_string: function(params) {
		// Expects array of objects
		let str = '';
		function create_parameter(k, t, v) {
			if (k === 0) {
				str += '?';
			}else{
				str += '&';
			}
			str += t + '=' + v;
		}
		if (Array.isArray(params)){
			params.forEach(function(item, key) {
				create_parameter(key, item.text, item.value);
			});
		}else{
			create_parameter(0, params.text, params.value)
		}
		return str;
	},
	get: function() {
		let search_split = this.queries().split(/[?&]/).filter(e => e !== '');
		search_split.forEach(function(item, key) {
			search_split[key] = {
				text: item.split('=')[0],
				value: item.split('=')[1],
			};
		});
		return search_split;
	},
	modify: function(t, v, update) {
		let clean_parameters = this.get();
		clean_parameters.forEach(function(item, key) {
			if (item.text === t){
				clean_parameters[key].value = v;
			}
		});
		this.set(this.construct_string(clean_parameters));
		if (update){
			return this.construct_string(clean_parameters);
		}
	},
};