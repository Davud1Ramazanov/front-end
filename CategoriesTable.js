document.addEventListener('DOMContentLoaded', (e)=>{
    $('#btn').click(function(e){
        $.ajax({
            async: true,
            type: "GET",
            url: 'https://localhost:7243/api/Gadgets/GadgetsList',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
                'CustomAuthorization': 'Bearer ' + getToken()
            },
            success: function (data)
            {
                const jwt = require('jsontoken');
                jwt.verify(token, 'secret', (err,decoded)=>{
                if(err) console.log(err);
               })
               let rows = "";
               $.each(ter, function(index, inf){
                rows += value;
               });
               $(".table-categories").append(rows);
               LoadDropdown(data);
            }
        }).then(response => response.json());
    });
});

