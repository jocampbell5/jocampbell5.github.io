import './ScrollHint.css'

const pad = (n) => String(n).padStart(2, '0')

export default function ScrollHint({ index, total, hidden }) {
  return (
    <div className={`scroll-hint ${hidden ? 'is-hidden' : ''}`}>
      <span className="scroll-cue">
        <span className="scroll-wheel" aria-hidden="true">
          <span className="scroll-bead" />
        </span>
        Scroll · drag · click
      </span>

      <span className="scroll-count" aria-hidden="true">
        <span className="count-now">{pad(index + 1)}</span>
        <span className="count-sep">/</span>
        <span className="count-total">{pad(total)}</span>
      </span>
    </div>
  )
}
