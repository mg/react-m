export default {
  container: {
    position: 'relative',
  },

  menu: {
    display: 'block',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    margin: 0,
    padding: 0,
    borderRadius: 2,
    cursor: 'pointer',
    willChange: 'transform',
    transition: 'transform .3s cubic-bezier(.4,0,.2,1), opacity .4s cubic-bezier(.4,0,.2,1)',
  },

  menuOff: {
    position: 'fixed',
    top: -1000,
    transform: 'scale(0)',
    opacity: 1,
  },

  menuOn: {
    position: 'absolute',
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 100,
  },

  menuHide: {
    position: 'absolute',
    transform: 'scale(1)',
    opacity: 0,
  },

  downRight: {
    transformOrigin: '0 0',
  },

  downLeft: {
    transformOrigin: '100% 0',
  },

  upRight: {
    transformOrigin: '0 100%',
  },

  upLeft: {
    transformOrigin: '100% 100%',
  },  
}
