
// this event listner give us value of the whichever key is pressed

// window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode)
    
// })




function playsound(e){

    
        const audio = document.querySelector(`audio[data-input ="${e.keyCode}"]`);
    
        const key = this.document.querySelector(`.key[data-input="${e.keyCode}"]`)
    
        console.log(audio)
        if(!audio) return      // stop running function to run all together.
    
    
        audio.currentTime = 0   // rewind to the start and stop first playing whole sound
        audio.play()
    
        console.log(key)
    
    
    //      this is a js for swiching the css animation 
        key.classList.add('playing')
        // key.classList.toggle('playing')
        // key.classList.remove('playing')
    
        
    
}
//propertyName: 'transform',

function removeTransition(e){
    if(e.propertyName !== 'transform') return // skip it if it's  not a transform
    console.log(e.propertyName)
    this.classList.remove('playing')

}


// revers transition

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown',playsound);