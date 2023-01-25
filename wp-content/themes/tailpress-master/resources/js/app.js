const THREE = require('three');
import { gsap } from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollSmoother} from "./ScrollSmoother";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin( ScrollTrigger, Draggable, ScrollSmoother );

const scrollerSmoother = new ScrollSmoother({
      wrapper:"#smooth-scroll",
      content: "#smooth-scroll-content",
      smooth: 2,
      smoothTouch: 0.1,
});

// Navigation toggle
window.addEventListener('load', function () {
      let main_navigation = document.querySelector('#primary-menu');
      document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            main_navigation.classList.toggle('hidden');
      });
});

// Three JS
let scene, camera, renderer, ambientLight, pointLight, cube, mouseMesh, lightHelper, composer, renderPass;
let horizontalBlur, verticalBlur, mesh;
let mouse = {x:0, y:0}

const init = () => {
      const getBody = document.body;
      const createElm = document.createElement("div");
      createElm.classList.add("light-front");


      let screenWidth = window.innerWidth,
          screenHeight = window.innerHeight,
          viewAngle = 75,
          nearDistance = 0.1,
          farDistance = 1000;

      // Scene
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x000000);

      // Renderer
      renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
      renderer.setSize(screenWidth, screenHeight);
      renderer.setClearColor( 0x000000, 0 );
      renderer.domElement.style.filter = `blur(150px)`;
      //getBody.appendChild(renderer.domElement);

      createElm.appendChild(renderer.domElement);
      //getBody.appendChild(createElm);
      getBody.insertBefore(createElm, getBody.firstChild);

      // Camera
      camera = new THREE.PerspectiveCamera(viewAngle, screenWidth / screenHeight, nearDistance, farDistance);
     //camera.position.z = 0.75;
      //camera.position.z = 1000;
      // camera.lookAt(scene.position);
      camera.position.set(0,0,3);
      camera.lookAt(scene.position);
      scene.add(camera);

      // Light
      // Ambient Light
      ambientLight = new THREE.AmbientLight(0x333333, 0.35);
      //ambientLight = new THREE.AmbientLight(0x000000,0.1);
      scene.add(ambientLight);

      // Point Light
      pointLight = new THREE.PointLight(0xff00ff,0.3);
      //pointLight = new THREE.PointLight(0xAAAAAA);
      pointLight.position.set(0, 0, 0);
      // pointLight.position.set(0,0,0);
      //pointLight.castShadow = true;
      pointLight.shadow.bias = 0.0001;
      pointLight.distance = 500;
      // pointLight.mapSizeWidth = 512;
      // pointLight.mapSizeHeight = 512;
      scene.add(pointLight);

      // pointLight = new THREE.SpotLight(0xAAAAAA);
      // scene.add(pointLight);


      // let mouseGeometry = new THREE.PlaneGeometry(screenWidth,screenHeight);
      //
      // //let mouseGeometry = new THREE.PlaneGeometry(3,3);
      // let mouseMaterial = new THREE.MeshLambertMaterial({opacity:0.5,transparent:true});
      //
      // //let mouseMaterial = new THREE.MeshLambertMaterial({color:0xff00ff});
      // mouseMesh = new THREE.Mesh(mouseGeometry, mouseMaterial);
      //
      // mouseMesh.position.set(0, 0, 0);
      // scene.add(mouseMesh);



      // geometry
      const geometry = new THREE.BufferGeometry();

      const vertices = new Float32Array([
            // front
            -1, -1, 1, 1, -1, 1, -1, 1,  1,
            -1,  1, 1, 1, -1, 1,  1, 1,  1,
            // back
            1, -1, -1, -1, -1, -1,  1, 1, -1,
            1,  1, -1, -1, -1, -1, -1, 1, -1,
            // left
            -1, -1, -1, -1, -1, 1, -1, 1, -1,
            -1,  1, -1, -1, -1, 1, -1, 1,  1,
            // right
            1, -1, 1, 1, -1, -1, 1, 1,  1,
            1,  1, 1, 1, -1, -1, 1, 1, -1,
            // top
            1,  1, -1, -1, 1, -1,  1, 1, 1,
            1,  1,  1, -1, 1, -1, -1, 1, 1,
            // bottom
            1, -1,  1, -1, -1, 1,  1, -1, -1,
            1, -1, -1, -1, -1, 1, -1, -1, -1,
      ]);


      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

      //const material = new THREE.MeshBasicMaterial({ color: 0x990000, wireframe: true});
      const material = new THREE.MeshBasicMaterial({ color: 0x4d4dc0});
      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);



      // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      // const material = new THREE.MeshBasicMaterial( {} );
      // const mesh = new THREE.Mesh( geometry, material );
      // mesh.position.set(0, 0, 0);
      // scene.add( mesh );

      // Cube
      // let cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
      // let cubeMaterial = new THREE.MeshPhongMaterial({
      //       color: 0x888888,
      //       specular: 0x000000,
      //       shininess: 10
      // });
      // cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      // cube.castShadow = true;
      // cube.receiveShadow = true;
      // cube.position.set(0, 0, -1);
      // cube.rotation.x = 10;
      // cube.rotation.y = 20;
      // scene.add( cube );

      document.addEventListener("mousemove", onMouseMove, false);
      window.addEventListener('resize', onResize);
}

