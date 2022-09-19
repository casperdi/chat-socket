let myPlayer = document.querySelector('.video-js');

console.log(myPlayer);

videojs(myPlayer, {
  controls: true,
  autoplay: false,
  muted: true,
  loop: true,
  fluid: true,
  preload: 'auto',
  aspectRatio: '16:9',
});
