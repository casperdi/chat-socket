let myPlayer = document.querySelector('.video-js');

console.log(myPlayer);

videojs(myPlayer, {
  controls: true,
  autoplay: false,
  muted: false,
  loop: true,
  fluid: false,
  liveui: true,
  responsive: true,
  preload: 'auto',
  aspectRatio: '16:9',
});
