"use strict";

const introPages = [ 'intro1', 'intro2', 'intro3' ];
var introCurrentPage = 0;

function introSetup() {
    introCurrentPage = 0;
    introSetupPages();
    sceneFadeInit(introFadeIn);
}

function introCurrent() {
    return document.getElementById(introPages[introCurrentPage]);
}

function introSetupPages() {
    introPages.forEach(introHidePage);
    introCurrent().classList.remove('hidden');
}

function introHidePage(page) {
    var elem = document.getElementById(page);
    elem.classList.add('hidden');
    elem.style.opacity = '0';
}

function introFadeIn(step) {
    introCurrent().style.opacity = step / 10;
    if (step < 10) {
        return true;
    }

    sleep(5).then(() => {
        sceneFadeInit(introFadeOut);
    });
    return false;
}

function introFadeOut(step) {
    introCurrent().style.opacity = (10 - step) / 10;
    if (step < 10) {
        return true;
    }

    introCurrentPage++;
    if (introCurrentPage >= introPages.length) {
        introCurrentPage = 0;
    }

    introSetupPages();
    sceneFadeInit(introFadeIn);
    return true;
}