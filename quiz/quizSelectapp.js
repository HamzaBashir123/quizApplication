


const nextQuestionClass = document.querySelector('.nextQuestionClass')
const answer = document.getElementsByName('answer')
const option3 = document.getElementsByName('option3')



let setValue;



function nextQuestion(){
    
    for (let i = 0; i < answer.length; i++) {
        if(answer[i].checked){
            console.log(answer[i].value)
            const userAnswer = document.querySelector(`.option${answer[i].value}`)
            console.log(userAnswer.innerHTML)
            setValue = userAnswer.innerHTML
            
            window.location.href = "./index.html";

            
            
          
        }
        
        
    }
   
    
    
    
    
   
    nextQuestionClass.disabled = true;
    nextQuestionClass.style.opacity = 0.7;
    nextQuestionClass.style.cursor = 'default';


}
function enableBtn(){
    nextQuestionClass.disabled = false;
    nextQuestionClass.style.opacity = 1;
    nextQuestionClass.style.cursor = 'pointer';

}


export {setValue};