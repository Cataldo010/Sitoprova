let ckbox = document.getElementById("ckbox");

ckbox.addEventListener("click", ()=>{
    let password = document.getElementById("Password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})

function Login() {
    return 
}