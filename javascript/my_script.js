jQuery(function() {

		// var myWidth = 0;
  //       myWidth = window.innerWidth;
  //       jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
  //       jQuery(window).resize(function(){
  //           var myWidth = 0;
  //           myWidth = window.innerWidth;
  //           jQuery('#size').remove();
  //           jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
  //       });

    jQuery( '#mi-slider' ).catslider();


    var handle = jQuery( ".ui-slider-handle .val-text" );

    jQuery( ".range" ).slider({
        min: 1,
        max: 30000,
        range: "max",
        create: function() {
            handle.text( jQuery( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
        }
    });

});