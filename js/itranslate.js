$( document ).ready(function() {
	$(".languages").niceScroll({
		cursorcolor: '#666',
		cursorborder: false,
		railoffset: '5px'
	});
	$('#language-btn').click(function() {
		$(".languages").toggleClass( 'active' );
	});
	$('#language-btn2').click(function() {
		$(".languages").toggleClass( 'active' );
	});
	$('.languages ol li a').click(function() {
		$(".languages").toggleClass( 'active' );
	});
	
	function triggerHtmlEvent(element, eventName) {
		var event;
		if(document.createEvent) {
			event = document.createEvent('HTMLEvents');
			event.initEvent(eventName, true, true);
			element.dispatchEvent(event);
		}
		else {
			event = document.createEventObject();
			event.eventType = eventName;
			element.fireEvent('on' + event.eventType, event);
		}
	}
					
	$('.translation-links a').click(function(e) {
		e.preventDefault();
		var lang = $(this).data('lang');
		$('#google_translate_element select option').each(function(){
			if($(this).val().indexOf(lang) > -1) {
				$(this).parent().val($(this).val());
				var container = document.getElementById('google_translate_element');
				var select = container.getElementsByTagName('select')[0];
				triggerHtmlEvent(select, 'change');
			}
		});
	});
	
	$('.translation-links a').click(function() {
		var lang = $(this).data('country');
		$('#language-btn2').css('background','url(images/'+lang+'.png) no-repeat center');
	});
});