function buttonClicked(song, button, id){

    var audio = document.getElementById(song)
    var image = document.getElementsByClassName(button)[id-1]
    var playing = audio.getAttribute('playing')

    if (playing=='false') {
        audio.play()
        image.src = '/images/pause.png'
        audio.setAttribute('playing','true')
    } else if (audio.getAttribute('playing')=='true'){
        audio.pause();
        image.src = '/images/play.png'
        audio.setAttribute('playing','false')
    }
}

