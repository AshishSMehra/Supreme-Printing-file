// {/* <script>
// 	window.onload = codeAddress();
	
// 	function codeAddress() {
// 		 var element = document.querySelectorAll(".qr_modal");
//          element[0].classList.remove('hide');
//         }
	
// 	$(document).ready(function(){
//       if (sessionStorage.getItem("#id_modal") !== 'true'){
//         var element = document.querySelectorAll(".qr_modal");
//          element[0].classList.remove('hide');
//        sessionStorage.setItem('#id_modal', 'true')
// }
		
// 		else{
// 			 var element = document.querySelectorAll(".qr_modal");
//             element[0].classList.add('hide');
// 		}
//     });
// </script>	
	

// <style>
// /* 	.vip_btn {
//     display: none !important;
// } */
// form.wpcf7-form.init p {
//     margin: 0px !important;
// }
	
// input.wpcf7-form-control.wpcf7-submit{
// 		height: fit-content !important;
// 	    background-image: url(https://lifestylephysicians.com/wp-content/uploads/2024/06/Rectangle-39949.png);
// 	}
	
// 	.rc-anchor-normal {
//     height: 70px;
//     width: 200px !important;
// }
	
// 	.form-popup-fatloss p{
// 		line-height: 24px;
// 	}
// </style>


// <script>

// // window.onload = codeAddress;

// // function codeAddress() {
// 			//     var element = document.querySelector(".qr_modal");
// 			//     if (element) {
// 			//         element.classList.remove('hide');
// 			//     }
// 			// }

// 			// $(document).ready(function() {
// 			//     var element = document.querySelector(".qr_modal");
// 			//     if (element) {
// 			//         if (sessionStorage.getItem("#id_modal") !== 'true') {
// 			//             element.classList.remove('hide');
// 			//             sessionStorage.setItem('#id_modal', 'true');
// 			//         } else {
// 			//             element.classList.add('hide');
// 			//         }
// 			//     }
// 			// });


// 			window.onload = codeAddress();

// 		function codeAddress() {
// 		 var element = document.querySelectorAll(".qr_modal");
// 		element[0].classList.remove('hide');
//         }

// 		$(document).ready(function(){
//       if (sessionStorage.getItem("#id_modal") !== 'true'){
//         var element = document.querySelectorAll(".qr_modal");
// 		element[0].classList.remove('hide');
// 		sessionStorage.setItem('#id_modal', 'true')
// }

// 		else{
// 			 var element = document.querySelectorAll(".qr_modal");
// 		element[0].classList.add('hide');
// 		}
//     });

// 		var btn = $('#button-scroll-top');

// 		$(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
// 			btn.addClass('show');
//   } else {
// 			btn.removeClass('show');
//   }
// });

// 		btn.on('click', function(e) {
// 			e.preventDefault();
// 		$('html, body').animate({scrollTop:0}, '300');
// });

// // 		function scrollToTop() {
// 			//     window.scrollTo({
// 			//         top: 0,
// 			//         behavior: 'smooth'
// 			//     });

// 			console.log('123456789');

// // 	function showQRModals() {
// //     var qrModals = document.querySelectorAll('.qr_modal');
// //     qrModals.forEach(function(qrModal) {
// //         qrModal.classList.remove('hide');
// //         qrModal.style.display = 'block';
// //     });
// // }

// // var menuItem = document.querySelector('.mega-menu-item-3232');
// // var btnpopup = document.querySelector('#banner-button-weight-loss');
// // var stickbtn = document.querySelector('.weight-loss-new-sticky');

// // if (menuItem) {
// //     menuItem.addEventListener('click', showQRModals);
// // }

// // if (btnpopup) {
// //     btnpopup.addEventListener('click', showQRModals);
// // }

// // if (stickbtn) {
// //     stickbtn.addEventListener('click', showQRModals);
// // }
	


	
// const slider = document.getElementById('before-after-slider');
// 		const before = document.getElementById('before-image');
// 		const beforeImage = before.getElementsByTagName('img')[0];
// 		const resizer = document.getElementById('resizer');

// 		let active = false;

// 		//Sort overflow out for Overlay Image
// 		document.addEventListener("DOMContentLoaded", function() {
// 			let width = slider.offsetWidth;
// 		console.log(width);
// 		beforeImage.style.width = width + 'px';
// });

// 		//Adjust width of image on resize 
// 		window.addEventListener('resize', function() {
// 			let width = slider.offsetWidth;
// 		console.log(width);
// 		beforeImage.style.width = width + 'px';
// })

// 		resizer.addEventListener('mousedown',function(){
// 			active = true;
// 		resizer.classList.add('resize');

// });

// 		document.body.addEventListener('mouseup',function(){
// 			active = false;
// 		resizer.classList.remove('resize');
// });

// 		document.body.addEventListener('mouseleave', function() {
// 			active = false;
// 		resizer.classList.remove('resize');
// });

// 		document.body.addEventListener('mousemove',function(e){
//   if (!active) return;
// 		let x = e.pageX;
// 		x -= slider.getBoundingClientRect().left;
// 		slideIt(x);
// 		pauseEvent(e);
// });

// 		resizer.addEventListener('touchstart',function(){
// 			active = true;
// 		resizer.classList.add('resize');
// });

// 		document.body.addEventListener('touchend',function(){
// 			active = false;
// 		resizer.classList.remove('resize');
// });

// 		document.body.addEventListener('touchcancel',function(){
// 			active = false;
// 		resizer.classList.remove('resize');
// });

