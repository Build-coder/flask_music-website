function buttonClicked(song, button, id){

    var audio = document.getElementById(song)
    var image = document.getElementsByClassName(button)[id-1]
    var playing = audio.getAttribute('playing')

    if (playing=='false') {
        stopPlaying()
        audio.play()
        image.src = '/images/pause.png'
        audio.setAttribute('playing','true')

    } else {
        audio.pause();
        image.src = '/images/play.png'
        audio.setAttribute('playing','false')
        console.log('entered else-if')
    }
}

function stopPlaying(){
    var audioElements  = document.getElementsByTagName("audio");
    var buttons = document.getElementsByTagName("input");


    for (x of audioElements){
        x.pause()
        x.setAttribute('playing','false')
    }

    for (x of buttons){
        x.src = '/images/play.png'
    }
}
