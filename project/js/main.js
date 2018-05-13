
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
	
	//hiệu ứng cho phần lên top
	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 600){
			if(status == "duoi"){
				status = "tren"
				up_top.classList.add("show-uptotop");
			}
		}
		else if((window.pageYOffset < 600) || (window.pageYOffset > end_position)){
			if(status == "tren"){
			status = "duoi"
			up_top.classList.remove("show-uptotop");
			}
		}

		//hiệu ứng cho phần load nội dung advertisement
		if(window.pageYOffset > 800){
			if(status1 == "duoi1"){
				status1 = 'tren1'
				adv.classList.add('up_content');
			}
		}

		//hiệu ứng cho phần load nội dung sport
		
		if(window.pageYOffset > 2405){
			// console.log("clgt");
			if(status2 == "duoi2"){
				status2 = 'tren2'
				sport.classList.add('left_content');
			}
		}	

		// Viết hiệu ứng cho phần load menu
		if(window.pageYOffset > 380){
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

	//viết hiệu ứng cho phần xem nhanh sản phẩm
	
	var button_view = document.querySelectorAll('.quick_view');
	var popup = document.querySelector('.sale-popup');
	var popup_content = document.querySelector('.sale-popup-content');
	var popup_title = document.querySelector('.popup-title');
	var product_title = document.querySelectorAll('.product-title');

	var product_img = document.querySelectorAll('.product-images');
	var popup_img = document.querySelector(".popup-img");
	

	for (let i = 0; i < button_view.length; i++) {
			
		button_view[i].onclick = function(){
			popup.classList.add('show-popup');
			popup_content.classList.add('show-popup');
			
			let text_popup = product_title[i].innerText;

				popup_title.innerText = text_popup;

			let img_product = product_img[i].getAttribute('src');
			popup_img.setAttribute('src', img_product);

			console.log(img_product);
			
			}
		}
		popup.onclick = function(){
			this.classList.remove('show-popup');
			popup_content.classList.remove('show-popup');
		}
});



// hiệu ứng cho Slider
document.addEventListener('DOMContentLoaded',function(){
	var circle = document.querySelectorAll(".thumb_nail ul li");
	var slide = document.querySelectorAll('.slider ul li');
	//console.log(slide);

	//Viet hieu ung active cho nut tron
	for (var i = 0; i < circle.length; i++) {
		circle[i].onclick = function(){
			for (var i = 0; i < circle.length; i++) {
				circle[i].classList.remove('active');
			}
			console.log(i); 
			this.classList.add('active');
			
			var button_active = this;
		
			for (var vt = 0; button_active = button_active.previousElementSibling ; vt++) {
			
			}
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('slide-active');
				slide[vt].classList.add('slide-active');
			}
			
		}
	}

})




// viết lại hiệu ứng tích vào rỏ hàng

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
	cart.find('#count-item').text(Citem+ ' item').data('count',Citem);
	$(document).find('.product-cart').removeClass('disable');

	var UCitem = parseInt(cart.find('#count-item').data('count'));
	$(document).find('.cart-amount').text(UCitem+ ' item').data('count',UCitem);

	//Viết hiệu ứng popup cart hiện ra khi click vào thêm vào giỏ hàng

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
		











//js cho facebook-footer
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
