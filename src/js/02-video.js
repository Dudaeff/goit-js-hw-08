import Player from '@vimeo/player';
import { save, load } from './storage';

const iframeRef = document.querySelector(['#vimeo-player']);
const player = new Player(iframeRef);
const currentTime = load("videoplayer-current-time");
const throttle = require('lodash.throttle');

player.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.error('the time was less than 0 or greater than the video’s duration');
            break;
    }
});

player.on('timeupdate', throttle(saveCurrentTimeToStorage, 1000));

function saveCurrentTimeToStorage(data) {
    save("videoplayer-current-time", data.seconds);
    console.log(data.seconds);
};