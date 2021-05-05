window.addEventListener('load', function () {
    var path = 'assets/L07_task_material_assets_';
    var name = ['kick', 'snare', 'hihat', 'A', 'C', 'F', 'G', 'laugh-1', 'laugh-2'];
    var type = '';
    var samples = [new Audio('assets/L07_task_material_assets_kick.mp3'), new Audio('assets/L07_task_material_assets_snare.mp3'), new Audio('assets/L07_task_material_assets_hihat.mp3'), new Audio('assets/L07_task_material_assets_A.mp3'), new Audio('assets/L07_task_material_assets_C.mp3'), new Audio('assets/L07_task_material_assets_F.mp3'), new Audio('assets/L07_task_material_assets_G.mp3'), new Audio('assets/L07_task_material_assets_laugh-1.mp3'), new Audio('assets/L07_task_material_assets_laugh-2.mp3')];
    document.querySelector('#kick').addEventListener('click', function () { playSample(samples[0]); });
    document.querySelector('#snare').addEventListener('click', function () { playSample(samples[1]); });
    document.querySelector('#hihat').addEventListener('click', function () { playSample(samples[2]); });
    document.querySelector('#A').addEventListener('click', function () { playSample(samples[3]); });
    document.querySelector('#C').addEventListener('click', function () { playSample(samples[4]); });
    document.querySelector('#F').addEventListener('click', function () { playSample(samples[5]); });
    document.querySelector('#G').addEventListener('click', function () { playSample(samples[6]); });
    document.querySelector('#laugh1').addEventListener('click', function () { playSample(samples[7]); });
    document.querySelector('#laugh2').addEventListener('click', function () { playSample(samples[8]); });
    document.addEventListener('keydown', function (event) {
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
        ;
    });
    function playSample(sample) {
        if (sample === void 0) { sample = new Audio; }
        sample.play();
    }
    ;
    var sampleKick = new Audio('assets/L07_task_material_assets_kick.mp3');
    var sampleSnare = new Audio('assets/L07_task_material_assets_snare.mp3');
    var sampleHihat = new Audio('assets/L07_task_material_assets_hihat.mp3');
    var aKick = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
    var aSnare = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
    var aHihat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    var index = 0;
    document.querySelector('#play').addEventListener('click', function () { setInterval(drumMachine, 270); });
    function drumMachine() {
        if (aKick[index] == 1)
            sampleKick.play();
        if (aSnare[index] == 1)
            sampleSnare.play();
        if (aHihat[index] == 1)
            sampleHihat.play();
        index += 1;
        if (index > 15)
            index = 0;
    }
    ;
});
//# sourceMappingURL=script.js.map