window.addEventListener("load", function () {
    var path = "assets/L07_task_material_assets_";
    var name = ["kick", "snare", "hihat", "E", "G", "C", "D", "laugh-1", "laugh-2"];
    var type = ".mp3";
    var samples = [new Audio(path + name[0] + type), new Audio(path + name[1] + type), new Audio(path + name[2] + type), new Audio(path + name[3] + type), new Audio(path + name[4] + type), new Audio(path + name[5] + type), new Audio(path + name[6] + type), new Audio(path + name[7] + type), new Audio(path + name[8] + type)];
    var beat1 = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    var beat2 = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
    var beat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    var beat1Sample = 0;
    var beat2Sample = 1;
    var beat3Sample = 2;
    var playPauseButton = document.querySelector("#playPause");
    var stopButton = document.querySelector("#stop");
    var deleteButton = document.querySelector("#delete");
    var remixButton = document.querySelector("#remix");
    var resetButton = document.querySelector("#reset");
    var interval;
    var indexBeat = 0;
    document.querySelector("#kick").addEventListener("click", function () { playSample(samples[0]); });
    document.querySelector("#snare").addEventListener("click", function () { playSample(samples[1]); });
    document.querySelector("#hihat").addEventListener("click", function () { playSample(samples[2]); });
    document.querySelector("#E").addEventListener("click", function () { playSample(samples[3]); });
    document.querySelector("#G").addEventListener("click", function () { playSample(samples[4]); });
    document.querySelector("#C").addEventListener("click", function () { playSample(samples[5]); });
    document.querySelector("#D").addEventListener("click", function () { playSample(samples[6]); });
    document.querySelector("#laugh1").addEventListener("click", function () { playSample(samples[7]); });
    document.querySelector("#laugh2").addEventListener("click", function () { playSample(samples[8]); });
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 49) {
            playSample(samples[0]);
        }
        else if (event.keyCode == 50) {
            playSample(samples[1]);
        }
        else if (event.keyCode == 51) {
            playSample(samples[2]);
        }
        else if (event.keyCode == 52) {
            playSample(samples[3]);
        }
        else if (event.keyCode == 53) {
            playSample(samples[4]);
        }
        else if (event.keyCode == 54) {
            playSample(samples[5]);
        }
        else if (event.keyCode == 55) {
            playSample(samples[6]);
        }
        else if (event.keyCode == 56) {
            playSample(samples[7]);
        }
        else if (event.keyCode == 57) {
            playSample(samples[8]);
        }
    });
    playPauseButton.addEventListener("click", function () { playPauseBeat(); });
    stopButton.addEventListener("click", function () { stopBeat(); });
    deleteButton.addEventListener("click", function () { deleteBeat(); });
    resetButton.addEventListener("click", function () { resetBeat(); });
    remixButton.addEventListener("click", function () { remixBeat(); });
    function playPauseBeat() {
        if (playPauseButton.getAttribute("class") == "fas fa-play") {
            playPauseButton.setAttribute("class", "fas fa-pause");
            interval = setInterval(playBeatMachine, 250);
        }
        else {
            playPauseButton.setAttribute("class", "fas fa-play");
            clearInterval(interval);
        }
    }
    function stopBeat() {
        clearInterval(interval);
        indexBeat = 0;
        playPauseButton.setAttribute("class", "fas fa-play");
    }
    function deleteBeat() {
        for (var i = 0; i <= 15; i++) {
            beat1.pop();
            beat2.pop();
            beat3.pop();
        }
    }
    function resetBeat() {
        beat1 = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
        beat2 = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
        beat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        beat1Sample = 0;
        beat2Sample = 1;
        beat3Sample = 2;
        indexBeat = 0;
    }
    function remixBeat() {
        for (var i = 0; i <= 15; i++) {
            beat1.pop();
            beat2.pop();
            beat3.pop();
        }
        for (var i = 0; i <= 15; i++) {
            beat1.push(Math.round(Math.random()));
            beat2.push(Math.round(Math.random()));
            beat3.push(Math.round(Math.random()));
        }
        beat1Sample = Math.floor(Math.random() * (6 - 0 + 1));
        beat2Sample = Math.floor(Math.random() * (6 - 0 + 1));
        while (beat2Sample == beat1Sample) {
            beat2Sample = Math.floor(Math.random() * (6 - 0 + 1));
        }
        beat3Sample = Math.floor(Math.random() * (6 - 0 + 1));
        while (beat3Sample == beat1Sample || beat3Sample == beat2Sample) {
            beat3Sample = Math.floor(Math.random() * (6 - 0 + 1));
        }
        indexBeat = 0;
    }
    function playBeatMachine() {
        if (beat1[indexBeat] == 1)
            playSample(samples[beat1Sample]);
        if (beat2[indexBeat] == 1)
            playSample(samples[beat2Sample]);
        if (beat3[indexBeat] == 1)
            playSample(samples[beat3Sample]);
        indexBeat += 1;
        if (indexBeat > 15)
            indexBeat = 0;
    }
    function playSample(sample) {
        if (sample === void 0) { sample = new Audio; }
        sample.currentTime = 0;
        sample.play();
    }
});
//# sourceMappingURL=script.js.map