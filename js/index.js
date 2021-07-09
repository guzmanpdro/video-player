const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progressVideo = document.querySelector('#progressVideo')

$video.addEventListener('loadedmetadata', () => $progressVideo.max = $video.duration)
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', () => $video.currentTime -= 10)
$forward.addEventListener('click', () => $video.currentTime += 10)
$progressVideo.addEventListener('input', () => $video.currentTime = $progressVideo.value)
        
function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    $video.addEventListener('timeupdate', () => {
        $progressVideo.value = $video.currentTime
        if ($progressVideo.max == $video.currentTime) {
            $pause.hidden = true
            $play.hidden = false
        }
    })
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
}

// function handleTimeUpdate()

// $progressVideo.value = $progressVideo.max ? console.log('Si')
//                                           : console.log('No')