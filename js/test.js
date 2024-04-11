let shopGoods = [
  {
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    products: [
      { product_name: "Kişi palto", product_description: "Süət dəri, qara rəngdə", product_price: 250 },
      { product_name: "Qadın jaketi", product_description: "Uzun, qaşqır", product_price: 200 },
      { product_name: "Kişi kəməri", product_description: "Dəri, metal tokalı", product_price: 40 },
      { product_name: "Qadın badlonu", product_description: "Retro stil, qızıl rəngdə", product_price: 180 },
      { product_name: "Kişi şortu", product_description: "Spor stil, elastik", product_price: 60 },
      { product_name: "Qadın maykası", product_description: "Boyalı nəqş, pamuklu", product_price: 45 },
      { product_name: "Kişi saatı", product_description: "Qara rəngdə, analog", product_price: 150 },
      { product_name: "Qadın bəzək", product_description: "Qızıl, komplekt", product_price: 220 },
      { product_name: "Kişi atkısı", product_description: "Xəzəl rəng, uzun", product_price: 35 },
      { product_name: "Qadın bantı", product_description: "Metal detallı, elastik", product_price: 50 }
    ]
  },
  {
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    products: [
      { product_name: "Kişi kostyumu", product_description: "İki parçalı, qara rəngdə", product_price: 320 },
      { product_name: "Qadın kombinezonu", product_description: "Yaz üçün, açıq rəng", product_price: 150 },
      { product_name: "Kişi sviteri", product_description: "Düz rəng, yüngül", product_price: 70 },
      { product_name: "Qadın ziyafət geyimi", product_description: "Düzənşən, yaz üçün", product_price: 95 },
      { product_name: "Kişi sport formaları", product_description: "Spandex, idman üçün", product_price: 55 },
      { product_name: "Qadın bikini", product_description: "Tropik nəqş, elastik", product_price: 45 },
      { product_name: "Kişi çantası", product_description: "Dizayner, əsas bölməsi", product_price: 100 },
      { product_name: "Qadın ətri", product_description: "Gül ətri, uzunömürlü", product_price: 80 },
      { product_name: "Kişi şalı", product_description: "Səliqəli, çoxrəngli", product_price: 25 },
      { product_name: "Qadın sutyeni", product_description: "Destəklənmiş, rahat", product_price: 65 }
    ]
  },
  {
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    products: [
      { product_name: "Kişi köynəyi", product_description: "Mavi rəngdə, 100% pamuk", product_price: 50 },
      { product_name: "Qadın bluzası", product_description: "Dəri detallı, qara rəngdə", product_price: 60 },
      { product_name: "Kişi pantolonu", product_description: "Qəhvəyi rəng, kənar cebi", product_price: 75 },
      { product_name: "Qadın eteyi", product_description: "Qırmızı rəng, mini", product_price: 40 },
      { product_name: "Kişi dəsmalı", product_description: "Nəqşdar dizayn", product_price: 20 },
      { product_name: "Qadın çantası", product_description: "Əlgötürən, dəri", product_price: 90 },
      { product_name: "Kişi botları", product_description: "Qış üçün, suya davamlı", product_price: 120 },
      { product_name: "Qadın ayaqqabıları", product_description: "Yüksək tapan, lacivərt", product_price: 85 },
      { product_name: "Kişi papağı", product_description: "Qara rəngdə, dəri", product_price: 45 },
      { product_name: "Qadın şalvarı", product_description: "Göy rəngdə, kaşmir", product_price: 70 }
    ]
  }
];


let shoppingCart = [];


function siralamaArtan() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => a.product_price - b.product_price);
  }
}

function siralamaAzalan() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => b.product_price - a.product_price);
  }
}

function siralamaElifba() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => a.product_name.localeCompare(b.product_name));
  }
}


function addToCart(productName) {
  for (let shop of shopGoods) {
    for (let product of shop.products) {
      if (product.product_name.toLowerCase() === productName.toLowerCase()) {
        shoppingCart.push(product);
        console.log(`${productName} sebete elave edildi.`);
        return;
      }
    }
  }
  console.log(`${productName} tapılmadı.`);
}

