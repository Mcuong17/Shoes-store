/* $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) */

/* Login Form */
const ListAccount = [
    {
        username: "admin",
        password:"admin"
    },

    {
        username: "admin1",
        password:"admin"
    },

    {
        username: "admin2",
        password:"admin"
    },

]

let isLogin = !!localStorage.getItem("token");
function CheckLogin() {
    if(isLogin) {
        window.location.href = "index.html"
    }
}
function Login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = ListAccount.some(value => value.username === username && value.password === password)
    console.log(checkLogin);
    if (checkLogin) {
        localStorage.setItem("token", username)
        isLogin = true
        CheckLogin()
    } else {
        alert("Sai tên đăng nhập hoặc tài khoản!")
    }
}
