 document.addEventListener("DOMContentLoaded",function(){
 	// khai bao doi tuong can su dung
 var nut =document.querySelectorAll(".chuyenslide ul li");
 // khai bao bien chua mang cac phan tu slide
 var slides = document.querySelectorAll(".cacslide ul li");
 var thoigian = setInterval(function(){ autoSlide()},5000) // setInterval(function(){},5000) la cu sau moi 5s thi no lai goi lai ham nay

 // nut tra ve mot mang
 for (var i = 0; i < nut.length; i++) {
 	// bat su kien cho tung nut
 	nut[i].addEventListener("click",function(){
 		// truoc tien click vao thi phai huy tu chuyen dong da
 		clearInterval(thoigian);
 		// bo tat ca mau den di
 		for (var i = 0; i < nut.length; i++) {
 			nut[i].classList.remove("kichhoat");
 		}
 		this.classList.add("kichhoat");
 		// het xu ly mau nut slide 
 		// XU LY PHAN TINH VI TRI
 		var nutkichhoat =this;
 		var vitrinut=0;
 		for (vitrinut = 0; nutkichhoat=nutkichhoat.previousElementSibling; vitrinut++) {//nutkichhoat.previousElementSibling la khi kich vao mot nut thi no se xem xet phan tu truoc no, vi tri nut bat dau tinh tu 0, nhu khi nhan nut o vi tri 0 thi vi tri truoc no se la null thi no se dung lai va tra ve vi tri no =0 va + 1 vao cac nut sau do vi vong lap for se tang len 1 	
 		}
 		for (var i = 0; i < slides.length; i++) {
 			slides[i].classList.remove("active");
 			slides[vitrinut].classList.add("active");
 		}
 	})
 }   //het su kien cho nut

	// Viet ham tu chuyen slide
 	
 	function autoSlide(){
 		//Buoc 1: xem slide nao dang hien thi
 		var vitrislide = 0;
 		var slideHienTai= document.querySelector(".cacslide ul li.active");
 		for (vitrislide = 0; slideHienTai=slideHienTai.previousElementSibling; vitrislide++) {}//slideHienTai.previousElementSibling la khi kich vao mot nut thi no se xem xet phan tu truoc no, vi tri nut bat dau tinh tu 0, nhu khi nhan nut o vi tri 0 thi vi tri truoc no se la null thi no se dung lai va tra ve vi tri no =0 va + 1 vao cac nut sau do vi vong lap for se tang len 1
 		// neu ma chua den slide cuoi cung tuc la vitrislide <= slides.length => hoat dong binh thuong
 		if(vitrislide <( slides.length-1)){
 			//Buoc 2 : 
 			//Cho slide va nut  an het di
 			for (var i = 0; i < slides.length; i++) {
 				slides[i].classList.remove("active");
 				nut[i].classList.remove("kichhoat");
 			}
 			//Cho phan tu tiep theo cua slide hien ra
 			slides[vitrislide].nextElementSibling.classList.add("active");
 			nut[vitrislide].nextElementSibling.classList.add("kichhoat");
 		}
 		else{
 			//Cho slide va nut  an het di
 			for (var i = 0; i < slides.length; i++) {
 				slides[i].classList.remove("active");
 				nut[i].classList.remove("kichhoat");
 			}
 			//Cho phan tu tiep theo cua slide hien ra
 			slides[0].classList.add("active");
 			nut[0].classList.add("kichhoat");
 		}
 		
 		
 	}
 },false)
 