var splideProjects = new Splide( '.splide-projects', {
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


var splideSkills = new Splide( '.splide-skills', {
      type   : 'slide',
      perPage: 8,
      perMove: 1,
      breakpoints: {
                  800: {
                  perPage:3,
                  },
                  1150:{
                        perPage:5,
                  },         
            }});




splideProjects.mount();
splideSkills.mount();
