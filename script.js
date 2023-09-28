window.onload=()=>{
    const button=document.querySelector('#btn');
    button.addEventListener('click',calculatebmi)
    
}

function calculatebmi()
{
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');


    if(!height|| height<0|| isNaN(height)){
        result.innerText="Please provide a valid height";
        return;
    }
    else if (!weight|| isNaN(weight) ||weight<0){
        result.innerText="Please provide a valid weight";
        return;
    }

    const bmi= (weight/((height*height)/10000)).toFixed(2);
    console.log(bmi);
    if(bmi<18.5)
    {
    result.innerText= `Under Weight: ${bmi}`;
    }
    else if(bmi>=18.5 && bmi<24.9){
        result.innerText= `Normal Weight: ${bmi}`;
    } else if(bmi>=25 && bmi<29.9){
        result.innerText= `Obesity (Class I): ${bmi}`;
    } else if(bmi>=30 && bmi<34.9){
        result.innerText= `Obesity (Class II): ${bmi}`;
    } else {
        result.innerText= `Extreme Obesity: ${bmi}`;
    }



}
    
