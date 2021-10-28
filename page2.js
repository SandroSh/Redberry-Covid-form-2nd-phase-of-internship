const radioYes_input = document.getElementById("radio1");
const radioNo_input = document.getElementById("radio2");
const radioNowYes_input = document.getElementById("radio3");
const extraRadioInput1_Yes = document.getElementById("radio1-1");


const extraRadioInput2_No = document.getElementById("radio1-2");
const extraQuestion1 = document.querySelector(".extra-question1");
const extraQuestion2_3 = document.querySelector(".extra-question2-3");
const extraNumberInput = document.getElementById("number-input-1")
const extraTitle = document.getElementById("extra-h2");







// whe user  had covid-19;
radioYes_input.addEventListener("click", () => {
    extraQuestion1.style.display="unset";
    
});
// when user  didn't have covid-19.
radioNo_input.addEventListener("click", () => {
    extraQuestion1.style.display="none";
    nextButton.classList.add("next-button-valid");
    extraQuestion2_3.style.display="none";
});
// when user  have covid-19 now.
radioNowYes_input.addEventListener("click", () => {
    extraQuestion1.style.display="none";
    nextButton.classList.add("next-button-valid");
    extraQuestion2_3.style.visibility="visible";
});

// when user  has  done an antibody test. yes radio button
extraRadioInput1_Yes.addEventListener("click", () => {
    extraNumberInput.style.display="unset";

    extraTitle.innerText="თუ გახსოვს, გთხოვ მიუთითე ტესტის\n  მიახლოებითი რიცხვი და\n ანტისხეულების რაოდენობა*";
    extraQuestion2_3.style.display="unset";
});

//  when user  hasn't  done an antibody test. no radio button
extraRadioInput2_No.addEventListener("click", () => {
    extraQuestion2_3.style.display="unset";
    extraNumberInput.style.display="none";
    extraTitle.innerText="მიუთითე მიახლოებითი პერიოდი \n (დღე/თვე/წელი) როდის გქონდა Covid-19*";
});















