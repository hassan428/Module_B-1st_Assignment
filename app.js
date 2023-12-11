let arr = [
{
id: 4,
title: "newTitle",
price: 205,
description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
image_url: "https://i.imgur.com/R2PN9Wq.jpeg"
},

{
id: 7,
title: "Ergonomic Wooden Tuna",
price: 743,
description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
image_url: "https://i.imgur.com/mp3rUty.jpeg"
},

{
id: 9,
title: "Electronic Bronze Chips",
price: 808,
description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
image_url: "https://i.imgur.com/R3iobJA.jpeg"
},

{
id: 11,
title: "Awesome Bronze Car",
price: 382,
description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
image_url: "https://i.imgur.com/cBuLvBi.jpeg"
},

{
id: 12,
title: "Recycled Rubber Cheese",
price: 30,
description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
image_url: "https://i.imgur.com/KeqG6r4.jpeg"
}

]
// console.log(arr);

let objArr = arr;
// console.log(objArr[0]);

const [obj1 , obj2 , obj3 , obj4 , obj5] = objArr;
// console.log(obj1);

let div = document.getElementById("div");

for(let i = 0; i < objArr.length; i++)
{    div.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <img src="${objArr[i].image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${objArr[i].title} </h4>
      <h6 class="card-text">${objArr[i].description}</h6>
      <p class="card-text"> <strong>${objArr[i].price}</strong> </p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>`
}
// console.log(div.innerHTML);
