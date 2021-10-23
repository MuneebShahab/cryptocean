import React, { useEffect, useState, useRef } from "react";
import SaleMapItem from "../components/SaleMapItem";
import LightHouseAnimate from "../assets/final-lighthouse.svg";
import WaveBoat from "../assets/CO-ICON_SHIP.png";
import discordBtnImg from "../assets/discord_nonhov.png";
import discordBtnImgHov from "../assets/discord_btn.png";
import discordHovBtn from "../assets/frame_3.png";

import $ from 'jquery';

const SailMap = () => {
const [flag, setFlag] = useState(false)
//   var abc=$('.sailmap-wrapper').attr('id','wajji');
//   var scrollable=$('#wajji').scrollTop();
//  $(document).ready(function(){ 
//   $('#wajji').scroll(function(){  
 
// })
// })

 const scroller = document.querySelector("#scroller");
// const output = document.querySelector("#output");

//   console.log("0000>>>  ",scroller.scrollTop);
  

  const [scroll,setScroll] = useState(0)

setTimeout(() => {
  setFlag(true)
},3000)

if(flag){
  $(document).ready(function(){
    scroller.addEventListener("scroll", event => {
      console.log("===>>> ",scroller.scrollTop);
      var valueofscrol=scroller.scrollTop;
      var imagechange=$('img.boatToAnimate');
    //   if(valueofscrol>670){
    //   imagechange.css('left',valueofscrol)
    // }
    // else{
    //   imagechange.css('left','670px')
    // }

  var abc=$('#scroller').height();
  var mobileheight=$('#scroller').css('height',`${abc}-2`);
 

      if(valueofscrol>=800 && screen.width >= 1540){
        return
      }
      else if( screen.width <= 1450 && screen.width >= 1050 ){

        console.log('1440');
        imagechange.css('left',valueofscrol/2.2)
      
      }
      else if(screen.width>=2000){
        console.log('bara he')
        imagechange.css('left',valueofscrol/0.61)
      }
      else if( screen.width <= 1040 && screen.width >= 770){

        console.log('1020');
        imagechange.css('left',valueofscrol/2.0)
      
      }
      else if(screen.width > 766 && screen.width < 900){
        imagechange.css('left',valueofscrol/0.95)
        console.log('screen.width > 766 && screen.width < 1025')

      }
      else if(screen.width< 456 && screen.width > 400){
        console.log("runningg")
        imagechange.css('left',valueofscrol/6.5 );
      }
      else if (screen.width<350 && screen.width> 300){
        console.log("lower running")
        imagechange.css('left',valueofscrol/12)
      }
      else if(screen.width<400 && screen.width> 350){
      // else if( mobileheight < 340){
      //   imagechange.css('left',(mobileheight/screen.width))
      console.log('akhri else phala if');
      imagechange.css('left',valueofscrol/10)
      } 
      // }
      else{
        console.log('else he');
        imagechange.css('left',valueofscrol*1)
      }

      });
     })
     
    var imagehover= $('.discordBtn img');
    $(imagehover).mouseover(function(){
      $(this).attr('src',discordHovBtn)
    })
    $(imagehover).mouseleave(function(){
      $(this).attr('src',discordBtnImg);
      
    })

}
useEffect(()=>{
  window.addEventListener('scroll', function(event) {
  var abc=document.getElementsByClassName('sailmap-wrapper');  
     event.preventDefault();    if (abc.scrollY <= 50) { 
      console.log("RUNNINGG")
    }
  })

  // return window.removeEventListener('scroll')
  } ,[])

  return (
    <section id="sailmap" className="sailmap">
      <div className="sailmap-animation">
        <img src={WaveBoat} alt="" className="boatToAnimate" />
        <img src={LightHouseAnimate} alt="" className="animation-boat" />
      </div>
      <div className="sailmap-wrapper"  onScroll={() => console.log("I am working")}>
        <h2 className="heading-primary">Sail Map</h2>
        <p className="heading-primary--sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nostrum illo recusandae odit, reprehenderit sunt asperiores
          perferendis dicta molestias beatae!
        </p>

        <div className="scrollWrapper" id="scroller">
          <SaleMapItem
            year={2021}
            month={"Aug"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Sep"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Oct"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Nov"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Dec"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Jan"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Feb"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Mar"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"Apr"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
          <SaleMapItem
            year={2021}
            month={"May"}
            line1={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
            }
            line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          />
        </div>
        <div className="discordBtn">
            <img src={discordBtnImg} alt="" className="nonHov" />
            
        </div>
      </div>
      
    </section>
  );
};

export default SailMap;
