// var menuIcon = document.querySelector(".menu-icon");
// var sideBar = document.querySelector(".sidebar");
// var mainBody = document.querySelector(".container")
// var moreBtn = document.querySelector(".show-more-btn")
// var lessBtn = document.querySelector(".show-less-btn")
// var addShowmore = document.querySelector(".showMore-div")

// menuIcon.addEventListener("click" , function(){
//     sideBar.classList.toggle("show-sidebar");
//     mainBody.classList.toggle("show-container")
  
// })

// moreBtn.addEventListener("click",function(){
//     addShowmore.classList.toggle("add-showMore")
// })
// lessBtn.addEventListener("click",function(){
//     addShowmore.classList.remove("add-showMore")
// })

var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var mainBody = document.querySelector(".container")
var moreBtn = document.querySelector(".show-more-btn")
var lessBtn = document.querySelector(".show-less-btn")
var addShowmore = document.querySelector(".showMore-div")



menuIcon.addEventListener("click" , function(){
    sideBar.classList.toggle("show-sidebar");
    mainBody.classList.toggle("show-container")
    
})

moreBtn.addEventListener("click",function(){
    addShowmore.classList.toggle("add-showMore")
})
lessBtn.addEventListener("click",function(){
    addShowmore.classList.remove("add-showMore")
})

   
