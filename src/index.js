import './index.css';
//import '../css/main.css';
//import '../css/normalize.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} from this awesome course!`); //eslint-disable-line no-console