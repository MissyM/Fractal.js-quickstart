import F from 'fractal-js'
import R from 'ramda'
const h = F.h


export default F.def({
  name: 'Main',
  init: ({key}) => ({
    key,
    isActive: false,
  }),
  inputs: {},
  actions: {
    Toggle: [[], m => R.evolve({isActive: R.not}, m)],
  },
  interfaces: {
    view: (ctx, i, m) => h('div', { key: m.key, class: { [styles.base]: true } }, [
      h('div', {
        class: {
          [styles.button.base]: true,
          [styles.button.active]: m.isActive,
        },
        on: {
          click: i._action('Toggle'),
        },
      }, (m.isActive) ? 'nice!! :)' : 'Click me!!'),
    ]),
  },
})

let styles = F.style.rs({
  base: {
    ...F.style.absoluteCenter,
  },
  button: {
    base: {
      width: '280px',
      height: '70px',
      margin: '20px',
      fontSize: '38px',
      borderRadius: '35px',
      color: 'white',
      backgroundColor: '#13A513',
      textAlign: 'center',
      transition: 'transform 0.4s',
      // '-webkit-backface-visibility': 'hidden',
      ...F.style.absoluteCenter,
      '&:hover': {
        color: 'white',
        backgroundColor: 'purple',
        border: '3px solid purple',
        transform: 'perspective(1px) scale(1.1)',
      },
    },
    active: {
      color: 'purple',
      backgroundColor: '#FBFBFB',
      border: '3px solid #13A513',
    },
  },
})
