window.addEventListener('load', function () {

    var samples: HTMLAudioElement[] = [new Audio('assets/L07_task_material_assets_kick.mp3'), new Audio('assets/L07_task_material_assets_snare.mp3'), new Audio('assets/L07_task_material_assets_hihat.mp3'), new Audio('assets/L07_task_material_assets_A.mp3'), new Audio('assets/L07_task_material_assets_C.mp3'), new Audio('assets/L07_task_material_assets_F.mp3'), new Audio('assets/L07_task_material_assets_G.mp3'), new Audio('assets/L07_task_material_assets_laugh-1.mp3'), new Audio('assets/L07_task_material_assets_laugh-2.mp3')]; 

    document.querySelector('#kick').addEventListener('click', function () { playSample(samples[0]) });
    document.querySelector('#snare').addEventListener('click', function () { playSample(samples[1]) });
    document.querySelector('#hihat').addEventListener('click', function () { playSample(samples[2]) });
    document.querySelector('#A').addEventListener('click', function () { playSample(samples[3]) });
    document.querySelector('#C').addEventListener('click', function () { playSample(samples[4]) });
    document.querySelector('#F').addEventListener('click', function () { playSample(samples[5]) });
    document.querySelector('#G').addEventListener('click', function () { playSample(samples[6]) });
    document.querySelector('#laugh1').addEventListener('click', function () { playSample(samples[7]) });
    document.querySelector('#laugh2').addEventListener('click', function () { playSample(samples[8]) });
    
    function playSample (sample = new Audio) {
        sample.play();   
    };
});

/*

var audio = new Audio('audio_file.mp3');
audio.play(); 

*/