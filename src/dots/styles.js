export default {
  container: {
    display: 'inline-block',
  },

  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    borderRadius: '50%',
    width: '50%',
    height: '50%',
    transitionDuration: '0.4s, 0.4s, 0.4s',
    transitionTimingFunction: 'cubic-bezier(.4,0,1,1), cubic-bezier(.4,0,1,1), cubic-bezier(.4,0,1,1)',
    transitionProperty: 'width, height, backgroundColor',
  },

  activeDot: {
    width: '100%',
    height: '100%',
  },
}
