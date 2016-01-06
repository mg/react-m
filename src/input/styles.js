export default {
  container: {
    position: 'relative',
    width: 100,
    maxWidth: '100%',
    margin: 0,
    padding: '20px 0',
  },

  input: {
    color: '#757575',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid rgba(0,0,0,.12)',
    display: 'block',
    fontSize: 16,
    margin: 0,
    padding: '4px 0',
    width: '100%',
    background: '0 0',
    textAlign: 'left',
  },

  inputFocused: {
    outline: 'none',
  },

  label: {
    bottom: 0,
    color: 'rgba(0,0,0,.26)',
    fontSize: 16,
    left: 0,
    right: 0,
    pointerEvents: 'none',
    position: 'absolute',
    display: 'block',
    top: 24,
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    transitionDuration: '.2s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  },

  labelFocused: {
    color: '#3f51b5',
    fontSize: 12,
    top: 4,
    visibility: 'visible',
  },

  border: {
    backgroundColor: '#3f51b5',
    bottom: 20,
    height: 2,
    left: '45%',
    position: 'absolute',
    transitionDuration: '.2s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    visibility: 'hidden',
    width: 10,
  },

  borderFocused: {
    left: 0,
    visibility: 'visible',
    width: '100%',
  },

  error: {
    position: 'absolute',
    fontSize: 12,
    marginTop: 3,
  },

  disabled: {
    cursor: 'default',
    outline: 'none',
  }
}
