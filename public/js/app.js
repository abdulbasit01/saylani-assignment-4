console.log('web started')
let main=document.getElementsByClassName('main-item')[0]
let popup=document.getElementsByClassName("popup")[0]
let audio=document.getElementsByTagName('audio')[0];
let inputEmail=document.getElementsByTagName('input-email')[0];
function popupDisappear(){
    main.classList.remove('main-box')
    popup.classList.remove("popupAdd");
    audio.play()
}
function popupApear(){
    audio.play()
    main.classList.add('main-box')
    popup.classList.add("popupAdd");
    body.style.filter=blur("50px")
    
}
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();