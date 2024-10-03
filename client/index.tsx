import { render } from 'preact';
import { Counter } from './Counter.tsx';
import './style.css';

render(<Counter />, document.querySelector('#app')!);
