export default {
  container: {
    height: 4,
    width: '50vw',
    maxWidth: 260,
  },

  determinatedContainer: {
    display: 'flex',
  },

  indeterminatedContainer: {
    position: 'relative',
  },

  bar: {
    height: '100%',
    transition: 'width .2s cubic-bezier(.4,0,.2,1)',
  },

  indeterminatedBar: {
    position: 'static',
    top: 0,
  },

  progress: {
    backgroundColor: '#3f51b5',
  },

  loaded: {
    backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
  },

  loading: {
    width: 0,
    backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
    mask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")'
  },

  animation: {
    top: 0,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: 'indeterminate1',
  },

  indeterminate1: {
    animationName: 'progressbar-indeterminate1',
  },

  indeterminate2: {
    animationName: 'progressbar-indeterminate2',
  },
}
