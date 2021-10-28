const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const mailMessage = document.getElementById("mail-message");
const nextButton = document.querySelector(".next-btn");



const mail = document.getElementById("email");
const messageText1 = document.getElementById("message1");
const messageText2 = document.getElementById("message2");
var counter1=0;
var counter2=0;
var counter3=0;
const imgInBox= document.getElementById("first-page-img");
const imgInSecondPage = document.getElementById("second-page-img");
const CurrentPage = document.getElementById("current-page");
const SecondPage= document.getElementById("main-container-page2");
const radioButton1 =document.querySelector(".radio-buttons");

    firstName.addEventListener('blur',  function(){

        checkTextInputs(firstName); 
        buttonChecks();
    });

    lastName.addEventListener('blur',  function(){
   
        checkTextInputs(lastName);
        buttonChecks();
    });

mail.addEventListener('blur', () => {
    checkMail();
    buttonChecks();
    




}); 


nextButton.addEventListener("click", () => {
        if(counter1 >=1 && counter2 >=1 && counter3 >= 1){
            identificationContainer.style.display="none";
            imgInBox.src="images/vaccinate2.png";
            
            CurrentPage.innerText="2/4";
           
           


            // show next page questions
            radioButton1.style.display="unset";
            SecondPage.style.display="unset";
            
            nextButton.classList.remove("next-button-valid");
           
        }
} );


document.getElementById("return-back-btn").clicked= () =>{


        console.log("Hello world");
    
}
function buttonChecks(){
    
    if(counter1 >= 1 && counter2 >=1 && counter3 >= 1){
        nextButton.classList.add("next-button-valid");
    }

}

   

function checkTextInputs(elementCheck){

    const nameValue = elementCheck.value.trim();
    const regexOne= /^\p{L}+$/u;
    
    if(elementCheck == firstName){
        if( nameValue.length < 3){
            messageText1.innerHTML="სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
            messageText1.classList.add('show-message');
        }else if(nameValue.length >255){


            messageText1.innerHTML="სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
            messageText1.classList.add('show-message');

        
        } else if(!nameValue.match(regexOne)){
             
            messageText1.innerHTML="სახელის ველი უნდა შეცავდეს მხოლოდ ალფაბეტის სიმბოლოებს";
            messageText1.classList.add("show-message");
            
        } else{
            messageText1.classList.remove('show-message');
            counter1++;
        }
    }
    

    if(elementCheck == lastName){

    
        if( nameValue.length < 3){
            messageText2.classList.add('show-message');
        }else if(nameValue.length >255){
            messageText2.innerHTML="გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
            messageText2.classList.add('show-message');
        }else if(!nameValue.match(regexOne)){
        messageText2.innerHTML="სახელის ველი უნდა შეცავდეს მხოლოდ ალფაბეტის სიმბოლოებს";
            messageText2.classList.add("show-message");

        }else{
            messageText2.classList.remove('show-message');
            counter2++;
           
        }
    }

   
}


function checkMail(){
       const regexD=/\w+(@redberry.ge)$/gm;
       let strng= mail.value;
    if(!strng.match(regexD)){
        mailMessage.classList.add("show-message");
    
    }else{
        mailMessage.classList.remove("show-message");
        counter3++;
    }
}






