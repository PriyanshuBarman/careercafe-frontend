export default function BannerBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <img
        src="/dashcart-banner.jpg"
        alt="Challenge Banner"
        className="size-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/85 to-transparent sm:via-neutral-950/55" />
    </div>
  );
}