// 		//calculation for dragging on touch devices
// 		document.body.addEventListener('touchmove',function(e){
//   if (!active) return;
// 		let x;

// 		let i;
// 		for (i=0; i < e.changedTouches.length; i++) {
// 			x = e.changedTouches[i].pageX; 
//   }

// 		x -= slider.getBoundingClientRect().left;
// 		slideIt(x);
// 		pauseEvent(e);
// });

// 		function slideIt(x){
// 			let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
// 		before.style.width = transform+"px";
// 		resizer.style.left = transform-0+"px";
// }

// 		//stop divs being selected.
// 		function pauseEvent(e){
//     if(e.stopPropagation) e.stopPropagation();
// 		if(e.preventDefault) e.preventDefault();
// 		e.cancelBubble=true;
// 		e.returnValue=false;
// 		return false;
// }



// 		console.log('sparshtest1234');

// 	</script>


// 	<style>

// /* .page-id-405 .qr_modal{display: none !important;}

// 		.page-id-399 .qr_modal{display: none !important;}

// 		.page-id-411 .qr_modal{display: none !important;} */

// 		nav.pagination a, span.page-numbers.current {
// 			padding: 0.5rem 1rem !important;
// 		margin-right: 10px;
// 		margin-bottom: 20px !important;
// }

// 		.btn.book-now {
// 			background: #efc468;
// 		border-radius: 0;
// 		color: #232323;
// 		display: inline-block;
// 		font-size: 1rem;
// 		height: 50px;
// 		line-height: 50px;
// 		position: fixed;
// 		right: 0;
// 		text-align: center;
// 		text-decoration: none;
// 		text-transform: uppercase;
// 		-moz-transform: rotate(-90deg);
// 		-ms-transform: rotate(-90deg);
// 		-o-transform: rotate(-90deg);
// 		-webkit-transform: rotate(-90deg);
// 		transform-origin: bottom right;
// 		width: 150px;
//   /* Hover styles, 
//   media queries */
// }

// 	</style>
// 	<!-- < a class="btn book-now desktop open-datepicker-popup" href = "javascript:void(0)" title = "Book Now" > Book Now</a > -->

// < !-- < span class="weight-loss-new-sticky" >
// 	IV Therapy < b > @$99</b >
// </span > -->

// <div id="new-cta-primary" class="fixed_cta d-block d-md-none in">
        
//          <a href="https://www.lifestylephysicians.com/contactus/" title="Book an Appointment">
//             Book an Appointment</a>
// 	 <a href="tel:540-680-2426" title="Call Us">
//             Call Us</a>
//       </div>

// <p class="quick-visit-social">
// VISIT :<br>
// 	<a href="https://www.facebook.com/LifestylePhysiciansLLC/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
// 	<a href="https://www.facebook.com/LifestylePhysiciansLLC/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
// 	<br>
// FOR OFFERS & UPDATES
// </p>
// <!-- -->


// <div class="cto">	
// 	<a href="https://lifestylephysicians.com/contact/" class="--cta-contact"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></a>
// 	<a href="tel:5406802426" class="--cta-call"><i class="fa fa-phone-square" aria-hidden="true"></i><span class="mbl-txt">Call Us</span></a></div>

// <!--<ul class="cto-X">
// 	<li class="mal_us">
// 		<a href="https://lifestylephysicians.com/contact/"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> BOOK AN APPOINTMENT</a>
// 	</li>
// 	<li class="cal_us">
// 		<a href="tel: 5406802426"><i class="fa fa-phone" aria-hidden="true"></i> CALL US</a>
// 	</li>
// </ul>-->

// <!-- <button class="btn-scroll-to-top" onclick="scrollToTop()">
// 	<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
// </button> -->

// <a id="button-scroll-top"></a>


// <!-- Sale Banner & Popup	-->
// <!--<div class="event--popup x" style="display: flex; ">
// 	<div class="inner">
// 		<button class="close" data-dismiss="modal" aria-label="Close">X</button>
// 		<div class="row m-0 p-0">
// 			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 img-wrapper">
// 				<img src="https://www.lifestylephysicians.com/wp-content/uploads/2023/01/0001.png" alt="" class="img-fluid web:enable"/>
// 				<img src="https://www.lifestylephysicians.com/wp-content/uploads/2023/01/mobile-1.png" alt="" class="img-fluid mobile:enable"/>
// 			</div>
// 			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0">
// 				<?php echo do_shortcode('[contact-form-7 id="1846" title="VALENTINE’S DAY PARTY 2023"]'); ?>
// 			</div>
// 		</div>
			
// 	</div>
// </div>
 
// <a href="https://www.lifestylephysicians.com/valentines-day-party-2023/" class="page-banner:btn --danger --floating">
// Valentines Day Sale
// </a>-->
// <!-- Sale Banner & Popup Ends -->

// <!--<a href="javascript:void(null);" class="mini-popup-toggle">
// 	Weight Loss Challenge
// </a>-->
// <!--<div class="mini-popup show">
//   <img src="https://www.lifestylephysicians.com/wp-content/uploads/2022/12/weight-loss-2023-web.jpg" class="web:enable"/>
// 	<img src="https://www.lifestylephysicians.com/wp-content/uploads/2022/12/weight-loss-2023-mobile.png" class="mobile:enable"/>
// 	<button class="mini-popup--close" data-collapse="false">
// 		<i class="fa fa-times" aria-hidden="true"></i>
// 	</button>
// 	<ul>
// 		<li>
// 			<a href="https://services.lifestylephysicians.com/weight-loss-challenge/" class="mini-popup--cta --1" target="_blank">Know More</a>	
// 		</li>
// 		<!-<li>
// 			<a href="javacsript:void(0);" class="mini-popup--cta --2" data-popup-openx>Book Now</a>
// 		</li>->
// 	</ul>
// </div>
// -->

