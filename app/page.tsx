import { creators } from "@/lib/creators";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path d="M5.25 12a.75.75 0 0 1 .75-.75h9.19l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H6a.75.75 0 0 1-.75-.75Z" />
  </svg>
);

export default function Page() {
  return (
    <main>
      <header>
        <h1>Fresh Australian Creators</h1>
        <p>
          Handpicked podcasters and YouTubers across Australia building engaged
          communities with under 100k subscribers. Reach out for collaborations,
          guests, or sponsorships while their audiences are still growing fast.
        </p>
      </header>
      <section className="grid">
        {creators.map((creator) => (
          <article key={creator.name} className="card">
            <div className="badge">{creator.location}</div>
            <div className="card-title">{creator.name}</div>
            <p>{creator.description}</p>
            <div className="meta">
              {creator.estimatedAudience.youtubeSubscribers && (
                <span>
                  YouTube · {creator.estimatedAudience.youtubeSubscribers}
                </span>
              )}
              {creator.estimatedAudience.podcastListeners && (
                <span>
                  Podcast · {creator.estimatedAudience.podcastListeners}
                </span>
              )}
            </div>
            <div className="category">
              {creator.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
            <p>{creator.highlight}</p>
            <div className="category">
              {creator.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="links">
              {creator.platformHandles.youtube && (
                <a
                  className="link"
                  href={creator.platformHandles.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>YouTube</span>
                  <ArrowIcon />
                </a>
              )}
              {creator.platformHandles.podcast && (
                <a
                  className="link"
                  href={creator.platformHandles.podcast}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Podcast</span>
                  <ArrowIcon />
                </a>
              )}
              {creator.platformHandles.website && (
                <a
                  className="link"
                  href={creator.platformHandles.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Website</span>
                  <ArrowIcon />
                </a>
              )}
              {creator.platformHandles.instagram && (
                <a
                  className="link"
                  href={creator.platformHandles.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram</span>
                  <ArrowIcon />
                </a>
              )}
              {creator.platformHandles.tiktok && (
                <a
                  className="link"
                  href={creator.platformHandles.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>TikTok</span>
                  <ArrowIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
