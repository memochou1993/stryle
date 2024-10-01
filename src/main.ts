import { toTitleCase } from '../dist';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<pre>${toTitleCase('hello, world!')}</pre>`;
