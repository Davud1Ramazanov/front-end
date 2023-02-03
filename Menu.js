function getToken() {
    return sessionStorage.getItem("AccsessToken");
}
document.addEventListener('DOMContentLoaded', (e) => {
    $.ajax({
        type: "GET",
        url: `https://localhost:7243/api/Gadgets/GadgetsList by IdCategory?id=${item['id']}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        success: function (data) {
            for (const item of data) {
                let card = document.createElement('div');
                card.className = 'card';

                let img = document.createElement('td');
                let image = document.createElement('img');
                image.setAttribute('src', `${item['image']}`);
                image.setAttribute('width', '80');
                image.style.height = 30;
                img.className = "regular-img";
                img.append(image);
                card.append(img)

                let name = document.createElement('h2');
                name.innerText = `${item['name']}`;
                name.setAttribute('name', `${item['name']}`);
                card.append(name);

                let price = document.createElement('h2');
                price.innerText = `${item['price']} USD`;
                price.setAttribute('price', `${item['price']}`);
                card.append(price);

                let buybutton = document.createElement('button');
                buybutton.className = "buy-button";
                buybutton.setAttribute('id', `${item['id']}`);
                buybutton.innerText = "Buy";

                buybutton.addEventListener('click', (e)=>{
                    if(getToken()==null){
                        alert('You need gadget!');
                    }
                    else{
                        alert('You bought gadget!');
                    }
                });
                card.append(buybutton);

                $('.container').append(card);
            }
        }
    });
});