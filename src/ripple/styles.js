export default {
  container: {
    position: 'absolute',
    zIndex: 0,
    overflow: 'hidden',
  },

  ripple: {
    width: 50,
    height: 50,
    transform: 'translate(-50%, -50%)',

    //background: '#000',
    //color: '#000',
    borderRadius: '50%',

    left: 0,
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },

  borderRadius: {
  },

  isAnimating: {
    transition: 'transform 0.3s cubic-bezier(0,0,.2,1),width 0.3s cubic-bezier(0,0,.2,1),height 0.3s cubic-bezier(0,0,.2,1),opacity 0.6s cubic-bezier(0,0,.2,1)',
  },

  isVisible: {
    opacity: 0.4,
  }  
}