// <!-- footer  -->
// <footer class="bg-dark ff" style="background-image:url('/wp-content/uploads/2022/04/footer.webp');">
//   <div class="container">
//     <div class="row">
//       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//         <div class="disclaimer text-center">
//           <a href="javascript:void(0)">disclaimer</a>
//         </div>
//       </div>
//     </div>
// 	  <!-- Break -->
//     <div class="row">
//       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mgb20">
//         <div class="footer_logo_area">
//           <div class="footer-head">
//             <h3>
//               <i class="fa fa-map-marker" aria-hidden="true"></i>Warrenton, VA
//             </h3>
//           </div>
//           <div class="footer_call">
//             <li>
//               <div class="icon-holder">
//                 <i class="fa fa-phone" aria-hidden="true"></i>
//               </div>
//               <div class="text-holder">
//                 <div class="Heading">
//                   <div class="textwidget">
//                     <p>
// 						<b>Phone</b>: <a href="tel:(540) 680-2426">(540) 680-2426</a> <br>
//                       <b>Address</b>: 400 Holiday Ct, Suite 102 Warrenton, VA 20186
// 					  </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
// 			  <li>
//               <div class="icon-holder">
//                 <i class="fa fa-clock-o" aria-hidden="true"></i>
//               </div>
//               <div class="text-holder">
//                 <div class="Heading">
//                   <div class="textwidget">		
//                     <p class="mt-4">                      
// 					<b>Office Timing</b>
//                       <br>  Mon: 08:00 am – 04:00 pm <br>
//                             Tue : 08:00 am – 01:00 pm <br>
//                             Wed & Fri : 08:00 am – 06:00 pm <br> Sat : 08:00 a.m – 2:00 p.m <br> Sun - Thu : Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </div>
//         </div>
//       </div>
//       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mgb20">
//         <div class="footer_logo_area">
//           <div class="footer-head">
//             <h3>
//               <i class="fa fa-map-marker" aria-hidden="true"></i>Culpeper, VA
//             </h3>
//           </div>
//           <div class="footer_call">
//             <li>
//               <div class="icon-holder">
//                 <i class="fa fa-phone" aria-hidden="true"></i>
//               </div>
//               <div class="text-holder">
//                 <div class="footer-head">
//                   <div class="textwidget">
//                     <p>
//                       <b>Phone</b>: <a href="tel:(540) 764-4694">(540) 764-4694</a> <br>
//                       <b>Address</b>: 571 James Madison Hwy, #B, Culpeper, VA 22701
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
// 			  <li>
//               <div class="icon-holder">
//                 <i class="fa fa-clock-o" aria-hidden="true"></i> 
//               </div>
//               <div class="text-holder">
//                 <div class="footer-head">
//                   <div class="textwidget">
//                     <p class="mt-4">
//                       <b>Office Timing</b>
                    
// 						 <br> Wed : 9:00 am – 4:00 pm
//                          <br> Thurs : 8:00am - 5:00 pm
//                     </p>
					  
// 			  <ul class="footer--social-icons">
// 				  <li>
// 				  	<a href="https://www.facebook.com/LifestylePhysiciansLLC/" aria-label="Read more about lifestyle physician on facebook" target="_blank" class="fb"><i class="fa fa-facebook" aria-hidden="true"></i></a>
// 				  </li>
// 				  <li>
// 				  	<a href="https://www.instagram.com/lifestyle_physicians/" aria-label="Read more about lifestyle physician on Instagram" target="_blank" class="insta"><i class="fa fa-instagram" aria-hidden="true"></i></a>
// 				  </li>	
// 				  <li>
// 				  	<a href="https://www.youtube.com/channel/UCeFK_JZVtNTn6Unu1Aq07pw" aria-label="Read more about lifestyle physician on youtube" target="_blank" class="yt"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
// 				  </li>	
// 			  </ul>
			  
// 			  <a href="http://www.copyscape.com/" class="copyright-desclaimer"><img src="//banners.copyscape.com/img/copyscape-stamp-gray-90x90.png" border="0" alt="Protected by Copyscape" title="Protected by Copyscape - Do not copy content from this page." /></a>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </div>
//         </div>
//       </div>
     