// Render Loop
const render = () => {
      requestAnimationFrame( render );
      // renderer.autoClear = false;
      // renderer.clear();

      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.001;
      mesh.rotation.z += 0.003;


      renderer.render( scene, camera );
}

// On mouse move
const onMouseMove = (event) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      let vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      let dir = vector.sub(camera.position).normalize();
      let distance = -camera.position.z / dir.z;
      let pos = camera.position.clone().add(dir.multiplyScalar(distance));
      //pointLight.position.copy(pos);
      //pointLight.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
      mesh.position.copy(pos);
};

// On resize
const onResize = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      renderer.setSize(width, height);

      camera.position.x += 0.05;
      camera.position.y += 0.05;

      camera.aspect = width/height;
      camera.updateProjectionMatrix();
}

document.addEventListener("mousemove",(event)=>{
      let width = window.innerWidth,
          height = window.innerHeight,
          positionX = (event.clientX/width) - 0.55,
          positionY = (event.clientY/height) - 0.55;

      gsap.to(".image-interaction img",{
            rotationY: positionX * 50,
            rotationX: -positionY * 50,
            ease: "none",
      });
});

init();
render();

// const scroller = document.getElementById("smooth-scroll");
// const locoScroll = new LocomotiveScroll({
//       el: scroller,
//       smooth: true,
//       tablet: { smooth: true },
//       smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);
// new ResizeObserver(() => locoScroll.update()).observe(document.querySelector("[data-scroll-container]"));
//
// ScrollTrigger.scrollerProxy(scroller, {
//       scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, 0, 0)
//                 : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//             return {
//                   top: 0,
//                   left: 0,
//                   width: window.innerWidth,
//                   height: window.innerHeight
//             };
//       }
// });


gsap.to(".js-icon",{
      scrollTrigger:{
            trigger: ".main-body",
            start: "30% 20%",
            end: "=+1300",
            scrub:true,
            markers:true,
            toggleActions:"restart pause resume none",
            //scroller: scroller,
      },
      y:200,
      duration:3,
});

const mouseCursor1 = document.getElementById("js-mouse-1");
const mouseCursor2items = document.querySelectorAll(".section-block .section-box");
const cWrap = document.querySelector(".carousel-area-home");

const mouseCursor1Target = document.getElementById("cursor-shapes-1");
const mouseCursor1Target2 = document.getElementById("cursor-shapes-2");
const mouseCursor1Target3 = document.getElementById("cursor-shapes-3");
const homeCarousel1 = document.getElementById("home-carousel-1");

const homeCarousel1Items = document.querySelectorAll("#home-carousel-1 .carousel-item");

const mouseShape1 = document.querySelectorAll("#cursor-shapes-1 .shape");
const mouseShape2 = document.querySelector("#cursor-shapes-2 .carousel-mouse");
const mouseShape3 = document.querySelector("#cursor-shapes-3 .insight-img");

mouseCursor1.onmouseenter = event => {
      mouseCursor1Target.classList.add("active");
      gsap.to(mouseShape1,{
            scale:0.3,
      });
}
document.onmousemove = event => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      gsap.to(mouseShape1,{
            x: mouseX,
            y: mouseY,
            stagger: - 0.1,
      });
      gsap.to(mouseShape2,{
            x: mouseX,
            y: mouseY,
            stagger: -0.1,
      });
      gsap.to(mouseShape3,{
            x: mouseX,
            y: mouseY,
            transform: 'rotate(12deg)',
            stagger: -0.1,
      });
}
mouseCursor1.onmouseleave = event => {
      gsap.to(mouseShape1,{
            scale: 0.1,
      }).then(()=>{
            mouseCursor1Target.classList.remove("active");
      });
}
mouseCursor1.onmousemove = event => {
      mouseCursor1Target.classList.add("active");
      gsap.to(mouseShape1,{
            scale:0.3,
      });
}
mouseCursor2items.forEach((item)=>{
      let prevElm = item.previousElementSibling;
      prevElm.style.background = `url(${item.getAttribute("data-bg")})no-repeat center 100%`;

      item.onmousemove = (e) => {
            let imgUrl = e.currentTarget.getAttribute("data-bg");
            mouseShape3.style.background = `url(${imgUrl})no-repeat center 100%`;
            mouseCursor1Target3.classList.add("active");
            mouseShape3.style.opacity = 0.1;
            gsap.to(mouseShape3,{
                  opacity: 1,
            });
      }
      item.onmouseleave = () => {
            gsap.to(mouseShape3,{
                  opacity: 0.1,
            }).then(()=>{
                  mouseCursor1Target3.classList.remove("active");
                  mouseShape3.style.background = `#000`;
            });
      }
})

