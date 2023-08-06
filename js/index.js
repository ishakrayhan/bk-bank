


// document.getElementById('btn-submit').addEventListener('click',function(){
    document.getElementById('btn-submit').addEventListener('click',function(){
        const emailField= document.getElementById('input-field');
        const email= emailField.value;
    
    
        const passField= document.getElementById('input-pass');
        const password= passField.value;
        
        if(email === 'ishakrayhan7@gmail.com' && password === 'Qwe12345@'){
            window.location.href= 'bank.html';
        }
        else{
            alert('invalid user');
        }
    })
    