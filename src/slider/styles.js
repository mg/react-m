export default {
  container: {
    background: '0 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  slider: {
    display: 'none',
  },

  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    border: 0,
    transform: 'translate(0,-1px)',
    background: '0 0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  trackLower: {
    position: 'relative',
    border: 0,
    height: 2,
    cursor: 'pointer',
  },

  trackHigher: {
    transition: 'left .18s cubic-bezier(.4,0,.2,1)',
    position: 'relative',
    border: 0,
    height: 2,
    padding: 0,
    cursor: 'pointer',
  },

  thumbContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  thumb: {
    zIndex: 1,
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'top .2s cubic-bezier(.4,0,.2,1), margin-left .2s cubic-bezier(.4,0,.2,1), width .2s cubic-bezier(.4,0,.2,1), height .2s cubic-bezier(.4,0,.2,1)',
  },

  thumbFocus: {
    transition: 'background-color box-shadow .28s cubic-bezier(.4,0,.2,1)',
  },

  disabledBackground: {
    cursor: 'text',
  },

  disabledTrackLower: {
    cursor: 'text',
  },

  disabledTrackHigher: {
    cursor: 'text',
  },

  disabledThumb: {
    cursor: 'text',
  },

  link: {
    display: 'block',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    outline: 'none',
  },

  mouseTracker: {
    zIndex: 10,
    backgroundColor: 'transparent',
    position:'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
}
