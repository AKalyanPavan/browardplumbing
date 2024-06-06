import logo from './../images/logo.png';
import plumber from './../images/plumber.png';
import tradestamp from './../images/tradestamp.png';
import services from './../images/services.jpeg';
import footerimage from './../images/footer-image.png';
import React, { useState, useEffect } from 'react';

function Homepage() {

  const [modalDisplay, setModalDisplay] = useState("hidden");
  const [activeMenuItem, setActiveMenuItem] = useState("ourservices");
  const [activeServicesItem, setactiveServicesItem] = useState("burstpiperepair");
  const [activeFaq, setActiveFaq] = useState("faq2");
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  function onBurgerMenuClicked(){
    document.querySelector("#modal").style.animationName = "slideIn";
    setModalDisplay("");
  }

  function onModalOverlayClicked(){
    document.querySelector("#modal").style.animationName = "slideOut";
    setTimeout(() => {
      setModalDisplay("hidden");
    }, "180");
  }

  function onServiceClicked(serviceId){

    if (!activeServicesItem) {

      let activeService = document.getElementById(serviceId);
      let servicesIcon = activeService.getElementsByClassName('servicesIcon');
      let servicesText = activeService.getElementsByClassName('servicesText');

      servicesText[0].classList.remove("hidden");

      servicesIcon[0].parentElement.classList.remove("bg-[#E0ECF6]");
      servicesIcon[0].parentElement.classList.add("bg-[#EBF3F9]");
      servicesIcon[0].children[0].setAttribute("stroke", "#0064B1");

      servicesIcon[0].style.animationName = "rotate180";
      servicesIcon[0].style.animationDuration = "0.5s";

      setTimeout(() => {
        servicesIcon[0].style.rotate = "180deg"
      }, "400");

      setactiveServicesItem(serviceId);

    } else if (activeServicesItem == serviceId) {

      let activeService = document.getElementById(activeServicesItem);
      let servicesIcon = activeService.getElementsByClassName('servicesIcon');
      let servicesText = activeService.getElementsByClassName('servicesText');

      servicesText[0].classList.add("hidden");

      servicesIcon[0].parentElement.classList.remove("bg-[#EBF3F9]");
      servicesIcon[0].parentElement.classList.add("bg-[#E0ECF6]");
      servicesIcon[0].children[0].setAttribute("stroke", "#5E6B78");

      servicesIcon[0].style.animationName = "rotate0";
      servicesIcon[0].style.animationDuration = "0.5s";

      setTimeout(() => {
        servicesIcon[0].style.rotate = "0deg"
      }, "400");

      setactiveServicesItem("");

    } else {

      let activeService = document.getElementById(activeServicesItem);
      let servicesIcon = activeService.getElementsByClassName('servicesIcon');
      let servicesText = activeService.getElementsByClassName('servicesText');

      servicesText[0].classList.add("hidden");

      servicesIcon[0].parentElement.classList.remove("bg-[#EBF3F9]");
      servicesIcon[0].parentElement.classList.add("bg-[#E0ECF6]");
      servicesIcon[0].children[0].setAttribute("stroke", "#5E6B78");

      servicesIcon[0].style.animationName = "rotate0";
      servicesIcon[0].style.animationDuration = "0.5s";

      // setTimeout(() => {
        servicesIcon[0].style.rotate = "0deg"
      // }, "400");

      activeService = document.getElementById(serviceId);
      servicesIcon = activeService.getElementsByClassName('servicesIcon');
      servicesText = activeService.getElementsByClassName('servicesText');

      servicesText[0].classList.remove("hidden");

      servicesIcon[0].parentElement.classList.remove("bg-[#E0ECF6]");
      servicesIcon[0].parentElement.classList.add("bg-[#EBF3F9]");
      servicesIcon[0].children[0].setAttribute("stroke", "#0064B1");

      servicesIcon[0].style.animationName = "rotate180";
      servicesIcon[0].style.animationDuration = "0.5s";

      setTimeout(() => {
        servicesIcon[0].style.rotate = "180deg"
      }, "400");

      setactiveServicesItem(serviceId);

    }
  }

  function onMenuItemClicked(menuItemId) {
    let activeMenuItemElement = document.getElementById(activeMenuItem);
    let menuItem = activeMenuItemElement.getElementsByClassName("menuItem")[0];
    let menuItemUnderline = activeMenuItemElement.getElementsByClassName("menuItemUnderline")[0];
    menuItem.classList.remove("text-[#0064B1]");
    menuItemUnderline.classList.add("hidden");

    let currentMenuItemElement = document.getElementById(menuItemId);
    menuItem = currentMenuItemElement.getElementsByClassName("menuItem")[0];
    menuItemUnderline = currentMenuItemElement.getElementsByClassName("menuItemUnderline")[0];
    menuItem.classList.add("text-[#0064B1]");
    menuItemUnderline.classList.remove("hidden");
    
    setActiveMenuItem(menuItemId);
  }

  function onFaqClicked(faqId) {

    let faqelm, faqanswer, faqicon;

    if (activeFaq) {
      faqelm = document.getElementById(activeFaq);
      faqanswer = faqelm.getElementsByClassName("faqanswer")[0];
      faqicon = faqelm.getElementsByClassName("faqicon")[0];

      if (faqelm.classList.contains("bg-[#EBF3F9]")) {
        faqanswer.classList.add("hidden");
        faqicon.innerHTML = "+";
        faqelm.classList.remove("bg-[#EBF3F9]");
      } else {
        faqanswer.classList.remove("hidden");
        faqicon.innerHTML = "-";
        faqelm.classList.add("bg-[#EBF3F9]");
      }
    }

    if (activeFaq == faqId) {
      setActiveFaq("");
    } else {
      setActiveFaq(faqId);

      faqelm = document.getElementById(faqId);
      faqanswer = faqelm.getElementsByClassName("faqanswer")[0];
      faqicon = faqelm.getElementsByClassName("faqicon")[0];

      if (faqelm.classList.contains("bg-[#EBF3F9]")) {
        faqanswer.classList.add("hidden");
        faqicon.innerHTML = "+";
        faqelm.classList.remove("bg-[#EBF3F9]");
      } else {
        faqanswer.classList.remove("hidden");
        faqicon.innerHTML = "-";
        faqelm.classList.add("bg-[#EBF3F9]");
      }

    }

  }

  function scrollTestimonial(direction) {
    let testimonialContainerFixed = document.getElementById("testimonialContainerFixed");
    let testimonialContainerParent = document.getElementById("testimonialContainerParent");
    let testimonial = document.getElementsByClassName("testimonial")[0];
    let testimonialIndex = document.getElementsByClassName("testimonialIndex");

    let transformValue;
    let translateXValue;

    if (direction == "initialLeft") {

      translateXValue = ( ( (testimonialContainerFixed.clientWidth ) - ( (testimonial.clientWidth * 3) + (2 * 20)) ) / 2 );
      transformValue = `translateX(${translateXValue}px)`;
      setTranslateX(translateXValue);

    } else if (direction == "left" && activeTestimonial > 0) {

      translateXValue = translateX + testimonial.clientWidth;
      transformValue = `translateX(${translateXValue}px)`;
      setTranslateX(translateXValue);

      setTimeout(function(){
        testimonialIndex[activeTestimonial].children[0].setAttribute("fill", "#EBF3F9");
        testimonialIndex[activeTestimonial - 1].children[0].setAttribute("fill", "#0064B1");
        setActiveTestimonial(activeTestimonial - 1);
      }, 500);

    } else if (direction == "right" && activeTestimonial < 3) {

      translateXValue = translateX - testimonial.clientWidth;
      transformValue = `translateX(${translateXValue}px)`;
      setTranslateX(translateXValue);

      setTimeout(function(){
        testimonialIndex[activeTestimonial].children[0].setAttribute("fill", "#EBF3F9");
        testimonialIndex[activeTestimonial + 1].children[0].setAttribute("fill", "#0064B1");
        setActiveTestimonial(activeTestimonial + 1);
      }, 500);

    }

    testimonialContainerParent.style.transform = transformValue;
  }

  useEffect(() => {
    let activeService = document.getElementById(activeServicesItem);

    if (activeService) {
      let servicesIcon = activeService.getElementsByClassName('servicesIcon');
      if (servicesIcon[0].style.rotate != "180deg") {
        servicesIcon[0].style.rotate = "180deg"
      }
    }

    if (translateX == 0) {
      scrollTestimonial("initialLeft");
    }

  });

  return (
    <div className="">

      {/*Modal*/}
      <div 
        id="modalOverlay" 
        className={"w-[100%] bg-[#7f808080] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay} 
        onClick={onModalOverlayClicked}>

        <div 
          style={{
            animationName: "slideIn",
            animationDuration: "0.2s"
          }}
          id="modal" 
          className={"w-[260px] bg-[#FFFFFF] fixed top-[0px] left-[0px] h-[100%] top-[100px]" + modalDisplay}>

          <div id="modalContent" className="p-[20px]">
            <div className="flex mb-[40px]">
              <img src={logo} width="200px" />
            </div>
            <div className="text-[16px] font-medium text-left">
              <div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('home')}>Home</div>
              <div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('ourservices')}>Our Services</div>
              <div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('coupons')}>
                Coupons
                <span className="text-[8px] bg-[#FFD234] rounded-[40px] px-[8px] py-[4px] font-medium w-max">SAVE MORE</span>
              </div>
              <div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('aboutus')}>About us</div>
              <div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('blog')}>Blog</div>
              <div className="bg-[#000000] text-[#FFFFFF] px-[16px] py-[12px] rounded-[8px] w-max">Contact Us</div>
            </div>
          </div>

        </div>

      </div>

      {/*Banner*/}
      <div className="w-[100%] h-[80px] bg-[#000000] text-[#8e97a1] text-[14px] font-normal flex top-[0px] sticky z-[1]">
        <div className="flex justify-between max-[1000px]:justify-end w-[1500px] mx-auto items-center md:px-[50px] px-[20px]">
          <div className="max-[1000px]:hidden">
            Currently Serving Broward County & Southern Florida Areas
          </div>
          <div className="flex items-center">
            <div className="flex items-center border-[solid] max-[768px]:border-[2px] border-[#C6F28E] rounded-[50%] p-[10px]">
              <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1778 16.42V19.42C21.1789 19.6985 21.1219 19.9742 21.0103 20.2293C20.8987 20.4845 20.7351 20.7136 20.5299 20.9019C20.3246 21.0901 20.0824 21.2335 19.8185 21.3227C19.5547 21.4119 19.2752 21.4451 18.9978 21.42C15.9206 21.0856 12.9648 20.0341 10.3678 18.35C7.95162 16.8147 5.90313 14.7662 4.36779 12.35C2.67777 9.7412 1.62603 6.77099 1.29779 3.68C1.2728 3.40347 1.30566 3.12476 1.39429 2.86162C1.48292 2.59849 1.62536 2.35669 1.81256 2.15162C1.99975 1.94655 2.22759 1.78271 2.48158 1.67052C2.73557 1.55833 3.01013 1.50026 3.28779 1.5H6.28779C6.7731 1.49522 7.24358 1.66708 7.61155 1.98353C7.97952 2.29999 8.21987 2.73945 8.28779 3.22C8.41441 4.18007 8.64924 5.12273 8.98779 6.03C9.12233 6.38792 9.15145 6.77691 9.0717 7.15088C8.99194 7.52485 8.80665 7.86811 8.53779 8.14L7.26779 9.41C8.69135 11.9135 10.7642 13.9864 13.2678 15.41L14.5378 14.14C14.8097 13.8711 15.1529 13.6858 15.5269 13.6061C15.9009 13.5263 16.2899 13.5555 16.6478 13.69C17.5551 14.0286 18.4977 14.2634 19.4578 14.39C19.9436 14.4585 20.3872 14.7032 20.7043 15.0775C21.0215 15.4518 21.19 15.9296 21.1778 16.42Z" stroke="#C6F28E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="pl-[10px] max-[768px]:hidden">24 hour service</span>
            </div>
            <span className="pl-[10px] min-[769px]:hidden">24 hour service</span>
            <div className="border-[solid] border-[2px] border-[#C6F28E] text-[#C6F28E] px-[20px] py-[5px] rounded-[10px] mx-[20px] max-[768px]:hidden">
              954-516-7777
            </div>
            <div className="border-[solid] border-[2px] border-[#C6F28E] text-[#C6F28E] px-[20px] py-[5px] rounded-[10px] max-[768px]:hidden">
              561-570-7777
            </div>
          </div>
        </div>
      </div>

      {/*Header*/}
      <div className="w-[100%] font-normal text-[14px] font-medium">
        <div className="min-[1500px]:w-[1500px] w-[100%] md:px-[50px] px-[20px] mx-auto mt-[30px] flex justify-between">
          <div>
            <img src={logo} width="200px" />
          </div>
          <div className="flex items-center max-[1050px]:hidden hidden">
            <div id="home" className="mr-[50px] cursor-pointer" onClick={() => onMenuItemClicked('home')}>
              <div className="hover:text-[#0064B1] menuItem">Home</div>
              <div className="h-[2px] w-[100%] bg-[#0064B1] mt-[5px] hidden menuItemUnderline"></div>
            </div>
            <div id="ourservices" className="mr-[10px] cursor-pointer" onClick={() => onMenuItemClicked('ourservices')}>
              <div className="hover:text-[#0064B1] text-[#0064B1] menuItem">Our Services</div>
              <div className="h-[2px] w-[100%] bg-[#0064B1] mt-[5px] menuItemUnderline"></div>
            </div>
            <div id="coupons" className="mr-[20px] cursor-pointer" onClick={() => onMenuItemClicked('coupons')}>
              <div className="text-[8px] bg-[#FFD234] rounded-[40px] px-[8px] py-[4px] font-medium ml-[60px]">SAVE MORE</div>
                <div className="hover:text-[#0064B1] mb-[20px] w-max mx-auto menuItem">
                  Coupons
                  <div className="h-[2px] w-[100%] bg-[#0064B1] mt-[5px] hidden menuItemUnderline"></div>
                </div>
            </div>
            <div id="aboutus" className="mr-[50px] cursor-pointer" onClick={() => onMenuItemClicked('aboutus')}>
              <div className="hover:text-[#0064B1] menuItem">About us</div>
              <div className="h-[2px] w-[100%] bg-[#0064B1] mt-[5px] hidden menuItemUnderline"></div>
            </div>
            <div id="blog" className="cursor-pointer" onClick={() => onMenuItemClicked('blog')}>
              <div className="hover:text-[#0064B1] menuItem">Blog</div>
              <div className="h-[2px] w-[100%] bg-[#0064B1] mt-[5px] hidden menuItemUnderline"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center bg-[#EBF3F9] px-[16px] py-[12px] rounded-[8px] cursor-pointer">
              <div>Location</div>
              <svg className="mt-[3px] ml-[10px]" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 6L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="ml-[20px] bg-[#000000] text-[#FFFFFF] px-[16px] py-[12px] rounded-[8px] cursor-pointer">Contact Us</div>
            <div className="border-[#000000] border-[2px] border-solid p-[5px] rounded-[5px] min-[1051px]:hidden hidden cursor-pointer ml-[20px]" onClick={onBurgerMenuClicked}>
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/*section 1*/}
      <div className="mt-[50px] w-[100%]">
        <div className="min-[1500px]:w-[1500px] w-[100%] flex mx-auto px-[20px] md:px-[50px]">
          <div className="">
            <div className="hidden flex text-[#5E6B78] text-[14px] items-center leading-[21px] border-solid border-[1px] border-[#EBF3F9] px-[16px] py-[8px] rounded-[8px] w-max">
              <span>Plumbing Services</span>
              <svg className="mt-[3px] ml-[10px]" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 6L9 1" stroke="#5E6B78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="text-[48px] font-semibold leading-[64px] tracking-[-2%] text-left">
              24 Hr Emergency Plumbing Services
            </div>
            <div className="my-[40px]">
              <div className="flex items-center mb-[15px]">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="text-[16px] font-normal ml-[10px] text-left">
                  Warranty On Repairs & Installation
                </div>
              </div>
              <div className="flex items-center mb-[15px]">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="text-[16px] font-normal ml-[10px]">
                  On-Site Within 45 Mins
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="text-[16px] font-normal ml-[10px]">
                  24/7 Services
                </div>
              </div>
            </div>
            <div className="w-max px-[32px] py-[16px] rounded-[8px] bg-[#0064B1] text-[#FFFFFF] font-medium cursor-pointer text-[16px]">
              Schedule an appointment
            </div>
            <div className="w-max mt-[15px] text-[16px]">
              or Call <span className="text-[#0064B1] font-bold cursor-pointer">954-516-7777</span>
            </div>
          </div>
          <div className="w-[80%] max-[1050px]:hidden">
            <img src={plumber} className="w-[100%] rounded-[24px]"/>
          </div>
        </div>

        <div className="min-[1500px]:w-[1500px] w-[100%] min-[1200px]:flex mx-auto px-[20px] md:px-[50px] justify-between mt-[50px]">
          <div className="flex p-[25px] border-solid border-[1px] rounded-[24px] justify-around w-fit">
            <div className="text-left w-[60%]">
              <div className="text-[20px] font-medium mb-[10px]">
                Coupons and Deals
              </div>
              <div className="text-[12px] text-[#5E6B78] mb-[20px]">
                Get $25 Off Drain & Plumbing Camera Inspections
              </div>
              <div className="text-[14px] font-semibold text-[#0064B1] flex items-center cursor-pointer w-max">
                View more offers
                <svg className="mt-[2px] ml-[8px]" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L6 5L1 1" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="p-[20px] h-fit bg-[#E1FFC3] rounded-[50%] w-fit">
              <svg className="" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1526 3.06781L3.06784 20.1526" stroke="#4F7B23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.89832 7.94917C6.58326 7.94917 7.94917 6.58326 7.94917 4.89832C7.94917 3.21338 6.58326 1.84747 4.89832 1.84747C3.21338 1.84747 1.84747 3.21338 1.84747 4.89832C1.84747 6.58326 3.21338 7.94917 4.89832 7.94917Z" stroke="#4F7B23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3221 21.3729C20.007 21.3729 21.3729 20.007 21.3729 18.322C21.3729 16.6371 20.007 15.2712 18.3221 15.2712C16.6371 15.2712 15.2712 16.6371 15.2712 18.322C15.2712 20.007 16.6371 21.3729 18.3221 21.3729Z" stroke="#4F7B23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex p-[25px] border-solid border-[1px] rounded-[24px] justify-around min-[1200px]:mx-[20px] max-[1199px]:my-[20px] min-[440px]:w-[397px]">
            <div className="text-left">
              <div className="text-[20px] font-medium mb-[10px]">
                Broward Promise
              </div>
              <div className="flex items-center">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="font-normal ml-[10px] text-[#5E6B78] text-[12px]">
                  Verified Professionals
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="font-normal ml-[10px] text-[#5E6B78] text-[12px] my-[10px]">
                  Hassle Free Booking
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#EFF0F2] w-max p-[8px] rounded-[50%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="font-normal ml-[10px] text-[#5E6B78] text-[12px]">
                  Transparent Pricing
                </div>
              </div>
            </div>
            <div className="">
              <img src={tradestamp} width="63"/>
            </div>
          </div>
          <div className="flex p-[25px] rounded-[24px] justify-around w-fit bg-[#FFFAEA] min-[440px]:w-[397px]">
            <div className="text-left w-[60%]">
              <div className="text-[14px] font-normal">
                Great service! Professional, responded in a timely manner. I would definitely use this company again.
              </div>
              <div className="font-medium text-[16px] mt-[12px]">
                Cynthia Buchanan 
              </div>
            </div>
            <div className="p-[20px] h-fit bg-[#FFF2C3] rounded-[50%] w-fit">
              <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4169 18.0434V11.9518C13.4169 9.38153 13.6996 7.14538 14.2651 5.24337C14.8305 3.34137 15.7044 1.59357 16.8867 0H22.5157C21.2305 1.64498 20.2281 3.34136 19.5084 5.08916C18.7888 6.78554 18.4289 8.37912 18.4289 9.86988H22.4386V18.0434H13.4169ZM0 18.0434V11.9518C0 9.43293 0.257028 7.22249 0.771084 5.32048C1.33655 3.36707 2.21044 1.59357 3.39277 0H9.09879C7.81365 1.64498 6.81124 3.34136 6.09157 5.08916C5.37189 6.78554 5.01205 8.37912 5.01205 9.86988H9.02169V18.0434H0Z" fill="#776628"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] w-[100%]">
        <div className="min-[1500px]:w-[1500px] w-[100%] mx-auto px-[20px] md:px-[50px]">
          <div className="font-medium text-[40px] mx-auto mt-[100px] mb-[50px]">Why Choose Us</div>
          <div className="grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 grid gap-y-[50px] gap-x-[50px] justify-items-center"> 
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Certified and Licensed</div>
              <div className="font-normal text-[14px] leading-[24px]">All of our plumbers are certified, insured, and state-licensed. Broward Plumbing is also approved by Home Advisor.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Family-Owned and Operated</div>
              <div className="font-normal text-[14px] leading-[24px]">We are a family-run business with 10+ years of experience servicing the Broward County community.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Free Phone Consultations</div>
              <div className="font-normal text-[14px] leading-[24px]">Looking for an estimate? We provide free consultations over the phone. We promise to be transparent and fair with our pricing.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Service Warranty</div>
              <div className="font-normal text-[14px] leading-[24px]">We stand behind our repairs and installations. We offer warranties on our work and service programs.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Advanced Technology and Equipment</div>
              <div className="font-normal text-[14px] leading-[24px]">We use cutting-edge technology to diagnose any plumbing issue. We correctly identify any & all hidden plumbing issues with our robotic camera inspection.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Flexible Scheduling Options</div>
              <div className="font-normal text-[14px] leading-[24px]">We specialize in residential and commercial property management, offering a wide range of plumbing services.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">24-Hour Services</div>
              <div className="font-normal text-[14px] leading-[24px]">We have on-call technicians available 24 hours a day, 7 days a week for any plumbing emergency.</div>
            </div>
            <div className="w-[300px] text-left">
              <div className="font-semibold text-[18px] mb-[10px]">Upfront Pricing</div>
              <div className="font-normal text-[14px] leading-[24px]">We are upfront and reasonable with our pricing, offering comprehensive quotes before the work begins, so there is never additional 'surprise' costs.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[100px] bg-gradient-to-b from-[#FFFFFF] from-50% to-[#E0ECF6] to-50%">
        <div className="min-[1500px]:w-[1500px] w-[100%] mx-auto px-[20px] md:px-[50px]">
          <div className="bg-[#0064B1] rounded-[24px] min-[1000px]:px-[100px] px-[50px] py-[70px]">
            <div className="text-[#FFFFFF] font-medium text-[40px] leading-[54px] text-left">
              <div>Get Emergency</div>
              <div>Plumbing Services Now</div>
            </div>
            <ol className="list-decimal text-left text-[#C8CDD1] font-normal text-[16px] leading-[28px] ml-[20px] my-[30px]">
              <li>Call Broward Plumbing for 24-hour service.</li>
              <li className="my-[10px]">Our team of plumbers will arrive on the scene within an hour to assess the situation and provide a quote.</li>
              <li className="xl:w-[800px]">We'll get work with water leak detection, drain unclogging, sewer line repair, or any other plumbing service you need in Boca Raton, Fort Lauderdale, and throughout Broward County.</li>
            </ol>
            <div className="min-[600px]:flex block items-center">
              <div className="bg-[#091119] cursor-pointer text-[#FFFFFF] px-[32px] py-[16px] rounded-[8px] font-medium text-[16px] w-max">Call 954-516-7777</div>
              <div className="flex items-center cursor-pointer min-[600px]:ml-[30px] ml-[5px] text-[#FFFFFF] font-medium max-[600px]:mt-[30px]">
                Schedule an Appointment
                <svg className="mt-[2px] ml-[10px]" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L6 5L1 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#E0ECF6] pb-[100px]">
        <div className="min-[1500px]:w-[1500px] w-[100%] mx-auto px-[20px] md:px-[50px]">
          <div className="pt-[100px] font-medium text-[40px] leading-[54px] lg:w-[800px] mx-auto">Our Emergency Residential and Commercial Plumbing Services</div>
          <div className="md:flex justify-between mt-[100px]">
            <div className="min-[400px]:w-[350px] mx-auto">
              <div className="services" id="burstpiperepair">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => onServiceClicked("burstpiperepair")}>
                  <div className="font-semibold text-[18px]">Burst Pipe Repair</div>
                  <div className="bg-[#EBF3F9] p-[15px] rounded-[50%]">
                    <svg className="mt-[3px] servicesIcon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                      <path d="M1 1L5 6L9 1" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-left w-[80%] text-[14px] font-normal servicesText">A burst pipe can happen without warning. Our expert repair team of emergency plumbers in Broward County offer urgent repair to mitigate water damage and maintain plumbing functionality.</div>
              </div>

              <div className="h-[1px] w-[100%] bg-[#C2DAEC] my-[10px]"></div>

              <div className="services" id="cloggeddrainsandtoilets">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => onServiceClicked("cloggeddrainsandtoilets")}>
                  <div className="font-semibold text-[18px]">Clogged Drains & Toilets</div>
                  <div className="bg-[#E0ECF6] p-[15px] rounded-[50%] cursor-pointer">
                    <svg className="mt-[3px] servicesIcon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                      <path d="M1 1L5 6L9 1" stroke="#5E6B78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-left w-[80%] text-[14px] font-normal hidden servicesText">A burst pipe can happen without warning. Our expert repair team of emergency plumbers in Broward County offer urgent repair to mitigate water damage and maintain plumbing functionality.</div>
              </div>

              <div className="h-[1px] w-[100%] bg-[#C2DAEC] my-[10px]"></div>

              <div className="services" id="waterheaterrepairs">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => onServiceClicked("waterheaterrepairs")}>
                  <div className="font-semibold text-[18px]">Water Heater Repairs</div>
                  <div className="bg-[#E0ECF6] p-[15px] rounded-[50%] cursor-pointer">
                    <svg className="mt-[3px] servicesIcon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                      <path d="M1 1L5 6L9 1" stroke="#5E6B78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-left w-[80%] text-[14px] font-normal hidden servicesText">A burst pipe can happen without warning. Our expert repair team of emergency plumbers in Broward County offer urgent repair to mitigate water damage and maintain plumbing functionality.</div>
              </div>

              <div className="h-[1px] w-[100%] bg-[#C2DAEC] my-[10px]"></div>

              <div className="services" id="waterleakdetection">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => onServiceClicked("waterleakdetection")}>
                  <div className="font-semibold text-[18px]">Water Leak Detection</div>
                  <div className="bg-[#E0ECF6] p-[15px] rounded-[50%] cursor-pointer">
                    <svg className="mt-[3px] servicesIcon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                      <path d="M1 1L5 6L9 1" stroke="#5E6B78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-left w-[80%] text-[14px] font-normal hidden servicesText">A burst pipe can happen without warning. Our expert repair team of emergency plumbers in Broward County offer urgent repair to mitigate water damage and maintain plumbing functionality.</div>
              </div>
            </div>
            <div className="ml-[100px] w-[60%] md:block hidden">
              <img src={services} className="rounded-[24px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#FFFFFF] tracking-[1px]">
        <div className="min-[1500px]:w-[1500px] w-[100%] mx-auto px-[20px] md:px-[50px]">
          <div id="testimonialContainerFixed" className="overflow-hidden">
            <div className="text-[40px] font-medium pt-[80px]">What Our Customers Say</div>
            <div id="testimonialContainerParent" className="flex w-[800%]" style={{
              transition: 'transform 0.5s ease-in-out'
            }}>
                <div className="bg-[#8ADCFF] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] w-[555px] text-left text-[16px] mr-[20px] testimonial">
                  <div className="">
                    “I came home from work, ready to start my vacation, to find my toilet kept running. I called one plumbing company but they had nobody to send. I called Broward plumbing and David promised me someone within 20 minutes. Omar arrived promptly. He was courteous and professional. My problem was fixed within 45 minutes of my call.”
                  </div>
                  <div className="mt-[20px]">
                    <span className="font-semibold">Service used:</span> Toilet Repair
                  </div>
                  <div className="text-[24px] font-semibold mt-[30px]">
                    Rain Hickey
                  </div>
                </div>
                <div className="bg-[#FFDF73] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] w-[555px] text-left text-[16px] mr-[20px] testimonial">
                  <div className="">
                    “I came home from work, ready to start my vacation, to find my toilet kept running. I called one plumbing company but they had nobody to send. I called Broward plumbing and David promised me someone within 20 minutes. Omar arrived promptly. He was courteous and professional. My problem was fixed within 45 minutes of my call.”
                  </div>
                  <div className="mt-[20px]">
                    <span className="font-semibold">Service used:</span> Toilet Repair
                  </div>
                  <div className="text-[24px] font-semibold mt-[30px]">
                    Rain Hickey
                  </div>
                </div>
                <div className="bg-[#E0FF88] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] w-[555px] text-left text-[16px] mr-[20px] testimonial">
                  <div className="">
                    “I came home from work, ready to start my vacation, to find my toilet kept running. I called one plumbing company but they had nobody to send. I called Broward plumbing and David promised me someone within 20 minutes. Omar arrived promptly. He was courteous and professional. My problem was fixed within 45 minutes of my call.”
                  </div>
                  <div className="mt-[20px]">
                    <span className="font-semibold">Service used:</span> Toilet Repair
                  </div>
                  <div className="text-[24px] font-semibold mt-[30px]">
                    Rain Hickey
                  </div>
                </div>
                <div className="bg-[#8ADCFF] sm:px-[52px] sm:py-[40px] px-[30px] py-[30px] mt-[60px] rounded-[24px] w-[555px] text-left text-[16px] mr-[20px] testimonial">
                  <div className="">
                    “I came home from work, ready to start my vacation, to find my toilet kept running. I called one plumbing company but they had nobody to send. I called Broward plumbing and David promised me someone within 20 minutes. Omar arrived promptly. He was courteous and professional. My problem was fixed within 45 minutes of my call.”
                  </div>
                  <div className="mt-[20px]">
                    <span className="font-semibold">Service used:</span> Toilet Repair
                  </div>
                  <div className="text-[24px] font-semibold mt-[30px]">
                    Rain Hickey
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-[50px] flex items-center justify-center">
            <div className="bg-[#EBF3F9] p-[15px] rounded-[50%] w-fit cursor-pointer" onClick={() => scrollTestimonial("left")}>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L1 5L6 1" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="flex mx-[30px]">
              <svg className="mr-[10px] testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#EBF3F9"/>
              </svg>
              <svg className="mr-[10px] testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#0064B1"/>
              </svg>
              <svg className="mr-[10px] testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#EBF3F9"/>
              </svg>
              <svg className="testimonialIndex" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#EBF3F9"/>
              </svg>
            </div>
            <div className="bg-[#EBF3F9] p-[15px] rounded-[50%] w-fit cursor-pointer" onClick={() => scrollTestimonial("right")}>
              <svg className="mt-[2px] ml-[3px]" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L6 5L1 1" stroke="#0064B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#FFFFFF]">
        <div className="min-[800px]:w-[800px] w-[100%] mx-auto px-[20px] md:px-[50px]">
          <div className="font-medium text-[40px] mb-[70px] my-[80px]">Emergency Plumbing FAQs</div>
          <div>
            <div id="faq1" className="px-[30px] py-[20px] rounded-[12px] text-left cursor-pointer faq" onClick={() => onFaqClicked('faq1')}>
              <div className="flex justify-between font-medium text-[18px]">
                <div className="faqquestion">How do I lower my plumbing pressure?</div>
                <div className="faqicon">+</div>
              </div>
              <div className="mt-[20px] w-[90%] hidden faqanswer"> 
                In hot climates, pipes can burst due to excessive heat, which can cause the pipes to expand and contract. Pipes exposed to direct sunlight or located in improperly ventilated areas can be particularly susceptible to bursting. Additionally, high water pressure can also contribute to burst pipes in hot climates. It's important to have your pipes regularly inspected and maintained by a professional to prevent any potential issues.
              </div>
            </div>

            <div id="faq2" className="px-[30px] py-[20px] rounded-[12px] text-left bg-[#EBF3F9] cursor-pointer faq" onClick={() => onFaqClicked('faq2')}>
              <div className="flex justify-between font-medium text-[18px]">
                <div className="faqquestion">Where do pipes usually burst?</div>
                <div className="faqicon">-</div>
              </div>
              <div className="mt-[20px] w-[90%] faqanswer"> 
                In hot climates, pipes can burst due to excessive heat, which can cause the pipes to expand and contract. Pipes exposed to direct sunlight or located in improperly ventilated areas can be particularly susceptible to bursting. Additionally, high water pressure can also contribute to burst pipes in hot climates. It's important to have your pipes regularly inspected and maintained by a professional to prevent any potential issues.
              </div>
            </div>
            
            <div id="faq3" className="px-[30px] py-[20px] rounded-[12px] text-left cursor-pointer faq" onClick={() => onFaqClicked('faq3')}>
              <div className="flex justify-between font-medium text-[18px]">
                <div className="faqquestion">How do you prevent emergency plumbing?</div>
                <div className="faqicon">+</div>
              </div>
              <div className="text-left mt-[20px] w-[90%] hidden faqanswer"> 
                In hot climates, pipes can burst due to excessive heat, which can cause the pipes to expand and contract. Pipes exposed to direct sunlight or located in improperly ventilated areas can be particularly susceptible to bursting. Additionally, high water pressure can also contribute to burst pipes in hot climates. It's important to have your pipes regularly inspected and maintained by a professional to prevent any potential issues.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#091119] pb-[100px] mt-[50px] pt-[100px]">
        <div className="min-[1500px]:w-[1500px] w-[100%] mx-auto px-[20px] md:px-[50px] text-[#FFFFFF]">
          <div className="flex justify-between items-center">
            <div className="">
              <div className="text-[40px] font-medium text-left leading-[54px]">Trusted by over 5000+ clients</div>
              <div className="font-normal mt-[40px] text-left">Fix it today and take time to pay and get benefited by our coupons and deals.</div>
              <div className="min-[600px]:flex block items-center mt-[50px]">
                <div className="bg-[#0064B1] cursor-pointer text-[#FFFFFF] px-[32px] py-[16px] rounded-[8px] font-medium text-[16px] w-max">Schedule an Appointment</div>
                <div className="flex items-center min-[600px]:ml-[30px] ml-[5px] text-[#FFFFFF] font-medium max-[600px]:mt-[30px]">
                  Call <span className="cursor-pointer text-[#0064B1] ml-[10px]">954-516-7777</span>
                </div>
              </div>
            </div>
            <div className="ml-[30px] hidden lg:block">
              <img src={footerimage} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Homepage;