export default {
  container: {
    position: 'absolute',
    height: '100%',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    transitionProperty: 'background-color',
    transitionDuration: '.4s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  },

  containerOn: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
  },

  containerRight: {
    right: 0,
  },

  drawer: {
    background: '#fff',

    display: 'block',
    boxSizing: 'border-box',
    height: '100%',

    transformStyle: 'preserve-3d',
    willChange: 'width',
    transitionDuration: '.3s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'width',

    overflowX: 'hidden',
    overflowY: 'auto',
  },

  drawerCalc: {
    position: 'static',
    left: -10000,
  },

  drawerClosed: {
    position: 'absolute',
    width: 0,
  },

  drawerLeft: {
    left: 0,
  },

  drawerRight: {
    transformOrigin: 'right',
    right: '100%',
  },

/*
  drawerOffLeft: {
    transform: 'translateX(-250px)',
  },

  drawerOffRight: {
    transform: 'translateX(250px)',
  },

  drawerOn: {
    transform: 'translateX(0)',
  },

  drawerLeft: {
    borderRight: '1px solid #e0e0e0',
  },

  drawerRight: {
    transformOrigin: 'right',
    right: 0,
    borderLeft: '1px solid #e0e0e0',
  },
  */
}
