var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    breakpoints: {
		800: {
            perPage:1,
		},
            1150:{
                  perPage:2,
		},         
     }});

splide.mount();