//     </div>
//     <!-- /row -->
// 	<div class="row">
// 		<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mgb20">
// 			<div class="footer-head">
// 			  <h4>We Accept Patients From</h4>
// 				<div class="row">
// 					<div class="col-md-6 mblfooter">
// 						<div class="menu-we-accpet-patients-from-menu-container">
// 							<ul id="menu-we-accpet-patients-from-menu" class="menu">
// 							  <li id="menu-item-647" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-647">
// 								<a href="https://lifestylephysicians.com/gainesville/" class="nav-link">Gainesville</a>
// 							  </li>
// 							  <li id="menu-item-646" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-646">
// 								<a href="https://lifestylephysicians.com/manassas/" class="nav-link">Manassas</a>
// 							  </li>
// 							  <li id="menu-item-645" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-645">
// 								<a href="https://lifestylephysicians.com/nokesville/" class="nav-link">Nokesville</a>
// 							  </li>
// 							  <li id="menu-item-644" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-644">
// 								<a href="https://lifestylephysicians.com/haymarket/" class="nav-link">Haymarket</a>
// 							  </li>
// 							  <li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="https://lifestylephysicians.com/bristow/" class="nav-link">Bristow</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Sterling</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Warrenton</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Winchester</a>
// 							  </li>
// 							</ul>
// 						  </div>
// 					</div>
// 					<div class="col-md-6 mblfooter">
// 						<div class="menu-we-accpet-patients-from-menu-container">
// 							<ul id="menu-we-accpet-patients-from-menu" class="menu">
// 							  <li id="menu-item-647" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-647">
// 								<a href="" class="nav-link">Ashburn</a>
// 							  </li>
// 							  <li id="menu-item-646" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-646">
// 								<a href="" class="nav-link">Culpeper</a>
// 							  </li>
// 							  <li id="menu-item-645" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-645">
// 								<a href="" class="nav-link">Fairfax</a>
// 							  </li>
// 							  <li id="menu-item-644" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-644">
// 								<a href="" class="nav-link">Fredericksburg</a>
// 							  </li>
// 							  <li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Leesburg</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">NOVA</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Rappahannock</a>
// 							  </li>
// 								<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-643">
// 								<a href="" class="nav-link">Stafford</a>
// 							  </li>								
// 							</ul>
// 						  </div>
// 					</div>
// 				</div>
			  
// 			</div>
// 		</div>
// 		<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mgb20 offset-6">
// 			<div class="footer-head text-right">
// 			  <h3>Important Links</h3>
// 			  <div class="menu-important-links-menu-container">
// 				<ul id="menu-important-links-menu" class="menu">
// 				  <li id="menu-item-615" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-615">
// 					<a href="https://lifestylephysicians.com/terms-conditions/" class="nav-link">Terms &amp; Conditions</a>
// 				  </li>
// 				  <li id="menu-item-602" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-602">
// 					<a href="https://lifestylephysicians.com/privacy-policy/" class="nav-link">Privacy Policy</a>
// 				  </li>
// 				  <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22">
// 					<a href="https://lifestylephysicians.com/contact/" class="nav-link">Contact Us</a>
// 				  </li>
// 					 <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22">
// 					<a href="https://lifestylephysicians.com/wp-content/uploads/2024/06/No-Surprises-Act-Notification.pdf" target="_blank" class="nav-link">No Surprises Act</a>
// 				  </li>
// 					 <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22">
// 					<a href="https://www.lifestylephysicians.com/reviews/" class="nav-link">Review us</a>
// 				  </li>
				 
// 				  <li id="menu-item-667" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-667">
// 					<a href="https://lifestylephysicians.com/vlog/" class="nav-link">Vlog</a>
// 				  </li>
// 					 <li id="menu-item-668" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-668">
// <!-- 					<a href="https://www.lifestylephysicians.com/download-forms/" class="nav-link">Download Forms</a> -->
// 				  </li>
// 				</ul>
// 			  </div>
// 			</div>
// 		</div>
// 	</div>
	  
	  
// 	  <div class="row bottom-footer">
// <div class="col-md-6 text-left">
// <p class="p-3">
// &copy; Copyright 2024 LifeStyle Physicians, LLC	
// 	</p>


// </div>
// <div class="col-md-6 text-right">
// <p class="p-3">
	
	
// <a class="xenell" href="https://www.xenelsoft.com/">Website Design &amp; Promoted With Passion at Xenelsoft</a>
// 	</p>

// </div>
// </div>
//     <!-- /row -->
//   </div>
// </footer>

//  <div class="vip_btn">
// 	<div class="container">
//     <button class="btn" href="#">
// 	 <img src="https://lifestylephysicians.com/wp-content/uploads/2024/06/SUMMER-SALE.png" class="img-fluid img-responsive" style="width: 150px;">	
// 	</button>
// </div>
// </div>
// <!-----

//  <div class="vip_btn">
// 	<div class="container">
//     <button class="btn" href="#">
// 	 <img src="https://lifestylephysicians.com/wp-content/uploads/2024/07/FILLER-OFFER.png" class="img-fluid img-responsive" style="width: 150px;">	
// 	</button>
// </div>
// </div> 
// ------->
// <!-- <div class="vip_btn">
// 	<span>
// 		 Join our VIP
// 	</ span>
// </div> -->

// <!-- Modal -->

//    <div class="h_demo">
// <div class="qr_modal hide" id="id_modal">
// 		<img src="https://lifestylephysicians.com/wp-content/uploads/2024/07/filler-pop-upodated.png" class="img-fluid qr d-lg-block d-none">
// 	<img src="https://lifestylephysicians.com/wp-content/uploads/2024/07/mob-view-filler-pop-up.png" class="img-fluid qr d-lg-none d-block"> 
// <img src="https://www.lifestylephysicians.com/wp-content/uploads/2023/05/icon_close-removebg-preview.png" class="icon_close">
	
// <div class="form-popup-fatloss">
// <?php echo do_shortcode( '[contact-form-7 id="f700133" title="Summer Sale form"]' ); ?> 
// </div>
//       </div>	 
	
// </div>

// <style>
// 	@media screen and (min-width: 1920px){
// 		.form-popup-fatloss{
// 			top: 48%;
// 		}
// 	}
	
// 	.form-popup-fatloss p{
// 		margin-bottom: 0 !important;
// 	}
	
