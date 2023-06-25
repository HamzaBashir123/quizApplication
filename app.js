const brigth = document.querySelector(".brigth");
const crossIcon = document.querySelector(".crossIcon");
const createPage = document.querySelector(".createPage");
const CreateAccount = document.querySelector(".CreateAccount");
const login = document.querySelector(".login");
const rightChild = document.querySelector(".rightChild");

const closeSignUpPage = () => {
  createPage.style.display = "none";
  brigth.style.display = "none";
  CreateAccount.style.zIndex = 1;
  login.style.zIndex = 1;
};
crossIcon.addEventListener("click", closeSignUpPage);
const openSignUpForm = () => {
  // console.log('hello')
  createPage.style.display = "block";
  brigth.style.display = "block";
  CreateAccount.style.zIndex = 0;
  login.style.zIndex = 0;
};
CreateAccount.addEventListener("click", openSignUpForm);

// signUp Button and Form fields
const signUp = document.querySelector(".signUp");
const firstname = document.querySelector(".firstname");
const Surname = document.querySelector(".lastname");
const cellNumber = document.querySelector(".cellNumber");

const passWord = document.querySelector(".passWord");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const gender = document.getElementsByName("inlineRadioOptions");

const users = JSON.parse(localStorage.getItem("users")) || [];
// let date;
// let month;
// let year;
// let gender;

signUp.addEventListener("click", signUpHandler);

//          Sign Up function

function signUpHandler() {
  let genValue;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genValue = gender[i].value;
    }
  }
  if (
    firstname.value !== "" &&
    Surname.value !== "" &&
    cellNumber.value !== "" &&
    passWord.value !== "" &&
    genValue !== undefined
  ) {
    if (passWord.value.length < 8)
      return alert("password should contain 8 characters");

    const userObj = {
      firstName: firstname.value,
      surName: Surname.value,
      mobileNum: cellNumber.value,
      password: passWord.value,
      dateOfBirth: new Date(`${year.value}-${month.value}-${day.value}`),
      gender: genValue,
    };
    users.push(userObj);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User signup successfully");

    firstname.value = "";
    Surname.value = "";
    cellNumber.value = "";
    passWord.value = "";

    console.log(userObj);
    closeSignUpPage();
  } else {
    alert("insano ki tarha saari fields fill up kardo");
  }
}

//              Login Funtion

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

function loginHandler() {
  console.log(emailInput.value);

  if (!emailInput.value || !passwordInput.value)
    return alert("Please write email and password to continue");
  const userCheck = users.filter((item) => {
    return item.mobileNum === emailInput.value;
  });
  //   console.log(userCheck)
  if (!userCheck.length)
    return alert("This user is not registered, kindly create an account first");
  if (userCheck[0].password == passwordInput.value) {
    alert("user is logging in");

    localStorage.setItem("isLoggedInUser", JSON.stringify(userCheck[0]));

    window.location.href = "./quiz/quizSelect.html";
  } else {
    alert("password is incorrect");
  }
}

login.addEventListener("click", loginHandler);

// Also Enter Button to tun the Login Function

passwordInput.addEventListener("keydown", (a) => {
  if (a.key === "Enter") {
    console.log("je");
    loginHandler();
  }
});

function showPass() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
