//1. grab the elements 
const counterThingy = document.querySelector("#counter")
const minusButtonThingy = document.querySelector("#minus")
const plusButtonThingy = document.querySelector("#plus")
const heartButtonThingy = document.querySelector("#heart")
const pauseButtonThingy = document.querySelector("#pause")
const likesForHeart = document.querySelector(".likes")

//2. declare counter
let counter = parseInt(counterThingy.innerText)
let likes = 0

//3. automatically update counter 
const intervalTimer = setInterval(function(){
    counter+=1;
    counterThingy.innerText=counter,
    likes=0
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
heartButtonThingy.addEventListener("click", likeSomething)

function likeSomething(){
    //a) Need to click this button and see it on the DOM
    console.log(heartButtonThingy)
    //b) Need to create an itemized list with a message everytime this button is clicked. 
    //let's do it a bit differently. Insteaf of creating the "li" elements and then setting
    //inner text, let's just type it out using innerHTML. 
    //c. This itemized list needs to contain a counter so that it can tell
    //the button was clicked on the specific timestamp of the counter
    //let likes = 0
    if (likes ==0) {
    likes+=1
    const counterTimeHeart = counterThingy.innerText
    // likesForHeart.innerHTML += `<li> ${counterTimeHeart} has been liked <span>${likes}</span> time </li>`
    let newLike = document.createElement('li')
    newLike.innerText = `${counter} has been liked ${likes} times`
   //How do i combine them?????
    likesForHeart.append(newLike)     
    } else {
        likes+=1
        likesForHeart.lastChild.innerText = `${counter} has been liked ${likes} times`
    }
}


//7. Adding event listeners to pause button
pauseButtonThingy.addEventListener("click", function(e){
    console.log(pauseButtonThingy);
    if (e.target.innerText === "pause"){
        clearInterval(intervalTimer)
        e.target.innerText = "resume"
        plusButtonThingy.disabled = true
        minusButtonThingy.disabled = true
        heartButtonThingy.disabled = true
    } else {
        setInterval(function(){
            counterThingy.innerText=++counter;
        },1000)
        e.target.innerText = "pause"
        plusButtonThingy.disabled = false
        minusButtonThingy.disabled = false
        heartButtonThingy.disabled = false
    }
})

//8. Comment section 
//a) grab each element 
const commentContainer = document.querySelector("#comment-form")
const commentBox = document.querySelector("#comment-input")
const commentList = document.querySelector("#list")

//b) adding event listeners
commentContainer.addEventListener("submit", function(e){
    e.preventDefault()
    const eachComment = document.createElement('p')
    eachComment.innerText = commentBox.value
    commentList.appendChild(eachComment)
    e.target.reset()
})

