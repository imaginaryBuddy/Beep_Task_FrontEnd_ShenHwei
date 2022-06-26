
// Fetch data from url


fetch('https://dev.beepbeep.tech/v1/sample_customer?format=json').then(data =>{
  return data.json();
}).then((completeData)=>{
  console.log(completeData);
  // var nameData = completeData.name.text.split(" ");
  // var nameLen = nameData.length;
  // var nameStr ="";
  // for (var i =0; i<nameLen; i++){
  //   nameData[i][0] = nameData[i][0].toUpperCase();
  //   nameStr += nameData[i]+ " ";
  // }

  $(".name").html(completeData.name);
  $(".email").html(completeData.email);
  $(".username").html("someDummyUsername12");
  return Object.values(completeData.promotions);
}).then((promotionsData)=>{
  console.log(promotionsData);
  let data1 ="";
  promotionsData.map((values)=> {
    if (values.discount == undefined) {
      values.discount = "not applicable";
    }
    data1 += `<div class ="card col-lg-4 col-md-6 col-sm-12 mx-auto"> <div class ="card-promo btn btn-secondary"><h5 class="title">${values.title}</h5>
    <img src = "./img/dummy2Square.jpg" class="images">
    <div class="quantity"><h6>Quanitity : ${values.quantity}</h6></div>
    <div class="type"><h6>Type : ${values.type}</h6></div>
    <div class="discount"><h6>Discount : ${values.discount}</h6></div>
    </div></div>`

});
  document.getElementById("cards").innerHTML = data1;

}).catch((err)=>{
  console.log(err);
});
