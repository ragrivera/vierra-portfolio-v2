import { useEffect, useRef } from 'react';

const HOT_SELECTOR = 'a, button, .project, .stack-cell, .contact-socials a';

const CLICK_PALETTE = [
  { c: '#22d3ee', c2: '#ec4899' },
  { c: '#ec4899', c2: '#a855f7' },
  { c: '#a855f7', c2: '#22d3ee' },
];

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;
    let clickIdx = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOT_SELECTOR)) ring.classList.add('is-hot');
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOT_SELECTOR)) ring.classList.remove('is-hot');
    };

    const onPointerDown = (e: PointerEvent) => {
      ring.classList.add('is-down');
      dot.classList.add('is-down');

      const palette = CLICK_PALETTE[clickIdx++ % CLICK_PALETTE.length]!;
      const fx = document.createElement('div');
      fx.className = 'click-fx';
      fx.style.left = `${e.clientX}px`;
      fx.style.top = `${e.clientY}px`;
      fx.style.setProperty('--c', palette.c);
      fx.style.setProperty('--c2', palette.c2);
      fx.innerHTML =
        '<div class="core"></div>' +
        '<div class="ring"></div>' +
        '<div class="ring r2"></div>' +
        '<div class="crosshair"><span></span><span></span><span></span><span></span></div>';
      document.body.appendChild(fx);
      window.setTimeout(() => fx.remove(), 800);
    };
    const onPointerRelease = () => {
      ring.classList.remove('is-down');
      dot.classList.remove('is-down');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointerup', onPointerRelease);
    document.addEventListener('pointercancel', onPointerRelease);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointerup', onPointerRelease);
      document.removeEventListener('pointercancel', onPointerRelease);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
