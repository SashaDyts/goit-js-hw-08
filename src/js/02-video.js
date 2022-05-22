import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onClick, 1000));

function onClick(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
