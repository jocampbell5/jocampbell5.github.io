/* Helpers for working with YouTube links.
   Accepts any of these for a project's `youtube` field:
     - https://www.youtube.com/watch?v=ABC123xyz00
     - https://youtu.be/ABC123xyz00
     - https://www.youtube.com/embed/ABC123xyz00
     - https://www.youtube.com/shorts/ABC123xyz00
     - ABC123xyz00            (the raw 11-char id)
*/

export function getYouTubeId(input) {
  if (!input) return null
  // Already a bare id?
  if (/^[\w-]{11}$/.test(input)) return input
  try {
    const url = new URL(input)
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1) || null
    const v = url.searchParams.get('v')
    if (v) return v
    const parts = url.pathname.split('/').filter(Boolean)
    const i = parts.findIndex((p) => p === 'embed' || p === 'shorts' || p === 'v')
    if (i >= 0 && parts[i + 1]) return parts[i + 1]
  } catch {
    // not a URL — fall through
  }
  return null
}

// High-res thumbnail (16:9). Not every upload has maxres, so callers should
// fall back to hqdefault on error.
export const youTubeThumb = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
export const youTubeThumbFallback = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

// Privacy-friendly embed URL.
export const youTubeEmbed = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`
