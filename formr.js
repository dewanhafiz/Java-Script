var AddBtn=document.getElementById('Add');
AddBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue+secondNumberValue;
    document.getElementById('result').value=result;


};


var SubtractBtn=document.getElementById('Subtract');
SubtractBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue-secondNumberValue;
    document.getElementById('result').value=result;


};

var MultipleBtn=document.getElementById('Multiple');
MultipleBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue*secondNumberValue;
    document.getElementById('result').value=result;


};

var DivisionBtn=document.getElementById('Division');
DivisionBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue/secondNumberValue;
    document.getElementById('result').value=result;


};

var RemainderBtn=document.getElementById('Remainder');
RemainderBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue%secondNumberValue;
    document.getElementById('result').value=result;


};

/*var ResetBtn=document.getElementById('Reset');
ResetBtn.onclick = function (){


    var firstNumberValue=Number(document.getElementById('firstNumber').value);
    var secondNumberValue=Number(document.getElementById('secondNumber').value);
    var result=firstNumberValue%secondNumberValue;
    document.getElementById('result').value=result;


};*/


var btnElement = document.getElementById('btn');

btnElement.onclick=function () {

    var FirstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName=FirstNameValue+'  '+lastNameValue
    document.getElementById('fullName').value = fullName;


};
