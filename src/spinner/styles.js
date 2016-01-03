export default {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: 60,
    height: 60,
    transform: 'rotate(-90deg)',
  },

  svg: {
    width: '100%',
    height: '100%',
    animation: 'reactm-spinner-rotate 2s linear infinite',
  },

  circle: {
    animation: 'reactm-spinner-dash 1.5s ease-in-out infinite',
    strokeDasharray: '1.25,250',
    strokeDashoffset: 0,

    transition: 'stroke-dasharray .35s cubic-bezier(.4,0,.2,1)',
    fill: 'none',

    strokeLinecap: 'round',
    strokeMiterlimit: '20',
    strokeWidth: 4,
  },  
}
