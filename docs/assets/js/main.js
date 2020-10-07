window.onload = function() {

	virastar = new Virastar({
		skip_markdown_ordered_lists_numbers_conversion: false,
		preserve_brackets: false,
		preserve_braces: false
	});

	var input = document.getElementById('textarea');
	var output = document.getElementById('plain');

	function viraiesh() {
		output.innerHTML = virastar.cleanup(input.value).replace(/\n/g, "</br>")
	}

	viraiesh();
	// document.getElementById('submit').onclick = viraiesh;
	input.onchange = viraiesh;
	input.onkeyup = viraiesh;


var clipboard = new ClipboardJS('.copy');
	clipboard.on('success', function(e) {
		//console.log(e);
	});

	clipboard.on('error', function(e) {
		//console.log(e);
	});

}
