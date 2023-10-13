const buttons = document.querySelectorAll("button")
const audioUrl = "./sounds/"

const setupAudio = (soundFile) => {
  return new Audio (audioUrl + soundFile)
}

const sounds = {
  w: setupAudio('tom-1.mp3'),
  a: setupAudio('tom-2.mp3'),
  s: setupAudio('tom-3.mp3'),
  d: setupAudio('tom-4.mp3'),
  j: setupAudio('snare.mp3'),
  k: setupAudio('crash.mp3'),
  l: setupAudio('kick-bass.mp3'),
};

const buttonAnimation = (currentKey) => {
  const activeButton = document.querySelector("." + currentKey)
  // console.log(activeButton);

  if (activeButton) {
    activeButton.classList.add("pressed")

    setTimeout(() => {
      activeButton.classList.remove("pressed")
    }, 100);
  }
}

const handleClick = (event) => {
  const buttonInnerHtml = event.key;
  const sound = sounds[buttonInnerHtml]

  if (sound) {
    sound.play()
    buttonAnimation(buttonInnerHtml)
  } else {
    console.log(buttonInnerHtml)
  }
};

document.addEventListener('keyup', handleClick)

// const handleClick = (event) => {
//   const buttonInnerHtml = event.key;

//   switch (buttonInnerHtml) {
//     case "w":
//       let tom1 = new Audio(audioUrl + "tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       let tom2 = new Audio(audioUrl + "tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       let tom3 = new Audio(audioUrl + "tom-3.mp3");
//       tom3.play();
//       break;

//     case "d":
//       let tom4 = new Audio(audioUrl + "tom-4.mp3");
//       tom4.play();
//       break;

//     case "j":
//       let snare = new Audio(audioUrl + "snare.mp3");
//       snare.play();
//       break;

//     case "k":
//       let crash = new Audio(audioUrl + "crash.mp3");
//       crash.play();
//       break;

//     case "l":
//       let kick = new Audio(audioUrl + "kick-bass.mp3");
//       kick.play();
//       break;

//     default:
//       console.log(buttonInnerHtml);
//   }
// };