// 		@media screen and (min-width: 1500px) and (max-width: 1650px) {
//     .qr_modal {
//         width: 45%;
//     }
// }
// </style>


// <!-- <div class="cta_offers">
// 	<a href="https://www.lifestylephysicians.com/grand-opening-offers/">
// 		Grand Opening Offers
// 	</a>
// </div>
// -->

// <!-- <div class="h_demo">
// <div class="qr_modal_2 hide" id="id_modal_2">
// 	<a href="https://www.lifestylephysicians.com/pepfactor-event/#fromppage" target="_blank">
// 		<img src="http://lifestylephysicians.com/wp-content/uploads/2024/01/popup-lsp-fatloss-large.png" class="img-fluid qr">
// 	</a>
// 	<img src="https://www.lifestylephysicians.com/wp-content/uploads/2023/05/icon_close-removebg-preview.png" class="icon_close">
// </div>	
	 
// </div>  -->

// <!--<a href="https://www.lifestylephysicians.com/event/wlc/" class="sticky-btn-right">
// 	<span class="">
// 		Register Here For <br> Weight Loss Challenge!
// 	</span>	
// </a>-->


// <!--<div id="myModal" class="modal fade" role="dialog">
// <div class="modal-dialog">
// <div class="modal-content">
// <div class="modal-body text-center">
// 	<button type="button" class="close" data-dismiss="modal">&times;</button>
// <img src="https://www.lifestylephysicians.com/wp-content/uploads/2021/10/botox-slot-1.jpg" class="img-fluid" alt="popup-img-00">
// <a class="pre-order-btn" href="https://www.lifestylephysicians.com/contactus/" target="_blank">Book an Appointment</a>
// </div>
// </div>

// </div>
// </div> 
// <div id="new-cta-primary" class="fixed_cta d-block d-md-none in">

// <a href="tel:540-680-2426" title="Call Us" class="call_fixed">
// Call Us</a>

// <a href="/contactus/" title="Book an Appointment" class="appoint_fixed">
// Book an Appointment</a>
// </div>

// <!-- Button trigger modal -->




// <!-- end footer  -->
// <div class="dsclmr">
//   <h5> Disclaimer ! </h5>
//   <p> All information presented in this website is intended for informational purposes only and not for the purpose of rendering medical advice. Statements made on this website have not been evaluated by the Food and Drug Administration. The information contained herein is not intended to diagnose, treat, cure or prevent any disease. *Results may vary </p>
//   <span class="dsc-close">
//     <i class="fa fa-times" aria-hidden="true"></i>
//   </span>
// </div>
// <!-- end bottom_footer_area -->
// <script type="text/javascript" src="https://birdeye.com/embed/v7/164727735505394/8/12345680715183" async></script>
// <script type="text/javascript" src="https://birdeye.com/embed/v7/164727735505394/3/1234568021666" async></script>

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
// <script src="<?php echo get_template_directory_uri(); ?>/assets/js/custom.js">
// </script> 

// <script>
	
	
// 	(function (module) {
// 	if (typeof define === 'function' && define.amd) {
// 		// AMD. Register as an anonymous module.
// 		define(['jquery'], module);
// 	} else {
// 		// Browser globals
// 		module(jQuery);
// 	}
// })(function(jQuery, undefined){

// 	var // Number of pixels a pressed pointer travels before movestart
// 	    // event is fired.
// 	    threshold = 6,
	
// 	    add = jQuery.event.add,
	
// 	    remove = jQuery.event.remove,

// 	    // Just sugar, so we can have arguments in the same order as
// 	    // add and remove.
// 	    trigger = function(node, type, data) {
// 	    	jQuery.event.trigger(type, data, node);
// 	    },

// 	    // Shim for requestAnimationFrame, falling back to timer. See:
// 	    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// 	    requestFrame = (function(){
// 	    	return (
// 	    		window.requestAnimationFrame ||
// 	    		window.webkitRequestAnimationFrame ||
// 	    		window.mozRequestAnimationFrame ||
// 	    		window.oRequestAnimationFrame ||
// 	    		window.msRequestAnimationFrame ||
// 	    		function(fn, element){
// 	    			return window.setTimeout(function(){
// 	    				fn();
// 	    			}, 25);
// 	    		}
// 	    	);
// 	    })(),
	    
// 	    ignoreTags = {
// 	    	textarea: true,
// 	    	input: true,
// 	    	select: true,
// 	    	button: true
// 	    },
	    
// 	    mouseevents = {
// 	    	move: 'mousemove',
// 	    	cancel: 'mouseup dragstart',
// 	    	end: 'mouseup'
// 	    },
	    
// 	    touchevents = {
// 	    	move: 'touchmove',
// 	    	cancel: 'touchend',
// 	    	end: 'touchend'
// 	    };


// 	// Constructors
	
// 	function Timer(fn){
// 		var callback = fn,
// 		    active = false,
// 		    running = false;
		
// 		function trigger(time) {
// 			if (active){
// 				callback();
// 				requestFrame(trigger);
// 				running = true;
// 				active = false;
// 			}
// 			else {
// 				running = false;
// 			}
// 		}
		
// 		this.kick = function(fn) {
// 			active = true;
// 			if (!running) { trigger(); }
// 		};
		
// 		this.end = function(fn) {
// 			var cb = callback;
			
// 			if (!fn) { return; }
			
