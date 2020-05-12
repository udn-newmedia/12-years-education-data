const typePixel = 'p';
const typeWindowHeight = 'w';

const scrollEvent = {
  data() {
    return {
      ticking: false,
    }
  },
  methods: {
    handleScroll(customEvent) {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          customEvent();
          this.ticking = false;
        });
      }
      this.ticking = true;
    },
    observableEvent(target, option) {
      /*
        option: {
          type: default: w (p / w),
          top: default: 0,
          bottom: default: 0,
          enterEvent: default: null,
          leaveEvent: default: null,
          aboveEvent: default: null,
          underEvent: default: null
        }
      */

      const slide = document.querySelector(target);
      if (!slide) return;

      const pos = slide.getBoundingClientRect();
      
      let finalTop = 0;
      let finalBottom = 0;
      if (option.type === typePixel) {
        finalTop = option.top;
        finalBottom = option.bottom;
      } else if (option.type === typeWindowHeight) {
        finalTop = window.innerHeight * option.top;
        finalBottom = window.innerHeight * option.bottom;
      } else {
        console.error('OberservableEvent: lack of type parameter!');
      }

      /*
        | above / leave position
        |———————————————————————
        | enter position
        |———————————————————————
        | under / leave position
      */
      // enter
      if (pos.top < finalTop && pos.bottom > finalBottom) {
        if (option.enterEvent) option.enterEvent();
        else console.error('OberservableEvent: lack of enterEvent parameter!');
      }
      // leave
      else if (option.leaveEvent) {
        option.leaveEvent();
        // above
        if (option.aboveEvent && pos.top >= finalTop) option.aboveEvent();
        // under
        if (option.underEvent && pos.bottom < finalBottom) option.underEvent();
      }
    },
    addScrollEvent(customEvent) {
      document.addEventListener('scroll', () => this.handleScroll(customEvent), true);
    },
    removeScrollEvent(customEvent) {
      document.removeEventListener('scroll', () => this.handleScroll(customEvent), true);
    },
    addObservableScrollEvent(target, option = null) {
      const customOption = {
        type: option.type || 'w',
        top: option.top || 0,
        bottom: option.bottom || 0,
        enterEvent: option.enterEvent || null,
        leaveEvent: option.leaveEvent || null,
        aboveEvent: option.aboveEvent || null,
        underEvent: option.underEvent || null
      }
      const params = [target, customOption];
      document.addEventListener('scroll', () => this.handleScroll(() => this.observableEvent(...params)), true);
    },
    removeObservableScrollEvent(target, option = null) {
      const customOption = {
        type: option.type || 'w',
        top: option.top || 0,
        bottom: option.bottom || 0,
        enterEvent: option.enterEvent || null,
        leaveEvent: option.leaveEvent || null,
        aboveEvent: option.aboveEvent || null,
        underEvent: option.underEvent || null
      }
      const params = [target, customOption];
      document.removeEventListener('scroll', () => this.handleScroll(() => this.observableEvent(...params)), true);
    }
  },
}

export { scrollEvent };