function sebetElave() {
  console.log("Alıs-veris sebeti:");
  let totalPrice = 0;
  for (let product of shoppingCart) {
    console.log(`Məhsul Adı: ${product.product_name}`);
    console.log(`Açıqlama: ${product.product_description}`);
    console.log(`Qiymet: ${product.product_price}`);
    totalPrice += product.product_price;
  }
  console.log(`Toplam Qiymet: ${totalPrice}`);
}

let userRole = prompt('Rolunuzu seçin: Alıcı və ya Admin');


if (userRole.toLowerCase() === "admin") {
  let adminOperation;
  
  while (true) {
    adminOperation = prompt("Bir eməliyyat seçin: \n1) Maqazaları görmek \n2) Bütün mehsulları görmek \n3) Bir mehsul axtarmaq \n4) Mehsulun qiymetini deyismek \n5) Mehsulu silmek \n6) Mehsul elave etmek \n7) Geri qayıt \n8) Proqramı bitirmek");
    
    if (adminOperation === "1") {
      for (let i = 0; i < shopGoods.length; i++) {
        console.log(`${i + 1}. ${shopGoods[i].store_name}`);
      }
    }
    
    if (adminOperation === "2") {
      for (let i = 0; i < shopGoods.length; i++) {
        for (let j = 0; j < shopGoods[i].products.length; j++) {
          const product = shopGoods[i].products[j];
          console.log(`Mehsul Adı: ${product.product_name}`);
          console.log(`Açıqlama: ${product.product_description}`);
          console.log(`Qiymet: ${product.product_price}`);
          console.log(`Maqaza Adı: ${shopGoods[i].store_name}`);
          console.log("---------------------");
        }
      }
    }
    
    if (adminOperation === "3") {
      let productName = prompt("Axtarmaq istədiyiniz məhsulun adını daxil edin:");
      searchProduct(productName);
    }
  
    if (adminOperation === "4") {
      let productName = prompt("Qiymetini deyismek istediyiniz mehsulun adını daxil edin:");
      let newPrice = parseFloat(prompt("Yeni qiymeti daxil edin:"));
    
      let found = false;
      for (let i = 0; i < shopGoods.length; i++) {
        for (let j = 0; j < shopGoods[i].products.length; j++) {
          const product = shopGoods[i].products[j];
          if (product.product_name.toLowerCase() === productName.toLowerCase()) {
            product.product_price = newPrice;
            found = true;
            console.log(`Mehsulun yeni qiymeti: ${product.product_price}`);
            break;
          }
        }
        if (found) {
          break;
        }
      }
      if (!found) {
        console.log("Deyisilmek istediyiniz mehsul tapılmadı.");
      }
    }
    
    if (adminOperation === "5") {
      let mehsulSilme = prompt('Silmek istediyiniz mehsulun adını daxil edin');
      let found = false;
      for (let i = 0; i < shopGoods.length; i++) {
        for (let j = 0; j < shopGoods[i].products.length; j++) {
          if (shopGoods[i].products[j].product_name === mehsulSilme) { 
            found = true;
            shopGoods[i].products.splice(j, 1);
            console.log(`${mehsulSilme} mehsulu silindi`);
            break;
          }
        }
        if (found) {
          break;
        }
      }
      if (!found) {
        console.log("Silmek istediyiniz mehsul tapılmadı");
      }
    }
  
    if (adminOperation === "6") {
      let mehsulElaveEle = {}; 
      
      let magazaIndeksi = prompt("Mehsul elave etmek istediyiniz maqazanın indeksini daxil edin:  \n1. Zerif Moda \n2. eliyev Moda Merkezi \n3. Moda Dünyası");
      magazaIndeksi = parseInt(magazaIndeksi) - 1; 
    
      if (magazaIndeksi < 0 || magazaIndeksi >= shopGoods.length) {
        console.log("Daxil etdiyiniz indeks yanlısdır. Yeniden cehd edin.");
        continue; 
      }
    
      mehsulElaveEle.product_name = prompt("Mehsulun adını daxil edin:");
      mehsulElaveEle.product_description = prompt("Mehsulun tesvirini daxil edin:");
      mehsulElaveEle.product_price = parseFloat(prompt("Mehsulun qiymetini daxil edin:"));
    
      shopGoods[magazaIndeksi].products.push(mehsulElaveEle);
    
      console.log(`${mehsulElaveEle.product_name} mehsulu ${shopGoods[magazaIndeksi].store_name} maqazasına elave edildi.`);
    }
  
    if (adminOperation === "7") {
      userRole = prompt('Rolunuzu seçin: Alıcı ve ya Admin');
      if (userRole.toLowerCase() !== "admin") {
        break;
      }
    }
  
    if (adminOperation === "8") {
      break; 
    }
  }
}


