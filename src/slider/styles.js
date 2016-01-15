export default {
  container: {
    background: '0 0',
    height: 18,
    position: 'relative',
  },

  slider: {
    display: 'none',
  },

  background: {
    position: 'absolute',
    top: 0,
    height: 10,
    width: '100%',
    left: 0,
    padding: '5px 0 0 0',
    overflow: 'hidden',
    border: 0,
    transform: 'translate(0,-1px)',
    background: '0 0',
    display: 'flex',
    cursor: 'pointer',
  },

  trackLower: {
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    cursor: 'pointer',
  },

  trackHigher: {
    transition: 'left .18s cubic-bezier(.4,0,.2,1)',
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    padding: 0,
    cursor: 'pointer',
  },

  thumb: {
    zIndex: 1,
    cursor: 'pointer',
    position: 'absolute',
    marginTop: 2,
    marginLeft: 0,
    top: 0,
    width: 16,
    height: 16,
    borderRadius: '50%',
    transition: 'top .2s cubic-bezier(.4,0,.2,1), margin-left .2s cubic-bezier(.4,0,.2,1), width .2s cubic-bezier(.4,0,.2,1), height .2s cubic-bezier(.4,0,.2,1)',
  },

  thumbOn: {
    marginLeft: -2,
    top: -2,
    width: 20,
    height: 20,
  },

  focus: {
    position: 'absolute',
    display: 'inline-block',
    boxSizing: 'border-box',

    height: 20,
    width: 20,
    borderRadius: '50%',

    backgroundColor: 'transparent',
    boxShadow: 'none',
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
