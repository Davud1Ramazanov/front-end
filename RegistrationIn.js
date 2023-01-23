document.addEventListener('DOMContentLoaded', ()=>{
    $('.button').click(function(e){
        $.ajax({
            type: "POST",
        url: "https://localhost:7243/api/Authentication/registration",
        mode: 'cors',
        cache: 'no-cache',
        data: JSON.stringify({
            login: $("#login-reg").val(),
            password: $("#password-reg").val()
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          success: function(data) {
              window.open("Categories.html");
              alert(success());
              }
        });
    })
})