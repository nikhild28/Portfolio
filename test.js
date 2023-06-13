

var longestCommonPrefix = function(strs) {
    for(let i=0; i<strs.length; i++){
        
        if(strs[i].slice(0,2)===strs[i+1].slice(0,2)){
            console.log("Matched");
        }else{
            console.log("Not mtched");
        }
    }
};

strs = ["egg","dgg","dgsg"]
console.log(longestCommonPrefix(strs));