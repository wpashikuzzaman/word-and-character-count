let text = document.getElementById('area');
let charCount = document.getElementById('char');
let wordCount = document.getElementById('word');

text.addEventListener('input', function(){
    //Charecture Counter
    let charLength= text.value.length;
    charCount.innerHTML = charLength;

    //Word Counter
    let getText = text.value;
    getText = getText.trim();
    let words = getText.split(" ");
    wordCount.innerHTML = words.length;
});


//Reset Button
clrbtn.addEventListener('click', function(){
    text.value = '';
    charCount.innerHTML = 0;
    wordCount.innerHTML = 0;

});


//Random Story Genaretor
// const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here making it look like readable English.';
let insertX = ['Willy the GoblinBig','DaddyFather','Christmas'];
let insertY = ['the White House','Disneyland','the soup kitchen'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
    story.style.border = '2px solid #FFD000'; // Fixed border property
    story.style.padding = '10px'; // Fixed padding property
    story.style.borderRadius ="0.5rem";
  }
  
  randomize.addEventListener('click', result);
  



//Time Counter
let timerInterval;
        let startTime;
        let running = false;

        const timerElement = document.getElementById('timer');
        const startButton = document.getElementById('area');
        const stopButton = document.getElementById('stpbtn');

        startButton.addEventListener('click', () => {
            if (!running) {
                startTime = Date.now();
                timerInterval = setInterval(updateTimer, 1000);
                running = true;
            }
        });

        stopButton.addEventListener('click', () => {
            if (running) {
                clearInterval(timerInterval);
                running = false;
            }
        });

        function updateTimer() {
            const currentTime = Date.now();
            const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
            const minutes = Math.floor(elapsedTimeInSeconds / 60);
            const seconds = elapsedTimeInSeconds % 60;

            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }


