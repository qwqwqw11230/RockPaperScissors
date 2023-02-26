let startBtn = document.getElementById("start-button")
let containerEl = document.getElementById("container")
let popUpText = document.getElementById("pop-up-text")
let items = document.getElementById("image")


startBtn.addEventListener("click", function() {
    containerEl.innerHTML = 
    `
    <h1>WHAT YOU CHOOSE</h1>
    <div class = "items" id="items" >
    <img src="./imgs/rock.png" id="image" class="image rock" width="90px" height="100px">
    <img src="./imgs/paper.png" id="image"  class="image paper" width="90px" height="100px">
    <img src="./imgs/scissors.png" id="image"  class="image scissors" width="90px" height="100px">
    </div>
    <h1 id="pop-up-text" class="pop-up-text"> aboba</h1>
    `
})

