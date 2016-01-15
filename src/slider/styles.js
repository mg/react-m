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
    color: '#757575',
    cursor: 'pointer',
  },

  backgroundLower: {
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    background: '#3f51b5',
    cursor: 'pointer',
  },

  backgroundHigher: {
    background: 'rgba(0,0,0,.26)',
    transition: 'left .18s cubic-bezier(.4,0,.2,1)',
    position: 'relative',
    border: 0,
    height: 2,
    marginTop: 5,
    padding: 0,
    cursor: 'pointer',
  },

  tracker: {
    zIndex: 1,
    cursor: 'pointer',
    position: 'absolute',
    marginTop: 2,
    marginLeft: 0,
    top: 0,
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#3f51b5',
    transition: 'top .2s cubic-bezier(.4,0,.2,1), margin-left .2s cubic-bezier(.4,0,.2,1), width .2s cubic-bezier(.4,0,.2,1), height .2s cubic-bezier(.4,0,.2,1)',
  },

  trackerOn: {
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

  focusOn: {
    backgroundColor: 'rgba(63,81,181,.26)',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
  },

  disabledBackground: {
    cursor: 'text',
  },

  disabledBackgroundLower: {
    background: 'rgba(0,0,0,.26)',
    cursor: 'text',
  },

  disabledBackgroundHigher: {
    cursor: 'text',
  },

  disabledTracker: {
    backgroundColor: '#757575',
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
