const navBar = document.querySelector("#navBar");
const hero = document.querySelector(".hero__content");

const navOptions = {
  rootMargin: "-651px 0px 0px 0px",
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

const btn = document.querySelector(".mobile-menu-btn");
const btnClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
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
