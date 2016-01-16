export default {
  container: {
    position: 'relative',
  },

  tooltip: {
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    transformOrigin: 'top center',
    willChange: 'transform',
    zIndex: 999,
    background: 'rgba(97,97,97,.9)',
    borderRadius: 2,
    color: '#fff',
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '14px',
    maxWidth: 170,
    textAlign: 'center',
  },

  tooltipHide: {
    position: 'fixed',
    top: -500,
  },

  tooltipCalced: {
    position: 'absolute',
    padding: 8,
    transform: 'scale(0)',
  },

  itemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}
