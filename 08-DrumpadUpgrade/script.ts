window.addEventListener("load", function () {

    let path: string = "assets/L07_task_material_assets_";
    let name: string [] = ["kick", "snare", "hihat", "A", "C", "F", "G", "laugh-1", "laugh-2"];
    let type: string = ".mp3";

    let samples: HTMLAudioElement[] = [new Audio(path + name[0] + type), new Audio(path + name[1] + type), new Audio(path + name[2] + type), new Audio(path + name[3] + type), new Audio(path + name[4] + type), new Audio(path + name[5] + type), new Audio(path + name[6] + type), new Audio(path + name[7] + type), new Audio(path + name[8] + type)]; 

    document.querySelector("#kick").addEventListener("click", function () { playSample(samples[0]); });
    document.querySelector("#snare").addEventListener("click", function () { playSample(samples[1]); });
    document.querySelector("#hihat").addEventListener("click", function () { playSample(samples[2]); });
    document.querySelector("#A").addEventListener("click", function () { playSample(samples[3]); });
    document.querySelector("#C").addEventListener("click", function () { playSample(samples[4]); });
    document.querySelector("#F").addEventListener("click", function () { playSample(samples[5]); });
    document.querySelector("#G").addEventListener("click", function () { playSample(samples[6]); });
    document.querySelector("#laugh1").addEventListener("click", function () { playSample(samples[7]); });
    document.querySelector("#laugh2").addEventListener("click", function () { playSample(samples[8]); });

    document.addEventListener("keydown", function(event) {
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
    
    function playSample (sample: HTMLAudioElement = new Audio) {
        sample.play();  
    }

    let sampleKick: HTMLAudioElement = samples[0];
    let sampleSnare: HTMLAudioElement = samples[1];
    let sampleHihat: HTMLAudioElement = samples[2];

    let aKick:  number[] = [1, 0, 0, 1, 0, 1 ,0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    let aSnare: number[] = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
    let aHihat: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    let index: number = 0;

    document.querySelector("#play").addEventListener("click", function () { setInterval(drumMachine, 270); });

    function drumMachine () {
        if (aKick[index] == 1) sampleKick.play();
        if (aSnare[index] == 1) sampleSnare.play();
        if (aHihat[index] == 1) sampleHihat.play();
        index += 1;
        if (index > 15) index = 0;
    };

});