"use strict";

var sceneIsFading = false;
var sceneFadeDelay = 0;
var sceneStep = 0;
var sceneFadeCallback = null;

function sceneFadeInit(callback) {
    sceneFadeDelay = 0;
    sceneStep = 0;
    sceneFadeCallback = callback;
    sceneIsFading = true;
}

function sceneFade() {
    if (!sceneIsFading) {
        return;
    }

    sceneFadeDelay++;
    if (sceneFadeDelay < 2) {
        return;
    }
    sceneFadeDelay = 0;

    sceneStep++;
    sceneIsFading = sceneFadeCallback(sceneStep);
}
