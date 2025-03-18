/* Typing effect */
let div = document.getElementById('text3');
let text = "A front-end web developer with a passion for building visually stunning and user-friendly websites.With a strong foundation in HTML, CSS and JS, I'm excited to bring my skills to a dynamic team and contribute to innovative projects."

let typing = (div,text,i=0)=>{ //i=0 default argument

    if(text[i]=='.'){ //applying a line break after a fullstop else, rendering the same chacter
        div.innerHTML += '.'+'<br>';
    }else{
        div.innerHTML += text[i];
    }

    i += 1; // accessing second character if exists, i can't put this below if condition as i need to check if that exists or not, if not then i need to quit right , if i place it below one undefined statement would get printed
    if(i>text.length-1){
        return; // exits the entire typing function when true (undefined undefined aayerathiyo so)
    }
    //typing(div,text,i); //recursive function

    //nice but now i need to print the next letter after 2sec i.e. call the typing function only after 2 sec
    setTimeout(()=>{
        // ()=>{
        //     typing(div,text,i); // this wasn't executed as inner function was anonymous and not IIFE, see we can't palce this as outer function as the outer function would get immediately called but we can use this function call in the inner function we don't need to wrap it as we want it to get executed as soon as the outer function gets executed when the setTImeOut timer ends
        // }
        typing(div,text,i);
    },45) //now everytime this would run after 2 sec for every recursive funciton call

}

setTimeout(()=>{
    typing(div,text);
},2500);



/* 🔴Tracking the cursor movement */
/* let desktop = document.getElementById('entireViewPort');
let mouseCircle = document.getElementById('mouseCircle');
// console.log(desktop);
 
// desktop.addEventListener("dblclick",()=>{   //use events like dblclick, mousemove, click here 
//     console.log("Click performed");
// });

desktop.addEventListener("mousemove",(eventObj)=>{   //This show the returned object that is returned by mousemove, when the mouse moves on the desktop //you should be able to see the coordinates
    //console.log(eventObj);
    //let's set the x and y displacement of the mouse to the div
    console.log(eventObj.x);
    console.log(eventObj.y);
    mouseCircle.style.left = eventObj.x-9 + 'px';
    mouseCircle.style.top = eventObj.y-9 + 'px';

});
 */



window.addEventListener('load', function () {
  var scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
    window.scrollTo(0, scrollPosition);
    sessionStorage.removeItem('scrollPosition'); // Clear the stored scroll position
  }
});
