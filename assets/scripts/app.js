class Init {
  constructor() {
    this.init();
  }

  init() {
    const _this = this;
    this.events();
  }

  events() {
    const _this = this;

    document.querySelector('.header__burger').addEventListener('click', function (e) {
      e.preventDefault();
      _this.actions().toggleBurger();
    });

    document.querySelector('.header__overlay').addEventListener('click', function (e) {
      e.preventDefault();
      _this.actions().toggleBurger();
    });

    const openers = document.querySelectorAll('.--opener')
    openers.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        _this.actions().toggleSubmenu(this);
      })
    })
  }

  actions() {
    const _this = this;
    return {
      toggleBurger() {
        document.querySelector('.header__nav').classList.toggle('header__nav--active');
      },
      toggleSubmenu(el) {
        el.classList.toggle('--active');
        el.nextElementSibling.classList.toggle('header-menu__wrap--opened');
      },
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.controller = new Init();
});
