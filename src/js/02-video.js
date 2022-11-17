import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const VIDEO_KEY = 'videoplayer-current-time';

var throttle = require('lodash.throttle');

function onPlay(data) {
  localStorage.setItem(VIDEO_KEY, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(VIDEO_KEY));
