export function initApp() {
  return {
    dark: false,
    toggleTheme() {
      this.dark = !this.dark;
    },

    scrolled: false,
    height: 60,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    openMobileMenu() {
      this.mobileOpen = !this.mobileOpen;
    },

    setupGlider() {
      const glider = new Glider(
        document.querySelector(".testimonials-glider"),
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
          }
        }
      );
    },
  };
}
