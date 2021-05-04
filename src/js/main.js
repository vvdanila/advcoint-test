"use strict";

import './store/store';
import 'alpinejs';
import { env } from './libs/utils/constants';
import { initPageLoader } from './libs/components/pageloader';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initApp } from './libs/app/app';
const feather = require('feather-icons');

window.initApp = initApp;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}