// 			// If the timer is not running, simply call the end callback.
// 			if (!running) {
// 				fn();
// 			}
// 			// If the timer is running, and has been kicked lately, then
// 			// queue up the current callback and the end callback, otherwise
// 			// just the end callback.
// 			else {
// 				callback = active ?
// 					function(){ cb(); fn(); } : 
// 					fn ;
				
// 				active = true;
// 			}
// 		};
// 	}


// 	// Functions
	
// 	function returnTrue() {
// 		return true;
// 	}
	
// 	function returnFalse() {
// 		return false;
// 	}
	
// 	function preventDefault(e) {
// 		e.preventDefault();
// 	}
	
// 	function preventIgnoreTags(e) {
// 		// Don't prevent interaction with form elements.
// 		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
		
// 		e.preventDefault();
// 	}

// 	function isLeftButton(e) {
// 		// Ignore mousedowns on any button other than the left (or primary)
// 		// mouse button, or when a modifier key is pressed.
// 		return (e.which === 1 && !e.ctrlKey && !e.altKey);
// 	}

// 	function identifiedTouch(touchList, id) {
// 		var i, l;

// 		if (touchList.identifiedTouch) {
// 			return touchList.identifiedTouch(id);
// 		}
		
// 		// touchList.identifiedTouch() does not exist in
// 		// webkit yet… we must do the search ourselves...
		
// 		i = -1;
// 		l = touchList.length;
		
// 		while (++i < l) {
// 			if (touchList[i].identifier === id) {
// 				return touchList[i];
// 			}
// 		}
// 	}

// 	function changedTouch(e, event) {
// 		var touch = identifiedTouch(e.changedTouches, event.identifier);

// 		// This isn't the touch you're looking for.
// 		if (!touch) { return; }

// 		// Chrome Android (at least) includes touches that have not
// 		// changed in e.changedTouches. That's a bit annoying. Check
// 		// that this touch has changed.
// 		if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

// 		return touch;
// 	}


// 	// Handlers that decide when the first movestart is triggered
	
// 	function mousedown(e){
// 		var data;

// 		if (!isLeftButton(e)) { return; }

// 		data = {
// 			target: e.target,
// 			startX: e.pageX,
// 			startY: e.pageY,
// 			timeStamp: e.timeStamp
// 		};

// 		add(document, mouseevents.move, mousemove, data);
// 		add(document, mouseevents.cancel, mouseend, data);
// 	}

// 	function mousemove(e){
// 		var data = e.data;

// 		checkThreshold(e, data, e, removeMouse);
// 	}

// 	function mouseend(e) {
// 		removeMouse();
// 	}

// 	function removeMouse() {
// 		remove(document, mouseevents.move, mousemove);
// 		remove(document, mouseevents.cancel, mouseend);
// 	}

// 	function touchstart(e) {
// 		var touch, template;

// 		// Don't get in the way of interaction with form elements.
// 		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

// 		touch = e.changedTouches[0];
		
// 		// iOS live updates the touch objects whereas Android gives us copies.
// 		// That means we can't trust the touchstart object to stay the same,
// 		// so we must copy the data. This object acts as a template for
// 		// movestart, move and moveend event objects.
// 		template = {
// 			target: touch.target,
// 			startX: touch.pageX,
// 			startY: touch.pageY,
// 			timeStamp: e.timeStamp,
// 			identifier: touch.identifier
// 		};

// 		// Use the touch identifier as a namespace, so that we can later
// 		// remove handlers pertaining only to this touch.
// 		add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
// 		add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
// 	}

// 	function touchmove(e){
// 		var data = e.data,
// 		    touch = changedTouch(e, data);

// 		if (!touch) { return; }

// 		checkThreshold(e, data, touch, removeTouch);
// 	}

// 	function touchend(e) {
// 		var template = e.data,
// 		    touch = identifiedTouch(e.changedTouches, template.identifier);

// 		if (!touch) { return; }

// 		removeTouch(template.identifier);
// 	}

// 	function removeTouch(identifier) {
// 		remove(document, '.' + identifier, touchmove);
// 		remove(document, '.' + identifier, touchend);
// 	}


// 	// Logic for deciding when to trigger a movestart.

// 	function checkThreshold(e, template, touch, fn) {
// 		var distX = touch.pageX - template.startX,
// 		    distY = touch.pageY - template.startY;

// 		// Do nothing if the threshold has not been crossed.
// 		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

// 		triggerStart(e, template, touch, distX, distY, fn);
// 	}

// 	function handled() {
// 		// this._handled should return false once, and after return true.
// 		this._handled = returnTrue;
// 		return false;
// 	}

// 	function flagAsHandled(e) {
// 		e._handled();
// 	}

// 	function triggerStart(e, template, touch, distX, distY, fn) {
// 		var node = template.target,
// 		    touches, time;

// 		touches = e.targetTouches;
// 		time = e.timeStamp - template.timeStamp;

// 		// Create a movestart object with some special properties that
// 		// are passed only to the movestart handlers.
// 		template.type = 'movestart';
// 		template.distX = distX;
// 		template.distY = distY;
// 		template.deltaX = distX;
// 		template.deltaY = distY;
// 		template.pageX = touch.pageX;
// 		template.pageY = touch.pageY;
// 		template.velocityX = distX / time;
// 		template.velocityY = distY / time;
// 		template.targetTouches = touches;
// 		template.finger = touches ?
// 			touches.length :
// 			1 ;

// 		// The _handled method is fired to tell the default movestart
// 		// handler that one of the move events is bound.
// 		template._handled = handled;
			
