export default {
  container: {
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
  },

  link: {
    color: '#616161',
    display: 'block',
    width: 37,
    height: '100%',
    outline: 'none',
  },

  linkOn: {
    color: '#3f51b5',
  },

  track: {
    background: 'rgba(0,0,0,.26)',
    position: 'absolute',
    left: 0,
    top: 5,
    height: 14,
    width: 36,
    borderRadius: 14,
    cursor: 'pointer',
  },

  trackOn: {
    background: 'rgba(63,81,181,.5)',
  },

  thumb: {
    background: '#fafafa',
    position: 'absolute',
    left: 0,
    top: 1,
    height: 20,
    width: 20,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'left',
  },

  thumbOn: {
    background: '#3f51b5',
    left: 16,
    boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)',
  },

  input: {
    appearance: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: 'none',
  },

  label: {
    color: '#757575',
    fontWeight: 400,
    paddingLeft: 10,
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
  },

  focus: {
    position: 'absolute',
    top: 4,
    left: 2,
    display: 'inline-block',
    boxSizing: 'border-box',

    height: 18,
    width: 34,
    borderRadius: 14,

    backgroundColor: 'transparent',
    boxShadow: 'none',
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'background-color box-shadow',
  },

  focusOn: {
    backgroundColor: 'rgba(63,81,181,.26)',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
  },

  containerDisabled: {
    cursor: 'default',
  },

  trackDisabled: {
    cursor: 'default',
    background: 'rgba(0,0,0,.12)',
  },

  thumbDisabled: {
    cursor: 'default',
    background: '#bdbdbd',
  },

  labelDisabled: {
    cursor: 'text',
    color: 'rgba(0,0,0,.26)',
  },

  ripple: {
    top: 0,
    left: -2,
    height: 24,
    width: 34,
    borderRadius: 14,
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
