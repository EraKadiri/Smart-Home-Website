function isPrime(number){
    if(number==1){
        return 0;
    }
    if(number==2){
        return 1;
    }
    if(number>1){
        let isPrime=true;
        for(let i=2;i<number; i++){
            if(number%i==0){
                isPrime=false;
                break;
            }
        }
        return isPrime ? 1: -1;
    }
    return -1;
}
function findPrimes(value){
    
       
        setTimeout(() =>{
            const primes=[];
            for(let i=2;i<=value;i++){
                if(isPrime(i)==1){
                    primes.push(i);
                }
            }
            
            self.postMessage(primes.length);
            
        }, 500);
    
}

self.onmessage =function(message){
    findPrimes(message.data);

}