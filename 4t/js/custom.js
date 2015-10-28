$(function(){
	$('#superContainer').fullpage({
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['landing page', 'bypass', 'the mark','collections'],
		showActiveTooltip: true,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.bypass').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.the-mark').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.collections').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.bypass').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.the-mark').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.collections').find('p').fadeOut(2000);
			}
		}
	});
});
