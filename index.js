const inputbtnel=document.getElementById("input-btn")
let myleads=[]
let listitems=""
const inputel=document.getElementById("input")
const leadslistel=document.getElementById("leads-list")
let oldleads=JSON.parse(localStorage.getItem("myleads"))
let deletebtn=document.getElementById("delete")
const tabtnel=document.getElementById("tabtn")
if(oldleads){
    myleads=oldleads
    render(myleads)
}
function render(leads){
   // listitems="<li>" + inputel.value + "</li>"
    
    //leadslistel.innerHTML +=listitems
    let listitems=""
    for(let i=0;i<leads.length;i++){
        listitems += `<li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    leadslistel.innerHTML =listitems
}




inputbtnel.addEventListener("click",function(){

        myleads.push(inputel.value)
        inputel.value=""
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
        let leadsfromlocalStorage=JSON.parse(localStorage.getItem("myleads"))
        if(leadsfromlocalStorage){
            myleads=leadsfromlocalStorage
            render(myleads)
        }
})


deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render(myleads)
})
tabtnel.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
})})
   
