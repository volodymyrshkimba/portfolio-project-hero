// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Keyboard, Navigation, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.swiper-ab', {
	modules: [Navigation, Keyboard, Mousewheel],
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	keyboard: {
    enabled: true,
    onlyInViewport: false,
	},
	mousewheel: {
		enabled: true,
		forceToAxis: true,
		thresholdDelta: 5,
	},
	
    navigation: {
		 nextEl: '.swiper-button-next-ab',
	},
	 breakpoints: {
    // when window width is >= 320px
    0: {
		slidesPerView: 2,
		width: 260,
    },
    // when window width is >= 480px
    768: {
		 slidesPerView: 3,
		 width: 600,
    },
    // when window width is >= 640px
    1440: {
		 slidesPerView: 6,
		 width: 1200,
    	}
 	 },
  },
);





