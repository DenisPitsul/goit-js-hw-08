import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle((data) => {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds.toString());
}, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || "0");