// 		// Pass the touchmove event so it can be prevented if or when
// 		// movestart is handled.
// 		template._preventTouchmoveDefault = function() {
// 			e.preventDefault();
// 		};

// 		// Trigger the movestart event.
// 		trigger(template.target, template);

// 		// Unbind handlers that tracked the touch or mouse up till now.
// 		fn(template.identifier);
// 	}

// }

// // 	// Get the element with class 'mega-menu-item-3232'
// //     var menuItem = document.querySelector('.mega-menu-item-3232');
// //     var btnpopup = document.querySelector('#banner-button-weight-loss');
// //     var stickbtn = document.querySelector('.weight-loss-new-sticky');

// //     // Add a click event listener to the element
// //     menuItem.addEventListener('click', function() {
// //         // Get all elements with class 'qr_modal'
// //         var qrModals = document.querySelectorAll('.qr_modal');

// //         // Loop through each 'qr_modal' element and remove the 'hide' class
// //         qrModals.forEach(function(qrModal) {
// //             qrModal.classList.remove('hide');
// // 			qrModal.style.display = 'block';
// //         });

// //         // Log a message to the console
// //         console.log("sparsh");
// //     });

// // 	 // Add a click event listener to the element
// //     btnpopup.addEventListener('click', function() {
// //         // Get all elements with class 'qr_modal'
// //         var qrModals = document.querySelectorAll('.qr_modal');

// //         // Loop through each 'qr_modal' element and remove the 'hide' class
// //         qrModals.forEach(function(qrModal) {
// //             qrModal.classList.remove('hide');
// // 			qrModal.style.display = 'block';
// //         });

// //         // Log a message to the console
// //         console.log("sparsh");
// //     });

// // 	stickbtn.addEventListener('click', function() {
// //         // Get all elements with class 'qr_modal'
// //         var qrModals = document.querySelectorAll('.qr_modal');

// //         // Loop through each 'qr_modal' element and remove the 'hide' class
// //         qrModals.forEach(function(qrModal) {
// //             qrModal.classList.remove('hide');
// // 			qrModal.style.display = 'block';
// //         });

// //         // Log a message to the console
// //         console.log("sparsh");
// //     });
			

// </script>

// 									<script>

// 										document.addEventListener('DOMContentLoaded', function() {
// 											let demo = document.querySelectorAll("link.yoast-seo-meta-tag");

// 										demo.forEach(function(element) {
// 											let hrefValue = element.getAttribute('href');
// 										if (hrefValue.startsWith('http://')) {
// 											element.setAttribute('href', hrefValue.replace('http://', 'https://'));
//         }
//     });
// });

// 										let demo = document.querySelectorAll("link.yoast-seo-meta-tag");

// 										document.addEventListener('DOMContentLoaded', function() {

// 											demo.href = demo.href.replace('http://', 'https://');
            
//         });


// 										$('.desclaimer--button').click(function(){
// 											$(this).toggleClass('upside-down');

// 										$('.desclaimer--content').toggleClass('show');
		
// 	});

// 										$('.mini-popup--close').click(function() {
// 											$('.mini-popup').removeClass('show');
// 										$('.mini-popup-toggle').addClass('show');
		
// 	});
	
// 	$('.mini-popup-toggle').click(()=>{
// 											$('.mini-popup').addClass('show');
// 										$('.mini-popup-toggle').removeClass('show');
// 	});


// 									// 	Popup 27-10
// 									</script>

// 									<script>

// // $(document).ready(function(){
// 											// if (sessionStorage.getItem("#myModal") !== 'true'){
// 											// $('#myModal').modal('show');
// 											// sessionStorage.setItem('#myModal', 'true')
// 											// }
// 											// });

// 											$(window).scroll(function () {
// 												if ($(this).scrollTop() > 100) {
// 													$('.cta_offers').show();
// 												} else {
// 													$('.cta_offers').hide();
// 												}
// 											});

// 										$('.icon_close').click(function() {
// 											$('#id_modal').hide();
// 	});

// // $(document).ready(function(){

// // 	console.log('ewrf')

// // if (sessionStorage.getItem("#id_modal") !== 'true'){
// // $('#id_modal').addClass('hide');
// // sessionStorage.setItem('#id_modal', 'true')
// // }
// // });

// // 	window.onload = function () {
// //      if (localStorage.getItem("qr_modal") == null) {

// // 		element[0].classList.add('hide');

// //         localStorage.setItem("qr_modal", true);
// //     }
// // }

// // 	$(document).ready(function() {
// //     console.log('Document is ready');

// //     if (sessionStorage.getItem("id_modal") !== 'true') {
// //         $('#id_modal').addClass('hide');
// //         sessionStorage.setItem('id_modal', 'true');
// //     }
// // });
	
// </script>

// 									<script type="text/javascript">
// 										(function( $ ) {
// 											'use strict';
// 										$(document).ready( function(){
//     var $option = $('option:contains("Services")');
// 										$option.attr('disabled',true);
//   });
// })(jQuery)
// 									</script>


// 									<script type="text/javascript">
// 										(function( $ ) {
// 											'use strict';
// 										$(document).ready( function(){
//     var $option = $('option:contains("Location")');
// 										$option.attr('disabled',true);
//   });
// })(jQuery)
// 									</script>




// 									<script type="text/javascript">
// 										(function( $ ) {
// 											'use strict';
// 										$(document).ready( function(){
//     var $option = $('option:contains("Christmas Offers")');
// 										$option.attr('disabled',true);
//   });
// })(jQuery)
// 									</script>

