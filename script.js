let genartaBt = document.querySelector(".generate");
let autoBt = document.querySelector(".auto");
let stopBt = document.querySelector(".stop");
let quaotDiv = document.querySelector(".quaot-display");
let quaotId = document.querySelector(".quaot-id");
let qouteAuthor = document.querySelector(".author-name");
let autoStat = document.querySelector(".auto-stat");
let copyBt = document.querySelector(".copy-text");
let IterValid;



genartaBt.onclick =genartaquaot;
autoBt.onclick = autoPlayQuot;
stopBt.onclick = stopPlayAuto;
copyBt.onclick = copyText;

async function quaotGet(){
    const respon = await fetch ("quaots.json");
    const data = await respon.json()
    return data;

}


async function genartaquaot(){
    copyBt.innerHTML = `<span class="material-symbols-outlined">content_copy</span>copy</span>`;
    copyBt.disabled = false;
    const quotes = await quaotGet();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quaotDiv.innerHTML = quote.text;
    quaotId.innerHTML = quote.id;
    qouteAuthor.innerHTML= quote.author;
    
    
}

function autoPlayQuot(){
    IterValid =setInterval(genartaquaot ,5000);
    autoStat.innerHTML ="Auto: ON"
    autoBt.disabled = true;
    stopBt.disabled = false;
    
}
function stopPlayAuto (){
    clearInterval(IterValid);
    autoStat.innerHTML ="";
    stopBt.disabled= true;
    autoBt.disabled = false;
}


function copyText(){
    const textToCopy = quaotDiv.innerText;
    navigator.clipboard.writeText(textToCopy);
    copyBt.innerHTML = `<span class="material-symbols-outlined">check</span> <span>copied</span>`;
    copyBt.disabled = true;

}






