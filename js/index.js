var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '400',
		width: '100%',
		videoId: 'htW8O-85N60',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerReady(event) {
	loopStart();
	player.playVideo();
}
function loopStart() {
	player.seekTo(58);	// Start at 7 seconds
}
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
		setTimeout(loopStart, 3200); // After 5 seconds, restart the loop
	}
}