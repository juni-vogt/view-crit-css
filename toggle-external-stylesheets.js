// Credit to gist.github.com/gauntface/0c9a02de2ea261aef0ec

if (styles === undefined) // cache styles
	var styles = document.querySelectorAll("link[rel='stylesheet']");


if (externalsDisabled === undefined) {
	var externalsDisabled = false;
} else {
	externalsDisabled = !externalsDisabled;
}

if (externalsDisabled) {
	for (var s = 0; s < styles.length; s++) {
		styles[s].media = styles[s].originalMedia; // use original "media" atribute
	}
} else {
	for (var s = 0; s < styles.length; s++) {

		var stylesheet = styles[s];

		if (stylesheet.media !== 'print') {
			if (stylesheet.originalMedia === undefined) // cached
				stylesheet.originalMedia = stylesheet.media;
			// save "media" attribute for toggling later

			stylesheet.media = 'only x';
			// disable the stylesheet
		}
	}
}
