"use strict";

function LevelStartNotify(data) {
    $("#LevelStartNotification").SetHasClass("show", true);
    $("#LevelStartText").text = data.level_name;

    //$.Schedule(5, LevelStartNotifyClear);
}

function LevelStartNotifyClear() {
    $("#LevelStartNotification").SetHasClass("show", false);
}

(function () {
    GameEvents.Subscribe("level_start_notify", LevelStartNotify);
})();
