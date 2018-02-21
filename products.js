
  // Product Page title
  document.getElementById("1panelh2").innerHTML="My Web Shop";


  // Settings for Products

  // 0 = Product Name,
  // 1 = Price,
  // 2 = Description,
  // 3 = Url to Image

/*  var myProducts = {
    "productList": {
      "product1":["General White", "49 SEK", "Description Mmmmm....", "https://az666937.vo.msecnd.net/52/96dbe1d2-4ec5-481a-aa39-719d21c7fa01.jpg?format=png&maxheight=480"],
      "product2":["General White XR", "39 SEK", "Description Mmmmm....", "https://az666937.vo.msecnd.net/52/656803ec-4ddb-4fd0-8a97-31ec392f509e.jpg?format=png&maxheight=480"],
      "product3":["General White XR Strong", "39 SEK", "Description Mmmmm....", "https://az666937.vo.msecnd.net/52/ad197e5f-3476-4e2e-820d-f7dbe08b70f4.jpg?format=png&maxheight=480"]
    }
  }
*/


var products = [
{
  name: 'General White',
  price: '49 SEK',
  description: 'Description Mmmmm....',
  image: 'https://az666937.vo.msecnd.net/52/96dbe1d2-4ec5-481a-aa39-719d21c7fa01.jpg?format=png&maxheight=480'
},

{
  name: 'General White XR',
  price: '39 SEK',
  description: 'Description Mmmmm....',
  image: 'https://az666937.vo.msecnd.net/52/656803ec-4ddb-4fd0-8a97-31ec392f509e.jpg?format=png&maxheight=480'
},

{
  name: 'General White XR Strong',
  price: '42 SEK',
  description: 'Description Mmmmm....',
  image: 'https://az666937.vo.msecnd.net/52/ad197e5f-3476-4e2e-820d-f7dbe08b70f4.jpg?format=png&maxheight=480'
}

];
// Product 1
//Name of Product
document.getElementById("panel-heading1").innerHTML = products[0].name;

//Infro from produ
document.getElementById("panel-body1").innerHTML = products[0].price + "<br>";
document.getElementById("panel-body1").innerHTML += products[0].description + "<br>";
document.getElementById("panel-body1").innerHTML += '<img src="'+products[0].image+'">' + "<br>";

// Product 2
//Name of Product
document.getElementById("panel-heading2").innerHTML = products[1].name;

//Infro from produ
document.getElementById("panel-body2").innerHTML = products[1].price + "<br>";
document.getElementById("panel-body2").innerHTML += products[1].description + "<br>";
document.getElementById("panel-body2").innerHTML += '<img src="'+products[1].image+'">' + "<br>";

// Product 3
//Name of Product
document.getElementById("panel-heading3").innerHTML = products[2].name;

//Infro from produ
document.getElementById("panel-body3").innerHTML = products[2].price + "<br>";
document.getElementById("panel-body3").innerHTML += products[2].description + "<br>";
document.getElementById("panel-body3").innerHTML += '<img src="'+products[2].image+'">' + "<br>";
/*
  //Product 1
  document.getElementById("panel-heading1").innerHTML += myProducts.productList.product1[0];
  //document.getElementById("panel-body1").innerHTML="Panel Content";

  // product1
  //document.getElementById("panel-body1").innerHTML += myProducts.productList.product1[0] + "<br>";
  document.getElementById("panel-body1").innerHTML += myProducts.productList.product1[1] + "<br>";
  document.getElementById("panel-body1").innerHTML += myProducts.productList.product1[2] + "<br>";
  document.getElementById("panel-body1").innerHTML += '<img src="'+myProducts.productList.product1[3]+'">' + "<br>";



  //Product 2
  document.getElementById("panel-heading2").innerHTML += myProducts.productList.product2[0];
  //document.getElementById("panel-body2").innerHTML="2Panel Content";

  // product 2
  //document.getElementById("panel-body2").innerHTML += myProducts.productList.product2[0] + "<br>";
  document.getElementById("panel-body2").innerHTML += myProducts.productList.product2[1] + "<br>";
  document.getElementById("panel-body2").innerHTML += myProducts.productList.product2[2] + "<br>";
  document.getElementById("panel-body2").innerHTML += '<img src="'+myProducts.productList.product2[3]+'">' + "<br>";



  //Product 3
  document.getElementById("panel-heading3").innerHTML += myProducts.productList.product3[0];
  //document.getElementById("panel-body3").innerHTML="3Panel Content";

  // product 3
  //document.getElementById("panel-body3").innerHTML += myProducts.productList.product3[0] + "<br>";
  document.getElementById("panel-body3").innerHTML += myProducts.productList.product3[1] + "<br>";
  document.getElementById("panel-body3").innerHTML += myProducts.productList.product3[2] + "<br>";
  document.getElementById("panel-body3").innerHTML += '<img src="'+myProducts.productList.product3[3]+'">' + "<br>";
  */
