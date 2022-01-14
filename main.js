var worker;
function findPercentage(value1, value2){
    document.getElementById('percentage_result').innerText=(value1 / value2)*100 + "%";
}

function postMessageToWorker(value){
    if(value && value>0){
  
    if(worker){
        document.getElementById('prime-numbers-result').innerHTML="<h2 style='color:red'>Processing.Please wait!</h2>";
        document.getElementById('find-primes').disabled=true;
        //post message
        worker.postMessage(value);
    } else{
        alert("Web Workers are not supoorted. Please try a new browser!");
    }
}else{
    alert("Please provide a valid number.");
}

}


function start(){
if(window.Worker){
    worker= new Worker("primes.js");// to run this script in the background
    worker.addEventListener("message", (message)=> {
        document.getElementById('find-primes').disabled=false;
            document.getElementById('prime-numbers-result').innerHTML=message.data;

    } );

}
}
start();
