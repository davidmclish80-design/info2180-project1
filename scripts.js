/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {

  form = document.querySelector("form");
  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    
    console.log(email);
    displayEmail(email, ".message");

    
    // getEmail("#email", ".message");
  });
});




function displayEmail(email, displayElement){
  const value = email;
  let displayobj = document.querySelector(displayElement);
  let message = "Please enter a valid email address";

  if(value){
    message = `Thank you! Your email address \`${value}\` has been added to our mailing list!`;
  }
  displayobj.textContent = message;
  console.log(value);
}