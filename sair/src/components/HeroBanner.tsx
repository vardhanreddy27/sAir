import React from "react";
import { FcShipped,FcSalesPerformance ,FcShop} from "react-icons/fc";
import { useState } from "react";

function HeroBanner() {
  var isMorning;
  var isAfternoon;
  var isEvening;

  const today = new Date()
  const curHr = today.getHours()
    if (curHr < 12) {
     isMorning=(true);
    }else if (curHr < 18) {
     isAfternoon=(true);
    } else {
     isEvening=(true);
    }
   
  return (
    <div className="mt-5 p-5 ">
      <div className="row ">
        {/* name section here...*/}
      <div className="top-name-section">
        <h3><span className="text-secondary">
        {isMorning ?( 'Good Morning') : isAfternoon ? 'Good Afternoon' : isEvening ? 'Good Evening':'Good Night'}
          
          </span> Nick</h3>
      </div>
      {/* main banner here... */}
      <div className="row mt-4">
        <div className="col-8">
          <img className="bannerimg" src="https://couponswala.com/blog/wp-content/uploads/2022/07/lifestyle-stores-online-shopping-1-696x392.jpg" />
        </div>

        <div className="col-4 mt-5">
        <div><h5 className="mt-5 ps-5">One hour delivery <FcShipped /></h5> </div>
        <div><h5 className="mt-5 ps-5">No hidden charges <FcSalesPerformance /></h5></div>
        <div><h5 className="mt-5 ps-5">Local payment options <FcShop /></h5></div>
        </div>
      </div>
      {/* products menu here...*/}
     <div className="row mt-3">
     <div className="col p-2 text-center">
    <a href="">  <h5>All items</h5></a>
      </div>     <div className="col p-2 text-center">
      <a href="">  <h5 className="text-secondary">Electronics</h5></a>
      </div>  <div className="col p-2 text-center">
      <a href="">  <h5 className="text-secondary">Fashion</h5></a>
      </div>
      <div className="col p-2 text-center">
      <a href=""> <h5 className="text-secondary">Accessories</h5></a>
      </div>       <div className="col p-2 text-center">
      <a href=""> <h5 className="text-secondary">Kid's</h5></a>
      </div>   <div className="col p-2 text-center">
      <a href=""> <h5 className="text-secondary">Clothing</h5></a>
      </div>       <div className="col p-2 text-center">
      <a href="">  <h5 className="text-secondary">Sports</h5></a>
      </div>  <div className="col p-2 text-center">
      <a href="">  <h5 className="text-secondary">Shoes</h5></a>
      </div>    <div className="col p-2 text-center">
      <a href="">  <h5 className="text-secondary">Beauty</h5></a>
      </div>   
     </div>
{/* products list here... */}
     <div className="row">
     <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kzrbiq80/mobile/h/x/n/galaxy-s21-fe-5g-sm-g990ezaiinu-samsung-original-imagbpfzbrnueypq.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Mobile phones</h5>
          <p className="deal-card text-secondary">Oled display</p>
        <p className="d-inline text-success">From ₹ 11,000</p>
        </div>

  </div> 
  
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Skybags</h5>
          <p className="deal-card text-secondary">Suitcase, Backpacks & Bags</p>
        <p className="d-inline text-success">From ₹ 1,000 </p>
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/xif0q/air-cooler/f/b/z/-original-imagnspagfxhtjy7.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">BAJAJ Air Cooler</h5>
          <p className="deal-card text-secondary">40% Off</p>
        <p className="d-inline text-success">From ₹ 2,500</p> 
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kq6yefk0/stroller-pram/r/0/m/baby-buggy-bt-1106b-buggy-miss-chief-original-imag49nuhyah7hdv.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">SK Fashion Walker</h5>
          <p className="deal-card  text-secondary">Best deal of the day</p>
          <p className="shop-card-price"><p className="d-inline text-success">From ₹ 500</p> </p>
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kfoapow0/mixer-grinder-juicer/b/f/g/sansui-colossus-original-imafw2qhf6ymzebr.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Pigeon 500 W Mixer</h5>
          <p className="deal-card  text-secondary">Best sellers</p>
          <p className="shop-card-price"><p className="d-inline text-success">From ₹ 1,500 </p> </p>
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/k16qzrk0/refrigerator-new/u/h/k/sbs-560w-na-marq-by-flipkart-original-imafkpazkqm7tnbr.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Voltas Refrigerator</h5>
          <p className="deal-card text-secondary">60-70 % Off</p>
    <p className="d-inline text-success">From ₹ 11,000</p>
        </div>

  </div>

  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/xif0q/washing-machine-new/n/e/u/6-490-wfl6010vtms-5-0-09-600-62-voltas-beko-840-original-imagnpgrephjzkng.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Washing Machines</h5>
          <p className="deal-card text-secondary">Best offers</p>
          <p className="d-inline text-success">From ₹ 6,700</p> 
        </div>

  </div> 
  
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/l31x2fk0/router/w/k/6/mr80x-mercusys-original-image9gvp3aefm2a.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Wifi Router</h5>
          <p className="deal-card">40-60% Off</p>
         <p className="d-inline text-success">From ₹ 1,300</p> 
        </div>

  </div>
</div>
{/* carousel here...*/}

    <div className="offer-carousel-section  p-3">
      <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/01/amazon-prime-republic-day-sale-featured.png" className="d-block w-100" alt="..." />
              <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100 text-white fs-5" style={{background: 'rgba(0,0,0,0.1)'}}></div>
</div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://images.gizbot.com/webp/img/2022/07/amazon-mega-electronics-days-sale-discounts-on-laptops-tablets-headphones-camera-1658830501.jpg" className="d-block w-100" alt="..." />
              <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100 text-white fs-5" style={{background: 'rgba(0,0,0,0.1)'}}></div>
  </div>
            <div className="carousel-item">
               <img src="https://static.digit.in/default/tr:w-1200/amazon-mega-electronics-days-sale-5-8f38901931.jpeg" className="d-block w-100" alt="..." />
               <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100 text-white fs-5" style={{background: 'rgba(0,0,0,0.1)'}}></div>
  </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </div>
    {/* circle products here...*/}
<div className="row mb-4">
     <div className="circleitems-section ">
        <div className="d-flex js flex-row ">
       
          <div>
            <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452163/item/goods_01_452163.jpg?width=750"  
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Men's Fluffy</h5>
            </div>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSclp5g9V0peyQ-9-6uPbAyUrtj0mgyOm-ZA&usqp=CAU" 
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Shoes</h5>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80" 
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Hand bag</h5>
            </div>
          </div>

          <div className="image-product-section">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-VENNBLjW1zBQEj6Esb2mY4XgI2mJX-byvZlbihvplSDp8yXEVLaBCLbNpI0ChkA5oc&usqp=CAU" 
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Sun glasses</h5>
            </div>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/61Xi-N978GL._AC_UL600_FMwebp_QL65_.jpg" 
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Shirts</h5>
            </div>
          </div>
          <div>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvzsiuOPMAw61fKAmmUBRVBeRNGwYtbQ2daIldXhxCA2BDTrd6r00N4pL1M8MZLHbMtwVuCfQl4BA8FakrIJTQmxxLWTkMmg&usqp=CAY"
            alt="" className="image-card shadow" />
            <div className="image-heading">
              <h5>Black hoodie</h5>
            </div>
          </div>

     

      
        </div>
      </div> 
      </div>
{/*products list here... */}
<div className="row">
     <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kzrbiq80/mobile/h/x/n/galaxy-s21-fe-5g-sm-g990ezaiinu-samsung-original-imagbpfzbrnueypq.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Mobile phones</h5>
          <p className="deal-card text-secondary">Oled display</p>
         <p className="d-inline text-success">From ₹ 11,000</p>
        </div>

  </div> 
  
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Skybags</h5>
          <p className="deal-card text-secondary">Suitcase, Backpacks & Bags</p>
        <p className="d-inline text-success">From ₹ 1,000 </p>
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/xif0q/air-cooler/f/b/z/-original-imagnspagfxhtjy7.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">BAJAJ Air Cooler</h5>
          <p className="deal-card text-secondary">40% Off</p>
       <p className="d-inline text-success">From ₹ 2,500</p>
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kq6yefk0/stroller-pram/r/0/m/baby-buggy-bt-1106b-buggy-miss-chief-original-imag49nuhyah7hdv.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">SK Fashion Walker</h5>
          <p className="deal-card  text-secondary">Best deal of the day</p>
       <p className="d-inline text-success">From ₹ 500</p> 
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/kfoapow0/mixer-grinder-juicer/b/f/g/sansui-colossus-original-imafw2qhf6ymzebr.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Pigeon 500 W Mixer</h5>
          <p className="deal-card  text-secondary">Best sellers</p>
       <p className="d-inline text-success">From ₹ 1,500 </p> 
        </div>

  </div>
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/k16qzrk0/refrigerator-new/u/h/k/sbs-560w-na-marq-by-flipkart-original-imafkpazkqm7tnbr.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Voltas Refrigerator</h5>
          <p className="deal-card text-secondary">60-70 % Off</p>
        <p className="d-inline text-success">From ₹ 11,000</p> 
        </div>

  </div>

  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/xif0q/washing-machine-new/n/e/u/6-490-wfl6010vtms-5-0-09-600-62-voltas-beko-840-original-imagnpgrephjzkng.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Washing Machines</h5>
          <p className="deal-card text-secondary">Best offers</p>
      <p className="d-inline text-success">From ₹ 6,700</p>
        </div>

  </div> 
  
  <div className="col-3">
  <div className="shop-card-item text-center  p-3 ">
          <img
            src="https://rukminim1.flixcart.com/image/400/400/l31x2fk0/router/w/k/6/mr80x-mercusys-original-image9gvp3aefm2a.jpeg?q=70" alt=""
            className="shop-card-image"
          />
          <h5 className="shop-card-name mt-2">Wifi Router</h5>
          <p className="deal-card">40-60% Off</p>
    <p className="d-inline text-success">From ₹ 1,300</p> 
        </div>

  </div>
</div>

      </div>
    </div>
  );
}

export default HeroBanner;
