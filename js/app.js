var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    offset = 0.005

gsap.set('svg', {
  visibility: 'visible'
})

var tl = gsap.timeline({repeat: -1, defaults: {
 duration: 0.5,
 ease: 'linear'
}});

tl.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.ten circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.nine circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.eight circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.seven circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.six circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.five circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.four circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.three circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.two circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.one circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.zero circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => '#FFF',
   stagger: {
    each: offset
   }
  })
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.heart circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  }, '+=2')
.to('.grid circle', 1, {
   fill: (i) => gsap.utils.toArray('.house circle')[i].getAttribute('fill'),
   stagger: {
    each: offset
   }
  }, '+=2')
.to('.grid circle', 1, {
   fill: (i) => '#FFF',
   stagger: {
    each: offset
   }
  }, '+=2')


tl.timeScale(3)
