// get the input field in the base value






function triangleCalculateArea(){
    const triangleBaseField=document.getElementById('get-base')
    const triangleText=triangleBaseField.value
    const base=parseFloat(triangleText)
    console.log(base); 
    const triangleHightField=document.getElementById('get-hight')
    const triangleHight=triangleHightField.value 
    const height=parseFloat(triangleHight)
    console.log(height);

    //calculate the area of the calculation section
    const area=0.5*base*height
    console.log(area);
    const triangleCalculationDisplay=document.getElementById('triangle-area')
    triangleCalculationDisplay.innerText=area

}