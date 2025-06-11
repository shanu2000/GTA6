import React, { useState } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 1,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 1,
      delay: -.8,
      ease: "expo.easeInOut",
      transformBox: "50% 50%",
      opacity: 0,
      // jab mera animation complete ho jai toh y remove kr do animation 0-1 k beech m hoga hmm 0.9 p hi tapka de rhe h
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove()
          setShowContent(true)
          // animation band ho gya hai
          this.kill()
        }
      }
    })
  })

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });
    gsap.to(".character",{
      scale:1.3,
      rotate:0,
      x:"-50%",
      bottom:"-25%",
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });
    gsap.to(".text",{
      scale:1,
      rotate:0,
      // x:"-50%",
      // bottom:"-25%",
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });


    const main = document.querySelector(".main")
    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });

    })
  },[showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className='main w-full rotate-[-10deg] scale-[1.8]'>
        <div className='bg-black landing overflow-x-hidden-hidden relative w-full h-screen'>
          <div className='navbar absolute top-0 left-0 w-full px-10 py-10 z-[10]'>
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[5px]">
                <div className="line bg-white w-15 h-2"></div>
                <div className="line bg-white w-8 h-2"></div>
                <div className="line bg-white w-5 h-2"></div>
              </div>
              <h3 className='text-4xl text-white -mt-[10px] leading-none'>ROCKSTAR</h3>
            </div>
          </div>
          <div className='imagesdiv overflow-hidden relative w-full h-screen'>
            <img src='./sky.png' className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover'></img>
            <img src='./bg.png' className='bg scale-[2] rotate-[-25deg] absolute top-0 left-0 w-full h-full object-cover'></img>
            <div className='text flex flex-col gap-3 text-white absolute scale-[2] rotate-[-10deg] left-1/2 top-10 -translate-x-1/2'>
              <h1 className="text-[6rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[6rem] leading-none -ml-20">theft</h1>
              <h1 className="text-[6rem] leading-none -ml-40">auto</h1>  
            </div>
            <img className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]" src='./girlbg(1).png'></img>
          </div>
          <div className="btmbar absolute bottom-0 left-0 px-5 py-5 bg-gradient-to-t from-black to-transparent w-full ">
            <div className="flex gap-4 text-white items-center">
              <i className="ri-arrow-down-line text-xl"></i>
              <h3 className='font-[Helvetica_Now_Display]'>SCROLL</h3>
            </div>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="ps5.png" alt="" />
          </div>
        </div>
        <div className='w-full flex h-screen bg-black justify-center items-center'>
          <div className="cntnr flex text-white w-full h-[80%]">
            <div className="limg w-1/2 h-full relative">
              <img className='absolute scale-[.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./public/imag.png" alt="" />
              </div>
           <div className="rg w-[50%]">
          <h1 className='text-7xl'>STILL RUNNING,</h1>
          <h1 className='text-7xl'>NOT HUNTING</h1>
          <p className='mt-10 font-[Helvetica-Now-Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi recusandae beatae reiciendis sapiente accusamus, dolores dolorem quae. Praesentium sunt esse maxime debitis.</p>
          <p className='font-[Helvetica-Now-Display] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem quisquam sed hic fugit repudiandae ratione voluptas labore quae necessitatibus nemo maiores quibusdam perferendis nisi, provident obcaecati cupiditate veniam veritatis praesentium inventore? Ipsa, fuga porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut explicabo vero soluta.
          </p>
          <p className='font-[Helvetica-Now-Display] mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem quisquam sed hic fugit repudiandae ratione voluptas labore quae necessitatibus nemo maiores quibusdam perferendis nisi, provident obcaecati cupiditate veniam veritatis praesentium inventore? Ipsa, fuga porro!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut explicabo vero soluta.
          </p>
          <button className='bg-yellow-400 px-5 py-5 text-black mt-5'>DOWNLOAD NOW</button>
          </div>
          </div>
         
        </div>
      </div>
      }
    </>
  )
}

export default App
