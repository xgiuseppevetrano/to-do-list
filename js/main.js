const addMsg = document.querySelector("#addmsg");
const textArea = document.querySelector("#msgInput")
const deleteMsg = document.querySelector("#deletemsg")
let msg = ""
const tplBlock = document.querySelector("#tpl-block").content;
const containerHTML = document.querySelector(".container")
let counterPost = 0;

addMsg.addEventListener("click", function(){
    msg = textArea.value;
    if(msg !==""){
        counterPost++
        textArea.value = "";
        console.log(msg)
        let block = tplBlock.cloneNode(true)
        let msgDisplay = block.querySelector(".msg")
        msgDisplay.innerHTML = msg;
        block.querySelector("#check").addEventListener("click", function(){
            if(this.classList.contains("btn--green")){
                this.classList.remove("btn--green")
                msgDisplay.classList.remove("text-deco")
            } else {
                this.classList.add("btn--green")
                msgDisplay.classList.add("text-deco")
            }
        })
        block.querySelector("#deleteDiv").addEventListener("click", function(){
            this.parentNode.remove()
        })
    
        containerHTML.append(block)
    }
   
})

deleteMsg.addEventListener("click", ()=> textArea.value = "")




