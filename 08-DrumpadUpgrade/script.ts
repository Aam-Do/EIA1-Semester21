window.addEventListener("load", function (): void {

    let path: string = "assets/L07_task_material_assets_";
    let name: string[] = ["kick", "snare", "hihat", "E", "G", "C", "D", "laugh-1", "laugh-2"];
    let type: string = ".mp3";

    let samples: HTMLAudioElement[] = [new Audio(path + name[0] + type), new Audio(path + name[1] + type), new Audio(path + name[2] + type), new Audio(path + name[3] + type), new Audio(path + name[4] + type), new Audio(path + name[5] + type), new Audio(path + name[6] + type), new Audio(path + name[7] + type), new Audio(path + name[8] + type)];

    let beat1: number[] = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    let beat2: number[] = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
    let beat3: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    let beat1Sample: number = 0;
    let beat2Sample: number = 1;
    let beat3Sample: number = 2;

    let playPauseButton: HTMLElement = document.querySelector("#playPause");
    let stopButton: HTMLElement = document.querySelector("#stop");
    let deleteButton: HTMLElement = document.querySelector("#delete");
    let remixButton: HTMLElement = document.querySelector("#remix");

    let interval: number;

    let indexBeat: number = 0;

    document.querySelector("#kick").addEventListener("click", function (): void { playSample(samples[0]); });
    document.querySelector("#snare").addEventListener("click", function (): void { playSample(samples[1]); });
    document.querySelector("#hihat").addEventListener("click", function (): void { playSample(samples[2]); });
    document.querySelector("#A").addEventListener("click", function (): void { playSample(samples[3]); });
    document.querySelector("#C").addEventListener("click", function (): void { playSample(samples[4]); });
    document.querySelector("#F").addEventListener("click", function (): void { playSample(samples[5]); });
    document.querySelector("#G").addEventListener("click", function (): void { playSample(samples[6]); });
    document.querySelector("#laugh1").addEventListener("click", function (): void { playSample(samples[7]); });
    document.querySelector("#laugh2").addEventListener("click", function (): void { playSample(samples[8]); });

    document.addEventListener("keydown", function (event: KeyboardEvent): void {
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

    playPauseButton.addEventListener("click", function (): void {

        if (playPauseButton.getAttribute("class") == "fas fa-play") {
            playPauseButton.setAttribute("class", "fas fa-pause");
            interval = setInterval(drumMachine, 250);
        }
        else {
            playPauseButton.setAttribute("class", "fas fa-play");
            clearInterval(interval);
        }
    });

    stopButton.addEventListener("click", function (): void {
        clearInterval(interval);
        indexBeat = 0;
        playPauseButton.setAttribute("class", "fas fa-play");
    });

    deleteButton.addEventListener("click", function (): void {
        for (let i: number = 0; i <= 15; i++) {
            beat1.pop();
            beat2.pop();
            beat3.pop();
        }
    });

    remixButton.addEventListener("click", function (): void {
        for (let i: number = 0; i <= 15; i++) {
            beat1.pop();
            beat2.pop();
            beat3.pop();
        }
        for (let i: number = 0; i <= 15; i++) {
            beat1.push(Math.round(Math.random()));
            beat2.push(Math.round(Math.random()));
            beat3.push(Math.round(Math.random()));
        }
        beat1Sample = Math.floor(Math.random() * (6 - 0 + 1));
        beat2Sample = Math.floor(Math.random() * (6 - 0 + 1));
        beat3Sample = Math.floor(Math.random() * (6 - 0 + 1));
    });

    function drumMachine(): void {
            if (beat1[indexBeat] == 1) playSample(samples[beat1Sample]);
            if (beat2[indexBeat] == 1) playSample(samples[beat2Sample]);
            if (beat3[indexBeat] == 1) playSample(samples[beat3Sample]);
            indexBeat += 1;
            if (indexBeat > 15) indexBeat = 0;
    }

    function playSample(sample: HTMLAudioElement = new Audio): void {
        sample.currentTime = 0;
        sample.play();
    }

});