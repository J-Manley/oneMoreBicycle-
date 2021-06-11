const btn = document.querySelector(".mobile-menu-btn");
const btnClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

const navBar = document.querySelector("#navBar");
const hero = document.querySelector(".hero__content");

const navOptions = {
  rootMargin: "-707px 0px 0px 0px",
};

const navObserver = new IntersectionObserver((entries, navObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("navBar--scrolled");
    } else {
      navBar.classList.remove("navBar--scrolled");
    }
  });
}, navOptions);

navObserver.observe(hero);

// Fade In

const faders = document.querySelectorAll(".fade__in");

const fadeInOptions = {
  rootMargin: "0px 0px -150px 0px",
};

const fadeInScroll = new IntersectionObserver((entries, fadeInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("f-appear");
      fadeInScroll.unobserve(entry.target);
    }
  });
}, fadeInOptions);

faders.forEach((fader) => {
  fadeInScroll.observe(fader);
  console.log(fader);
});

// Slides

const sliders = document.querySelectorAll(".slide__in");

const slideInOptions = {
  rootMargin: "0px 0px -150px 0px",
};

const slideInScroll = new IntersectionObserver((entries, slideInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("sl-appear");
      slideInScroll.unobserve(entry.target);
    }
  });
}, slideInOptions);

sliders.forEach((slide) => {
  slideInScroll.observe(slide);
});

const slideInLeft = document.querySelectorAll(".slide__in--left");

const slideInLeftOptions = {
  rootMargin: "0px 0px -300px 0px",
};

const slideInLeftScroll = new IntersectionObserver((entries, slideInLeftScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("left-appear");
      slideInLeftScroll.unobserve(entry.target);
    }
  });
}, slideInLeftOptions);

slideInLeft.forEach((slide) => {
  slideInLeftScroll.observe(slide);
});

const slideInRight = document.querySelectorAll(".slide__in--right");

const slideInRightOptions = {
  rootMargin: "0px 0px -300px 0px",
};

const slideInRightScroll = new IntersectionObserver((entries, slideInRightScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("right-appear");
      slideInRightScroll.unobserve(entry.target);
    }
  });
}, slideInRightOptions);

slideInRight.forEach((slide) => {
  slideInRightScroll.observe(slide);
});

// Initialize and add the map
function initMap() {
  const poole = { lat: 53.104209531446934, lng: -2.5478443738506287 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: poole,
  });
  const marker = new google.maps.Marker({
    position: poole,
    map: map,
    icon: "https://img.icons8.com/fluent/50/000000/google-maps-new.png",
  });
}
