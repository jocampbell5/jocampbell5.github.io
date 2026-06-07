import './Media.css'

/**
 * Renders a project's visual.
 *  - if `video` is set -> looping muted video (with optional poster)
 *  - else if `image` is set -> still image
 *  - else -> a generated colored placeholder so the layout looks complete
 */
export default function Media({
  project,
  playing = true,
  className = '',
  showCaption = true,
}) {
  const { video, image, poster, title, category, accent } = project

  if (video) {
    return (
      <video
        className={`media ${className}`}
        src={video}
        poster={poster}
        autoPlay={playing}
        loop
        muted
        playsInline
      />
    )
  }

  if (image) {
    return (
      <img className={`media ${className}`} src={image} alt={title} loading="lazy" />
    )
  }

  // Placeholder — clearly a slot waiting for real media.
  return (
    <div
      className={`media media-placeholder ${className}`}
      style={{
        '--ph-accent': accent,
        background: `linear-gradient(135deg,
          color-mix(in srgb, ${accent} 70%, #000) 0%,
          color-mix(in srgb, ${accent} 28%, #0a0a0c) 55%,
          #0a0a0c 100%)`,
      }}
    >
      <span className="ph-grid" aria-hidden="true" />
      {showCaption && (
        <span className="ph-meta">
          <span className="ph-cat">{category}</span>
          <span className="ph-title">{title}</span>
        </span>
      )}
      <span className="ph-note" aria-hidden="true">
        add image / video
      </span>
    </div>
  )
}
