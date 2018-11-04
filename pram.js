/*
 * Pram.js
 * Version: 1

 * Sam Barnard
 * © 2018
*/

var pram = {
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

	// Intended active usage
	queries: function() {
		return window.location.search;
	},
	get: function(t) {
		let search_split = this.queries().split(/[?&]/).filter(e => e !== '');
		search_split.forEach(function(item, key) {
			search_split[key] = {
				text: item.split('=')[0],
				value: item.split('=')[1],
			};
		});
		if (t === undefined){
			return search_split;
		}else{
			return search_split.find(e => e.text === t).value;
		}
	},
	add: function(t, v) {
		let params = this.get();
		params.push({text: t, value: v});
		this.set(this.construct_string(params));
	},
	remove: function(t) {
		let params = this.get();
		params = params.filter(e => e.text !== t);
		this.set(this.construct_string(params));
	},
	modify: function(t, v) {
		let clean_parameters = this.get();
		clean_parameters.forEach(function(item, key) {
			if (item.text === t){
				clean_parameters[key].value = v;
			}
		});
		this.set(this.construct_string(clean_parameters));
	},
};