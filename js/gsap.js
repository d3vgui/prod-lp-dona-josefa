gsap.registerPlugin(ScrollTrigger);

const secTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".title-h2-sec-two",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

secTwo.from([".title-h2-sec-two", ".title-h3-sec-two"], {
  opacity: 0,
  y: 40,
  duration: 3.0,
  ease: "power3.out",
})
  secTwo.from(
    ".p-sec-two",
    {
      opacity: 0,
      x: -50,
      duration: 2.1,
      ease: "power3.out",
      stagger: 0.5,
    },
    0
  )
  secTwo.from(
    ".btn-sec-two",
    {
      opacity: 0,
      y: 30,
      duration: 2.1,
      ease: "power3.out",
    },
    1
  )
  secTwo.from(
    ".img-sec-two",
    {
      opacity: 0,
      y: -70,
      duration: 1.5,
      ease: "power3.out",
    },
    "1.0"
  );
  const secTertulia = gsap.timeline({
    scrollTrigger: {
      trigger: ".title-h2-sec-tertulia",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
  
  secTertulia.from([".title-h2-sec-tertulia", ".title-h3-sec-tertulia"], {
    opacity: 0,
    y: 40,
    duration: 3.0,
    ease: "power3.out",
  })
    secTertulia.from(
      ".p-sec-tertulia",
      {
        opacity: 0,
        x: -50,
        duration: 2.1,
        ease: "power3.out",
        stagger: 0.5,
      },
      0
    )
    secTertulia.from(
      ".btn-sec-tertulia",
      {
        opacity: 0,
        y: 30,
        duration: 2.1,
        ease: "power3.out",
      },
      1
    )
    secTertulia.from(
      ".img-sec-tertulia",
      {
        opacity: 0,
        y: -70,
        duration: 1.5,
        ease: "power3.out",
      },
      "1.0"
    );

    const secThree = gsap.timeline({
        scrollTrigger: {
          trigger: ".title-h2-sec-three",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
      
      secThree.from([".title-h2-sec-three", ".title-h3-sec-three"], {
        opacity: 0,
        y: 40,
        duration: 3.0,
        ease: "power3.out",
      })
        secThree.from(
          ".p-sec-three",
          {
            opacity: 0,
            x: -50,
            duration: 2.1,
            ease: "power3.out",
            stagger: 0.5,
          },
          0
        )
        secThree.from(
          ".btn-sec-three",
          {
            opacity: 0,
            y: 30,
            duration: 2.1,
            ease: "power3.out",
          },
          1
        )
        secThree.from(
          ".img-sec-three",
          {
            opacity: 0,
            y: -70,
            duration: 1.5,
            ease: "power3.out",
          },
          "1.0"
        );

        const secFour = gsap.timeline({
            scrollTrigger: {
              trigger: ".title-h2-sec-four",
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          });
          
          secFour.from([".title-h2-sec-four", ".title-h3-sec-four"], {
            opacity: 0,
            y: 40,
            duration: 3.0,
            ease: "power3.out",
          })
            secFour.from(
              ".p-sec-four",
              {
                opacity: 0,
                x: -50,
                duration: 2.1,
                ease: "power3.out",
                stagger: 0.5,
              },
              0
            )
            secFour.from(
              ".btn-sec-four",
              {
                opacity: 0,
                y: 30,
                duration: 2.1,
                ease: "power3.out",
              },
              1
            )
            secFour.from(
              ".img-sec-four",
              {
                opacity: 0,
                y: -70,
                duration: 1.5,
                ease: "power3.out",
              },
              "1.0"
            );
