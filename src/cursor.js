import TweenMax from "gsap";

/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */

class Demo3 {
  constructor() {
    this.initCursor();
    this.initHovers();
  }

  initCursor() {
    const { Back } = window;
    this.outerCursor = document.querySelector(".circle-cursor--outer");
    this.innerCursor = document.querySelector(".circle-cursor--inner");
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.clientX = -100;
    this.clientY = -100;
    this.showCursor = false;

    const unveilCursor = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      TweenMax.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.showCursor = true;
    };
    document.addEventListener("mousemove", unveilCursor);

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      if (!this.isStuck) {
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
      }
      if (this.showCursor) {
        document.removeEventListener("mousemove", unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHovers() {
    const handleMouseEnter = e => {
      this.isStuck = true;
      const target = e.currentTarget;
      const box = target.getBoundingClientRect();
      this.outerCursorOriginals = {
        width: this.outerCursorBox.width,
        height: this.outerCursorBox.height
      };
      TweenMax.to(this.outerCursor, 0.2, {
        x: box.left,
        y: box.top,
        top: '0',
        left: '0',
        width: box.width,
        height: box.height,
        opacity: 1,
        padding: '0',
        borderColor: 'transparent',
        background: '#111111',

        borderRadius: '6px',
        scale: 1,


      });

      TweenMax.to(this.innerCursor, 0.2, {
        opacity: 0
      });
    };



    const handleMouseEnterCheck = e => {
        this.isStuck = true;
        const target = e.currentTarget;
        const box = target.getBoundingClientRect();
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.outerCursor, 0.2, {
          x: box.left,
          y: box.top,
          top: '20px',
          left: '20px',
          width: '52px',
          height: '52px',
          opacity: 1,
          padding: '0',
          borderColor: 'transparent',
          background: '#111111',
  
          borderRadius: '6px',
          scale: 1,
  
  
        });
  
        TweenMax.to(this.innerCursor, 0.2, {
          opacity: 0
        });
      };

      

    const handleMouseLeave = () => {
      this.isStuck = false;
      TweenMax.to(this.outerCursor, 0.2, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        top: '0',
        left: '0',
        borderRadius: '50%' ,
        background: '#111111',
        opacity: 1,
        padding: '0',
        scale: 1,
      });
      
      TweenMax.to(this.innerCursor, 0.2, {
        opacity: 1
      });
    };

    


    const linkItems = document.querySelectorAll(".browser-window__link");
    linkItems.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
      item.addEventListener("scroll", handleMouseLeave);
    });

    const linkItemsChecks = document.querySelectorAll(".browser-window__link-check");
    linkItemsChecks.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnterCheck);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    const linkItemsBack = document.querySelectorAll(".browser-window__link-back");
    linkItemsBack.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnterCheck);
      item.addEventListener("mouseleave", handleMouseLeave);
      item.addEventListener("click", handleMouseLeave);
    });

    const linkItemsComment = document.querySelectorAll(".browser-window__link-comment");
    linkItemsComment.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
      item.addEventListener("click", handleMouseLeave);
      item.addEventListener("scroll", handleMouseLeave);
    });



    const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "#ffffff",
      ease: this.easing,
      paused: true,
      opacity: 1,
      scale: 3,
      border: 'none',
      boxShadow: 'none'
    });

    const mainNavMouseEnter = () => {
      this.outerCursorSpeed = 0;
      TweenMax.set(this.innerCursor, { opacity: 0 });
      mainNavHoverTween.play();
    };

    const mainNavMouseLeave = () => {
      this.outerCursorSpeed = 0.2;
      TweenMax.set(this.innerCursor, { opacity: 1 });
      mainNavHoverTween.reverse();
    };

    const mainNavLinks = document.querySelectorAll(".content--fixed");
    mainNavLinks.forEach(item => {
      item.addEventListener("mouseenter", mainNavMouseEnter);
      item.addEventListener("mouseleave", mainNavMouseLeave);
    });
  }

}


export default Demo3