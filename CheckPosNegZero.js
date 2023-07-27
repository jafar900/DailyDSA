//Program to Check if a number is Positive, Negative, or Zero


const checksign =(n)=>{

    if(n>0){
        console.log(`positive intiger`)
    }
    else if(n==0){
        console.log(`the value is zero`)
    }
    else{
        console.log(`negative value`)
    }

}

checksign(-7)

checksign(0)

checksign(7)