"use strict";

ui.slipSamples = function( sample, mx ) {
	if ( sample.selected ) {
		ui.selectedSamples.forEach( function( s ) {
			s.slip( mx );
		});
	} else {
		sample.slip( mx );
	}
};
