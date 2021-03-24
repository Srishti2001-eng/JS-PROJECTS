window.addEventListener('keydown', function(e){

      
    var audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
   
    var key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)

    if (!audio){
      return 
    }
    audio.currentTime = 0 
    audio.play()
    key.classList.add('playing')
    
  })

  var removeTransition = function(e){
    if (e.propertyName !== 'transform')
      return
    this.classList.remove('playing')
  }

  
  var keys = document.querySelectorAll('.key')
  console.log(keys)
  keys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition)
  })

  