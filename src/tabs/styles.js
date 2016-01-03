export default {
  container: {
  },

  containerScrollable: {
    overflow: 'hidden',
    height: '50px',
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
    height: 96,
  },

  transition: {
    transitionDuration: '0.4s',
    transitionTimingFunction: 'cubic-bezier(.4,0,1,1)',
  },

  tab: {
    height: '48px',
    lineHeight: '48px',
    padding: '0 12px',
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

  tabSelected: {
  },

  tabDisabled: {
  },

  link: {
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transitionProperty: 'color',
  },

  ripple: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
}
