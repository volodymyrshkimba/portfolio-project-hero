// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.swiper', {
	modules: [Navigation],
	direction: 'horizontal',
	loop: true,
	
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
