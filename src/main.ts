import { toTitleCase } from '../dist';
import './style.css';

const output = toTitleCase('hello, stryle!', {
  specialTerms: ['STRYLE'],
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<pre>${output}</pre>`;
