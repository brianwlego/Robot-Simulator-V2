document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  //*Event listeners on keystrokes
  //*They add the arrow to the (ul)
  //Event listner on the move button
  //That executes the top move from the list
  const ulList = document.getElementById('moves-container')


  window.addEventListener('keydown', function(e){
    const newLi = document.createElement('li')
    if (e.keyCode == '38') {
      newLi.innerText = "up"
      ulList.appendChild(newLi)
    }
    else if (e.keyCode == '40') {
      newLi.innerText = "down"
      ulList.appendChild(newLi) 
    }
    else if (e.keyCode == '37') {
      newLi.innerText = "left"
      ulList.appendChild(newLi)
    }
    else if (e.keyCode == '39') {
      newLi.innerText = "right"
      ulList.appendChild(newLi)
    }
  })

  
  let moveButton = document.querySelector('#move-button')
  moveButton.addEventListener('click', function(e){
    const direction = document.querySelector('li')
    move(direction.innerText)
    direction.remove()
  })

  window.addEventListener('keydown', function(e){
    if (e.keyCode == 8){
      ulList.lastElementChild.remove()
    }
  })





})
