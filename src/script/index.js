import {create, select} from '../utils/trix';
console.log('Yo!');

let img = create('img', select('body'))
img.src = '../assets/images/train.svg';
