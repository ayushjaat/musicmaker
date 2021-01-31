window.addEventListener("load", ()=>{
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual")
  const color = [
    "#60d394",
    "red",
    "teal",
    "sandybrown",
    "fuchsia",
    "chartreuse"
    ];
 // console.log(sounds)
  
  // going with the sound
  
  pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      
      createBubbles(index);
    })
  })
  
  
  //create function which makes bubbles
  
  const createBubbles = (index)=>{
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[index];
    bubble.style.animation = "jump 1s ease";
    visual.addEventListener("animationstop", function(){
      visual.removeChild(this);
    })
  }
})
