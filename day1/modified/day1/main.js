function playsound (e){
    const audio = document.querySelector(`audio[data-input="${e.keyCode}"]`)

    const key = this.document.querySelector(`.key[data-input="${e.keyCode}"]`)
    
    if(!audio) return;


    
    
    audio.play()
    audio.currentTime = 0
  

    // console.log(key) 

    key.classList.add('playing')




   
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
    console.log(e.propertyName)
    
    
}


//reverse transition

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))




window.addEventListener('keydown', playsound)