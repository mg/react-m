export default {
  containerScrollable: {
    overflow: 'hidden',
  },

  tabs: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },

  tabsFixed: {
    justifyContent: 'space-around',
  },

  tabsScrollable: {
    justifyContent: 'flex-start',
    overflowX: 'scroll',
    overflowY: 'hidden',
  },

  transition: {
    transitionDuration: '0.4s',
    transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  },

  tab: {
    transitionProperty: 'border-bottom-color',
    overflow: 'hidden',
    position: 'relative',
  },

  tabScrollable: {
    flexShrink: 0,
  },

  tabFixed: {
    textAlign: 'center',
    flexGrow: 1,
  },

  link: {
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transitionProperty: 'color',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
}
