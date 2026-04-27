import { useEffect, useState } from 'react';

const PHRASES = [
  ' building things that talk to other things',
  ' shipping react at 3am, regretting it at 9am',
  ' currently: nuking k8s yaml from orbit',
  ' open to: weird side quests, paid or otherwise',
  ' /* still here */',
];

export function Typewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timerId: ReturnType<typeof setTimeout>;

    const step = () => {
      const phrase = PHRASES[pi]!;
      if (!deleting) {
        ci++;
        setText(phrase.slice(0, ci));
        if (ci >= phrase.length) {
          deleting = true;
          timerId = setTimeout(step, 1800);
          return;
        }
      } else {
        ci--;
        setText(phrase.slice(0, ci));
        if (ci <= 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
        }
      }
      timerId = setTimeout(step, deleting ? 22 : 42 + Math.random() * 40);
    };

    step();
    return () => clearTimeout(timerId);
  }, []);

  return <span>{text}</span>;
}
