export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-surface-border">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Project 3D animation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
