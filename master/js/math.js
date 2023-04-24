const operator = [ ' + ', ' - ', ' * ']
const  start = document.getElementById('start')
const quse = document.getElementById('question')
const result = document.getElementById('result')
const submit = document.getElementById('submit')
const error = document.getElementById('error')
let t = document.getElementById('cn1')
let ansvalue
// let operatorqus;

let randomval= (min,max) => Math.floor(Math.random() * (max-min))+ min;
let randomop = operator[Math.floor(Math.random() * operator.length)]

 function START(){

     t.style.display="block"
     ansvalue=''
     error.style.display="none"


    //random number
    let [num1,num2] = [ randomval(1,20), randomval(1,20)]
    console.log(num1,num2);
    //random oprator
    let randomop = operator[Math.floor(Math.random() * operator.length)]
    
    //shart
    if(randomop == ' - ' && num2 > num1){
        [num1, num2] = [num2,num1]
    }

    // hameh 

    let solution = eval(` ${num1} ${randomop} ${num2}  `)

    let random22 = randomval(1,5)

    if( random22 == 1){
        ansvalue = num1
        quse.innerHTML = ` <input  id="inputvalue" placeholder="?" \>
        ${randomop} ${num2} = ${solution}`
    }
    else if(random22 == 2){
        ansvalue = num2
        quse.innerHTML = `${num1} ${randomop}  <input  id="inputvalue" placeholder="?" \>
         = ${solution}`

    }
 else{
    ansvalue = solution
    quse.innerHTML = `${num1}${randomop}  ${num2} =  <input  id="inputvalue" placeholder="?" \>
     `
}

}

function stop(){

    result.innerText="result"
    start.innerHTML="restart"
        error.style.display="none"
        let use = (document.getElementById("inputvalue").value)

       
    if(use){
        if(use == ansvalue){
            t.style.display="none"
           result.innerHTML=`your answer was  <span>Correct</span> 😍!`
        }

    else{
        t.style.display="none"
        result.innerHTML=`your answer was  <span>Incorrect</span> 🙁!`
    }

}
else{
    error.style.display="block"
    error.innerHTML = " input cannot be Empty "
}
}

        

