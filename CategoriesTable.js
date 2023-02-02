function getToken() {
    return sessionStorage.getItem("AccsessToken");
}
document.addEventListener('DOMContentLoaded', (e) => {

    $('#btn').click(function (e) {
        $.ajax({
            async: true,
            type: "GET",
            url: 'https://localhost:7243/api/Gadgets/GadgetsList',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + getToken()
            },
            success: function (data) {
                console.log(data);
                for (const item of data) {
                    let tbody = document.createElement('tbody');
                    tbody.className = "tbody";

                    let tr = document.createElement('tr');
                    tr.setAttribute('id', `${item['id']}`)

                    let img = document.createElement('td');
                    let image = document.createElement('img');
                    image.setAttribute('src', `${item['image']}`);
                    image.setAttribute('width', '50');
                    image.style.height = 10;
                    img.append(image);
                    tr.append(img)

                    let id = document.createElement('td');
                    id.innerText = `${item['id']}`;
                    id.setAttribute('id', `${item['id']}`);
                    tr.append(id);

                    let idcategory = document.createElement('td');
                    idcategory.innerText = `${item['idCategory']}`;
                    idcategory.setAttribute('idCategory', `${item['idCategory']}`);
                    tr.append(idcategory);

                    let nameprod = document.createElement('td');
                    nameprod.innerText = `${item['name']}`;
                    nameprod.setAttribute('name', `${item['name']}`);
                    tr.append(nameprod);

                    let priceprod = document.createElement('td');
                    priceprod.innerText = `${item['price']} USD`;
                    priceprod.setAttribute('price', `${item['price']}`);
                    tr.append(priceprod);

                    let deletebutton = document.createElement('button');
                    deletebutton.className = "del-btn";
                    deletebutton.setAttribute('id', `${item['id']}`);
                    deletebutton.innerText = "Delete";

                    deletebutton.addEventListener('click', (e => {
                        $.ajax({
                            type: "POST",
                            url: `https://localhost:7243/api/Gadgets/DeleteGadget?id=${item['id']}`,
                            dataType: "json",
                            headers: {
                                'Authorization': 'Bearer ' + getToken()
                            },
                            success: function (response) {
                                alert('Successful delete!')
                                location.reload();
                            }
                        });
                    }))
                    tr.append(deletebutton);

                    let editbutton = document.createElement('button');
                    editbutton.className = "edit-btn";
                    editbutton.setAttribute('id', `${item['id']}`);
                    editbutton.innerText = "Edit";

                    let edit1 = document.createElement('button');
                    edit1.className = "edit-1";
                    edit1.innerText = "confirm";

                    var modal = document.getElementById("myModal");
                    var span = document.getElementsByClassName("close")[0];
                    editbutton.onclick = function () {
                        modal.style.display = "block"; 
                        // завтра попробовать обработать данную кнопку вместо изменения #edit-confirm-prod и к нему 
                        // modal.append(edit1);
                    }
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }

                    tr.append(editbutton);

                    tbody.append(tr);

                    $('.table').append(tbody);
                }
            }
        })
    })
    $('#edit-confirm-prod').click(function (e) {
        if ($('input').val() != 0) {
            $.ajax({
                type: "POST",
                url: 'https://localhost:7243/api/Gadgets/EditGadget',
                data: JSON.stringify({
                    idCategory: $("#edit-idprod").val(),
                    name: $("#edit-prod").val(),
                    price: $("#edit-priceprod").val(),
                    image: $("#edit-img").val()
                }),
                headers: {
                    'Authorization': 'Bearer ' + getToken(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (response) {
                    alert('Successful edit!')
                    location.reload();
                }
            });
        }
    });

    $('#add-prod').click(function (e) {
        $.ajax({
            type: "POST",
            url: "https://localhost:7243/api/Gadgets/CreateGadget",
            data: JSON.stringify({
                idCategory: $("#add-idcategory").val(),
                name: $("#add-name").val(),
                price: $("#add-price").val(),
                image: $("#add-img").val()
            }),
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                alert('Successful added!')
                location.reload();
            }
        });
    });
});