// 									<!-- <script type="text/javascript">
// 										$(document).ready(function () {
// 											$(".event--popup").style.display = "none";
//         });
// 									</script> -->
// 									<script type="text/javascript">
// 										(function( $ ) {
// 											'use strict';
// 										$(document).ready( function(){
//     var $option = $('option:contains("Mother’s Day Sale")');
// 										$option.attr('disabled',true);
//   });
// })(jQuery)
// 									</script>
// 									<script>

// // 	console.log('1234')

// // 	$('.icon_close').click(function() {
// 											// 		$('body').removeClass('noscroll');
// 											// 		$('.qr_modal').addClass('hide');

// 											// 	});


// 											// 	$('.vip_btn').click(function() {		
// 											// 		$('.qr_modal').removeClass('hide');
// 											// 		$('body').addClass('noscroll');

// 											// 	});



// 											// 	$('.icon_close').click(function() {		
// 											// 		$('body').removeClass('noscroll');
// 											// 		$('.qr_modal').addClass('hide');

// 											// 	});


// 											//  	if(localStorage.hasOwnProperty("element")){
// 											// 	 var element = document.querySelectorAll(".qr_modal");
// 											//         element[0].classList.add('hide');
// 											//     }else{
// 											// 	    var element = document.querySelectorAll(".qr_modal");
// 											//          element[0].classList.remove('hide');
// 											//   }


// 											// 	if(localStorage.hasOwnProperty("infiniteScrollEnabled")){
// 											//      console.log("Item exists in localstorage");
// 											//     }else{
// 											//     console.log("Item does not exist in localstoarge");
// 											//    }

// 											// 	if (localStorage[""infiniteScrollEnabled""]) {
// 											//    console.log("Item exists in localstorage");
// 											// }


// 											$(function () {
// 												$('.icon_close').on('click', function () {
// 													$('.qr_modal').addClass('hide');
// 													$('body').removeClass('noscroll');
// 												});

// 												// $('.vip_btn').on('click',function () {
// 												//       $('.qr_modal').removeClass('hide'); 
// 												// 		$('body').addClass('noscroll');
// 												//     });

// 											}
		
	

// 	$(document).ready(function () {
// 												if (window.location.href.includes("#wpcf7-f166-o1")) {
// 													$("#get-a-callback").show();
// 													$(".screen-reader-response p").show();
// 												};
// 												$("#get-a-callback .form-toggler").click(function () {
// 													$("#get-a-callback").hide();
// 													$(".screen-reader-response p").hide();
// 												});
// 												$(".btn-callback").click(function (e) {
// 													e.preventDefault();
// 													$("#get-a-callback").show();
// 												});

// 											});
// 									</script>




// 									<script>
// /*(function () {
//   const second = 1000,
// 										minute = second * 60,
// 										hour = minute * 60,
// 										day = hour * 24;

// 										//I'm adding this section so I don't have to keep updating this pen every year :-)
// 										//remove this if you don't need it
// 										let today = new Date(),
// 										dd = String(today.getDate()).padStart(2, "0"),
// 										mm = String(today.getMonth() + 1).padStart(2, "0"),
// 										yyyy = today.getFullYear(),
// 										nextYear = yyyy + 1,
// 										dayMonth = "01/15/",
// 										birthday = dayMonth + yyyy;

// 										today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
// 											birthday = dayMonth + nextYear;
//   }
// 										//end

// 										const countDown = new Date(birthday).getTime(),
// 										x = setInterval(function() {    

//         const now = new Date().getTime(),
// 										distance = countDown - now;

// 										document.getElementById("days").innerText = Math.floor(distance / (day)),
// 										document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
// 										document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
// 										document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

// 										//do something later when date is reached
// 										if (distance < 0) {
// 											document.getElementById("headline").innerText = "It's my birthday!";
// 										document.getElementById("countdown").style.display = "none";
// 										document.getElementById("content").style.display = "block";
// 										clearInterval(x);
//         }
//         //seconds
//       }, 0)
//   }());*/
// 									</script>

// 									<script>
// 										$(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
// 											$('.header').addClass('mb-sticky');
//     } else {
// 											$('.header').removeClass('mb-sticky');
//     }
// })

// 										$('.btn-sticky-callback').hide();

// 										$(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
// 											$('.btn-sticky-callback').show();
//     } else {
// 											$('.btn-sticky-callback').hide();
//     }
// })

// 									</script>

// 									<script>(function(w, d) {w.CollectId = "64b53dbb5039f4e3b6080a03"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>
// 									<script>
// 										var collectchat = window.collectchat || { };
// 										collectchat.ready = function() {
// 											collectchat.config({
// 												openOnLoad: false
// 											});
// }
// 									</script>
// 									<!-----
// 									<div id='embed_22ol1'><script src='https://app.hybrid.chat/scripts/init.js'></script><script>widget('22ol1','hybrid.chat',{"loadHistory": false});</script></div>
// ---->
// 									<script type="text/javascript">
// 										document.addEventListener( 'wpcf7mailsent', function( event ) {
// 											location = 'https://www.lifestylephysicians.com/thankyou/';
// }, false );
// 									</script>

// 									<script>
// 										$('.vip_btn').on('click',function () {
// 											$(btn).removeClass('hide');
// 										$(btn).show(); 
//     });

// 										var btn = document.querySelector('.qr_modal');
// 										console.log(btn);
// 									</script>

// 									<?php wp_footer();?>

// 								</body>
// 							</html> */}
