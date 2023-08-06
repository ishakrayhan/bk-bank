



document.getElementById('deposit-btn').addEventListener('click',function(){
    // deposit field
const newInputField=document.getElementById('deposit-field')

const currentFieldString = newInputField.value;
const currentField=parseFloat(currentFieldString);

// deposit text
const inputText = document.getElementById('text-depsit')
const newTextString=inputText.innerText;
const newText= parseFloat(newTextString);


const total=currentField+newText
inputText.innerText=total;


//+total balance
const balance= document.getElementById('bl-total')
const BalanceString = balance.innerText;
const newBalance=parseFloat(BalanceString);
const totalBalance= newBalance+currentField;
balance.innerText = totalBalance; 







newInputField.value='';


})



                       // part 2



document.getElementById('input-withdraw').addEventListener('click',function(){
const inputWithdraw=document.getElementById('input-pass')
const inputSting=inputWithdraw.value;
const input2 = parseFloat(inputSting);
inputWithdraw.value='';
if(isNaN(input2)){
alert('please provide a valid number');
return;

}


const text=document.getElementById('text-withdraw')
const textString2=text.innerText;
const textnew=parseFloat(textString2);







const blTotal=document.getElementById('bl-total')
const blAmount= blTotal.innerText;
const amount =parseFloat(blAmount);



if(input2 >amount){
alert('not found');
return;
}
const totalText = textnew+input2;
text.innerText= totalText;;






const addAmount = amount -input2;
blTotal.innerText=addAmount;






})                                        