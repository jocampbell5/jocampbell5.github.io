import { getYouTubeId, youTubeThumb, youTubeThumbFallback } from '../utils/youtube'
import './Media.css'

/**
 * Renders a project's visual (used on the deck cards).
 *  - if `video` is set -> looping muted local video (with optional poster)
 *  - else if `image` or a `youtube` thumbnail is available -> still image
 *  - else -> a generated colored placeholder so the layout looks complete
 */
export default function Media({
  project,
  playing = true,
  className = '',
  showCaption = true,
}) {
  const { video, poster, title, category, accent } = project
  const ytId = getYouTubeId(project.youtube)
  // Prefer an explicit image; otherwise fall back to the YouTube thumbnail.
  const image = project.image || (ytId ? youTubeThumb(ytId) : null)

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
      <img
        className={`media ${className}`}
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => {
          // maxres thumbnails don't exist for every video — fall back.
          if (ytId && !e.currentTarget.dataset.fallback) {
            e.currentTarget.dataset.fallback = '1'
            e.currentTarget.src = youTubeThumbFallback(ytId)
          }
        }}
      />
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