if (userRole.toLowerCase() === "alici") {
  let adminOperation;
  
  while (true) {
    adminOperation = prompt("Bir emeliyyat seçin: \n1) Maqazaları görmek \n2) Bütün mehsulları görmek \n3) Bir mehsul axtarmaq \n4) Mehsulun qiymetini deyismek (artan / azalan / elifba) \n5) Mehsulu sebete elave ele \n6) sebetin deyeri \n7) Geri qayıt \n8) Proqramı bitirmek");
    
    if (adminOperation === "1") {
      for (let i = 0; i < shopGoods.length; i++) {
        console.log(`${i + 1}. ${shopGoods[i].store_name}`);
      }
    }
    
    if (adminOperation === "2") {
      for (let i = 0; i < shopGoods.length; i++) {
        for (let j = 0; j < shopGoods[i].products.length; j++) {
          const product = shopGoods[i].products[j];
          console.log(`Mehsul Adı: ${product.product_name}`);
          console.log(`Açıqlama: ${product.product_description}`);
          console.log(`Qiymet: ${product.product_price}`);
          console.log(`Maqaza Adı: ${shopGoods[i].store_name}`);
          console.log("---------------------");
        }
      }
    }
    
    if (adminOperation === "3") {
      let productName = prompt("Axtarmaq istediyiniz mehsulun adını daxil edin:");
      searchProduct(productName);
    }

    if (adminOperation === "4") {
      let sortingOption = prompt("Mehsulları hansı parametrle sıralamaq isteyirsiniz? (Qiymet, Ad)");
      if (sortingOption.toLowerCase() === "qiymet") {
        let order = prompt("Artan (A) ve ya azalan (B) sıralama?");
        if (order.toLowerCase() === "a") {
          siralamaArtan();
        } else if (order.toLowerCase() === "b") {
          siralamaAzalan();
        } else {
          console.log("Yalnıs sıralama parametri daxil edildi.");
        }
      } else if (sortingOption.toLowerCase() === "ad") {
        siralamaElifba();
      } else {
        console.log("Yalnıs parametr daxil edildi.");
      }
    }
    
   
    function siralamaArtan() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => a.product_price - b.product_price);
      console.log("Bütün mehsullar artan qiymet sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }
    
  
    function siralamaAzalan() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => b.product_price - a.product_price);
      console.log("Bütün mehsullar azalan qiymet sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }
    
  
    function siralamaElifba() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
      console.log("Bütün mehsullar ad sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }
    

    if (adminOperation === "5") {
      let productName = prompt("Sebeye elave etmek istediyiniz mehsulun adını daxil edin:");
      addToCart(productName);
    }

    if (adminOperation === "6") {
      sebetElave();
    }

    if (adminOperation === "7") {
      userRole = prompt('Rolunuzu seçin: Alıcı ve ya Admin');
      if (userRole.toLowerCase() !== "alici") {
        break;
      }
    }
  
    if (adminOperation === "8") {
      break; 
    }
  }
}

function searchProduct(productName) {
  let found = false;
  for (let i = 0; i < shopGoods.length; i++) {
    for (let j = 0; j < shopGoods[i].products.length; j++) {
      const product = shopGoods[i].products[j];
      if (product.product_name.toLowerCase() === productName.toLowerCase()) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log(`Maqaza Adı: ${shopGoods[i].store_name}`);
        found = true;
      }
    }
  }
  if (!found) {
    console.log("Axtardıqınız mehsul tapılmadı.");
  }
}
