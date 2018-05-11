//Đổ dữ liệu cho sản phẩm

function item(img,n,p,b,l){
	this.image = img;
	this.shoes_name = n;
	this.price = p;
	this.button = b;
	this.link_shoes = l;	
}

var item1 = new item('images/item1.jpg','AIR JORDAN 12 RETRO "DARK GREY"','$250','CHI TIẾT','detail-men-1.html');
var item2 = new item('images/item2.jpg','NMD R1 PK "NEIGHBORHOOD"','$240','CHI TIẾT','detail-men-2.html');
var item3 = new item('images/item3.jpg','YEEZY BOOST 350 "PIRATE BLACK (2016 RELEASE)"','$1,750','CHI TIẾT','detail-men-3.html');
var item4 = new item('images/item4.jpg','ULTRABOOST J "MULTI-COLOR"','$170','CHI TIẾT','detail-men-4.html');
var item5 = new item('images/item5.jpg','EQT SUPPORT 93/17','$144','CHI TIẾT','detail-men-5.html');
var item6 = new item('images/item6.jpg','NMD R1 PK "JAPAN BOOST"','$345','CHI TIẾT','detail-men-6.html');
var item7 = new item('images/item7.jpg','STAN SMITH','$72','CHI TIẾT','detail-men-7.html');
var item8 = new item('images/item8.jpg','NMD XR1 W "DUCK CAMO"','$145','CHI TIẾT','detail-men-8.html');
var item9 = new item('images/item9.jpg','YEEZY BOOST 750','$1,500','CHI TIẾT','detail-men-9.html');
var item10 = new item('images/item10.jpg','ULTRABOOST CLIMA','$370','CHI TIẾT','detail-men-10.html');
var item11 = new item('images/item11.jpg','AIR JORDAN 1 RETRO HIGH OG "SHADOW"','$250','CHI TIẾT','detail-men-11.html');
var item12 = new item('images/item12.jpg','THE 10: NIKE AIR VAPORMAX FK "OFF-WHITE"','$1,500','CHI TIẾT','detail-men-12.html');

var block_item = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12];

for(i=0;i<block_item.length;i++){
	var product_item = ` 
						<div class="product-item-content">
						<img src="${block_item[i].image}" class="product-images">
						<p class="product-title">${block_item[i].shoes_name}</p>
						<p class="product-item-price">
							<span>${block_item[i].price}</span>
						</p>
						<a href="${block_item[i].link_shoes}"><input type="button" value="${block_item[i].button}"></a>
						<div class="product-addCart">
							<p id="addCart-text" class="product-cart">Thêm vào giỏ hàng</p>
						</div>
					</div>`
	 $('.product-item').append(product_item);
}


//Hiếu ứng cộng trừ menu dọc
document.addEventListener('DOMContentLoaded',function(){
	var status = "tru";
	var tru = document.querySelectorAll('.product-menu-title i');
	var menu = document.querySelectorAll('.product-menu');
	var brand = document.querySelectorAll('.product-brand');
	var price = document.querySelectorAll('.product-price');
	var color = document.querySelectorAll('.product-color');
	var size = document.querySelectorAll('.product-size');
	console.log(tru);
		tru[0].onclick =  function(){
			menu[0].classList.toggle('an-menu');
			tru[0].classList.toggle('fa-minus');
			tru[0].classList.toggle('fa-plus');
		}
		tru[1].onclick =  function(){
			brand[0].classList.toggle('an-menu');
			tru[1].classList.toggle('fa-minus');
			tru[1].classList.toggle('fa-plus');
		}
		tru[2].onclick =  function(){
			price[0].classList.toggle('an-menu');
			tru[2].classList.toggle('fa-minus');
			tru[2].classList.toggle('fa-plus');
		}
		tru[3].onclick =  function(){
			color[0].classList.toggle('an-menu');
			tru[3].classList.toggle('fa-minus');
			tru[3].classList.toggle('fa-plus');
		}
		tru[4].onclick =  function(){
			size[0].classList.toggle('an-menu');
			tru[4].classList.toggle('fa-minus');
			tru[4].classList.toggle('fa-plus');
		}
});






document.addEventListener('DOMContentLoaded',function(){
	var up_top = document.querySelector(".up-top");
	var status = "duoi";
	var up_top_position = up_top.offsetTop;
	var end_position = up_top_position + 4850;
	var status1 = "duoi1";
	var status2 = 'duoi2';
	var status_menu = 'duoi3';

	var adv = document.querySelector(".advertisement-text");
	var sport = document.querySelector('.sport-adv-text');
	var menu = document.querySelector('.menu');
	var menu_cart = document.querySelector('.header-cart');
	console.log(window.pageYOffset);
	//hiệu ứng cho phần lên top
	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 250){
			if(status == "duoi"){
				status = "tren"
				up_top.classList.add("show-uptotop");
			}
		}
		else if((window.pageYOffset < 250) || (window.pageYOffset > end_position)){
			if(status == "tren"){
				status = "duoi"
				up_top.classList.remove("show-uptotop");
			}
		}

		// Viết hiệu ứng cho phần load menu
		if(window.pageYOffset > 180){
			if(status_menu == 'duoi3'){
				status_menu = 'tren3'
				menu.classList.add('show_menu');
			}
		}
		else if(window.pageYOffset < 180){
			if(status_menu == 'tren3'){
				status_menu = 'duoi3'
				menu.classList.remove('show_menu');
			}
		}
	})

});





// hiệu ứng tích xanh vào rỏ hàng là đã mua

$(document).on('click','.product-cart',function(e){
	e.preventDefault();

	//Tạo hiệu ứng cộng vào giỏ hàng
	if($(this).hasClass('disable')){
		return false;
	}
	$(document).find('.product-cart').addClass('disable');
	var parent = $(this).parents('.product-item');
	var cart = $(document).find('.header-cart');

	var Citem = parseInt(cart.find('#count-item').data('count')) + 1;
	cart.find('#count-item').text(Citem + ' item').data('count',Citem);
	$(document).find('.product-cart').removeClass('disable');

	var UCitem = parseInt(cart.find('#count-item').data('count'));
	$(document).find('.cart-amount').text(UCitem + ' item').data('count',UCitem);

	// //Viết hiệu ứng popup cart hiện ra khi click vào thêm vào giỏ hàng

	$(document).find('.cart-popup').addClass('show_cart');
	$(document).find('.cart-popup-content').addClass('show_cart');

	setTimeout(function(){
		$('.cart-popup').removeClass('show_cart');
		$('.cart-popup-content').removeClass('show_cart');
	},1200);
});


//Set sản phẩm và tên cho từng popup-cart hiện ra
var button_cart = document.querySelectorAll('.product-cart');
var cart_popup_title = document.querySelector('.cart-name-shoes')
var product_title_ = document.querySelectorAll('.product-title');
var popup_cart_img = document.querySelector(".cart-popup-avatar");
var product_img_ = document.querySelectorAll(".product-images");

console.log(popup_cart_img);
for (let i = 0; i < button_cart.length; i++) {
	
	button_cart[i].onclick = function(){
		
		let text_cart_popup = product_title_[i].innerText;

		cart_popup_title.innerText = text_cart_popup;

		let img_cart_product = product_img_[i].getAttribute('src');
		

		popup_cart_img.setAttribute('src', img_cart_product);
		
	}
}




//js cho facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
