// Signature desert-contour line art. Color via currentColor; `accent` swaps one ring to venom.
export default function Topo({
  className = '',
  accent = false,
}: {
  className?: string;
  accent?: boolean;
}) {
  const blob =
    'M200,40 C290,25 385,70 410,160 C435,250 370,345 265,362 C160,379 55,315 38,215 C21,115 110,55 200,40 Z';
  const scales = [1, 0.88, 0.76, 0.64, 0.52, 0.4, 0.28, 0.16];
  return (
    <svg viewBox="0 0 440 400" fill="none" aria-hidden className={className}>
      {scales.map((s, i) => (
        <path
          key={s}
          d={blob}
          stroke={accent && i === 2 ? '#D4F70F' : 'currentColor'}
          strokeWidth={i === 2 && accent ? 2 : 1.2}
          transform={`translate(${220 - 220 * s} ${200 - 200 * s}) scale(${s})`}
        />
      ))}
    </svg>
  );
}
