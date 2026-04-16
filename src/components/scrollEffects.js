export const effects = {

  
  zoomFade: (dir) => ({
    hidden: { opacity: 0, scale: dir === 'down' ? 0.75 : 1.2 },
    visible: (i) => ({
      opacity: 1, scale: 1,
      transition: { duration: 0.55, ease: [0.34, 1.4, 0.64, 1], delay: (i % 3) * 0.12 }
    })
  }),

 

};