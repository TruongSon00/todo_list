import ReactDOM from 'react-dom';
import Data from './data';

document.querySelectorAll('input[type="checkbox" i]').forEach(button => {
    document.addEventListener('click', () => {
        console.log('ngu')
    })
})

ReactDOM.render( < Data / > , document.getElementById('root'));