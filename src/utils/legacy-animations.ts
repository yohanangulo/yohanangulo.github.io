const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  viewport: { once: true, margin: '-250px' },
}

export const legacyAnimations = {
  fadeInAnimation,
}
