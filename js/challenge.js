//1. grab the elements 
const counterThingy = document.querySelector("#counter")
const minusButtonThingy = document.querySelector("#minus")
const plusButtonThingy = document.querySelector("#plus")
const heartButtonThingy = document.querySelector("#heart")
const pauseButtonThingy = document.querySelector("#pause")
const likesForHeart = document.querySelector(".likes")

//2. declare counter
let counter = 0

//3. automatically update counter 
setInterval(function(){
    // counter++;
    counterThingy.innerText=++counter;
},1000)

//4. adding event listeners to minus button thingy
minusButtonThingy.addEventListener("click", function(){
    counterThingy.innerHTML= --counter;
    console.log(minusButtonThingy)
})

//5. Adding event listeners to plus button thingy 
plusButtonThingy.addEventListener("click", function(){
    counterThingy.innerHTML= ++counter;
    console.log(plusButtonThingy)
})

//6. Heart button thingy 
heartButtonThingy.addEventListener("click", function(){
    //a) Need to click this button and see it on the DOM
    console.log(heartButtonThingy)
    //b) Need to create an itemized list with a message everytime this button is clicked. 
    //let's do it a bit differently. Insteaf of creating the "li" elements and then setting
    //inner text, let's just type it out using innerHTML. 
    //c. This itemized list needs to contain a counter so that it can tell
    //the button was clicked on the specific timestamp of the counter
    let likes = 0
    likes++
    const counterTimeHeart = counterThingy.innerText
    likesForHeart.innerHTML += `<li> ${counterTimeHeart} has been liked <span>${likes}</span> time </li>`
    //How do i increment the values within the span tags?? 
    likesForHeart.append(li)
    
    
})


// . Pause button. How to stop execution?
function pauseButton(){
    pauseButtonThingy.pause();
}

//Adding event listeners to pause button
pauseButtonThingy.addEventListener("click", function(){
    pauseButtonThingy.pause();
    console.log(pauseButtonThingy);
})
