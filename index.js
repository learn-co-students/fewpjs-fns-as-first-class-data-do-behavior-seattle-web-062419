/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const num = parseInt(timeString.split('')[0]+timeString.split('')[1])
  if(num < 12) {
    return "Good Morning"
  }
  if(num > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}
