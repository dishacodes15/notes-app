const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    }
)

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

const toggleThemeBtn = document.querySelectorAll(".btn")[1]; 
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    
    if(body.classList.contains("dark-theme")){
        toggleThemeBtn.querySelector("img").src = "images/sun.png";
    }
    else{
        toggleThemeBtn.querySelector("img").src = "images/moon.png";
    }
});
