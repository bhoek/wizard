/**
 * 
 */

$(function() {
	$("#slider").slider({
		value : 100,
		min : 0,
		max : 500,
		step : 50,
		slide : function(event, ui) {
			$("#amount").val("$" + ui.value);
		}
	});
	$("#amount").val("$" + $("#slider").slider("value"));
});