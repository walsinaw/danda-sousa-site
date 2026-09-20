type PhotoPlaceholderProps = {
  label?: string;
  aspectRatio?: string;
  className?: string;
};

export default function PhotoPlaceholder({
  label = "Sua foto aqui",
  aspectRatio = "4 / 5",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      style={{ aspectRatio }}
    >
      <span className="photo-placeholder__label">{label}</span>
    </div>
  );
}
