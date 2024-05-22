const lazyLoad = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const lazyImages = document.querySelectorAll("img");
  
      const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute("src");
  
              img.setAttribute("src", src);
              img.classList.remove("lazy");
  
              observer.unobserve(img);
            }
          });
        });
  
        io.observe(target);
      };
  
      lazyImages.forEach(lazyLoad);
    });
  };

  lazyLoad();