const hc1BaseRy = 32.7273;
// const slideCapElm = document.createElement("div");
// slideCapElm.classList.add("slider-caption-holder");

homeCarousel1Items.forEach((item,index)=>{
      let rotateY = index * hc1BaseRy;
      // item.style.transform = "rotateY(-"+rotateY+"deg) translateZ(1623px)";
      item.style.transform = "rotateY(-"+rotateY+"deg) translateZ(910px)";

      // item.setAttribute("data-index",`id-${index}`);
      // let createElm = document.createElement("div");
      // createElm.classList.add("slider-caption");
      // slideCapElm.appendChild(createElm);

      item.onmouseenter = (e) => {
            mouseCursor1Target2.classList.add("active");
            gsap.to(mouseShape2,{
                  scale:0.8
            });
      }
      item.onmouseleave = () => {
            gsap.to(mouseShape2,{
                  scale:0.1
            }).then(()=>{
                  mouseCursor1Target2.classList.remove("active");
            });
      }
      item.onmousemove = () => {
            mouseCursor1Target2.classList.add("active");
            gsap.to(mouseShape2,{
                  scale:1
            });
      }
});

// cWrap.appendChild(slideCapElm);

gsap.to(".carousel-item-img-inner",{
      scrollTrigger:{
            trigger:"#page",
            scrub:true,
            start: "top top",
            end:"bottom bottom",
            //markers: true,
            //scroller: scroller,
            toggleActions: "play reset play reset",
      },
      duration: 1,
      ease: "none",
      x: 50
});

gsap.to(homeCarousel1,{
      scrollTrigger:{
            trigger:"#page",
            scrub:true,
            start: "top 20%",
            end:"bottom center",
            //markers: true,
            //scroller: scroller,
            toggleActions: "play reset play reset",
      },
      duration: 1,
      ease: "none",
      rotateY: -100,
});

// gsap.to(".slider-caption",{
//       scrollTrigger:{
//             trigger:"#page",
//             scrub:true,
//             start: "top 20%",
//             end:"bottom center",
//             markers: true,
//             scroller: scroller,
//             toggleActions: "play reset play reset",
//       },
//       duration: 1,
//       ease: "none",
//       x: 100,
//       y:-1,
// });

const footerTimeLine = gsap.timeline({
      scrollTrigger: {
            trigger: "#page",
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0,
            // markers: "true",
      }
});
footerTimeLine
    .set(".footer",{y:50,ease: "none"})
    .from(".footer",{y:-300,ease: "none"});

const footerBgTimeLine = gsap.timeline({
      scrollTrigger: {
            trigger: "#main-footer",
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0,
            markers: "true",
      }
});
footerBgTimeLine
    .set(".wrap-o",{y:-500,ease: "none"})
    .from(".wrap-o",{y:200,ease: "none"});


let direction = "", mouseLocation = 0, xAx,  timer, timerCount = 0;
homeCarousel1.onmousedown = (e) => {
      e.currentTarget.classList.add("drag");
      mouseLocation = e.clientX;
}
homeCarousel1.onmouseup = (e) => {
      e.currentTarget.classList.remove("drag");
      mouseLocation = e.clientX;
      xAx = Math.round(e.x/30);
}
homeCarousel1.onmousemove = (e) => {
      if(e.currentTarget.classList.contains('drag')){
            if (e.clientX < mouseLocation) {
                  direction = "left";
                  xAx--;
            } else if (e.clientX > mouseLocation) {
                  direction = "right";
                  xAx++;
            }

            homeCarousel1.style.transform = "translateZ(1623px) rotateZ(6deg) rotateY("+ -xAx +"deg)";
            mouseLocation = e.clientX;
      }
}

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();