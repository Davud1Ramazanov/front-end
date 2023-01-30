function getToken (){
    return $.session.get("Accsess token", "key");
}
document.addEventListener('DOMContentLoaded', (e)=>{
    $('#btn').click(function(e){
        console.log(sessionStorage.getItem("Accsess token"));
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

