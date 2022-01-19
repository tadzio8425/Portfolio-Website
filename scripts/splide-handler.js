var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    breakpoints: {
		700: {
            perPage:1,
		},
     }});

splide.mount();