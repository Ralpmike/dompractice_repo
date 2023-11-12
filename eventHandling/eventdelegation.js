
let div = document.querySelector("div");

// let butn = document.querySelectorAll("button")
function changeEach(){
  div.addEventListener("click", (event) => {
    // console.log(event.target)
    if(event.target.innerText ==="1"){
      event.target.style.backgroundColor = "green"
    }else if(event.target.innerText === "2"){
      event.target.style.backgroundColor = "pink";
    }else if(event.target.innerText ==="3"){
      event.target.style.backgroundColor = "purple"
    }else{
      event.target.style.backgroundColor = "white"
      event.target.style.color = "blue"
    }
    div.style.backgroundColor = "orange"
  })
}
changeEach()


function changeBg(){
  let child = div.children;
  let arr = Array.from(child);
  console.log(arr)

  setTimeout(function result(){
    for(let i = 0; i < arr.length; i++){
      arr[i].style.backgroundColor = "red";
    }
  }, 3000)
  
}
changeBg()




