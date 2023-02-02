document.addEventListener('DOMContentLoaded', load =>{
$(".button").click(function(e){
    $.ajax({
        type: "POST",
        url: "https://localhost:7243/api/Authentication/login",
        mode: 'cors',
        cache: 'no-cache',
        data: JSON.stringify({
            login: $("#login-enter").val(),
            password: $("#password-enter").val()
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          success: function(data) {
              sessionStorage.setItem("AccsessToken", data.token);
              window.open("MainMenu.html");
              }
        });
    })
});