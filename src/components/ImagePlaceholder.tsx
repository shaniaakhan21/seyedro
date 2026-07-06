interface ImagePlaceholderProps {
  label: string;
  className?: string;
  rounded?: boolean;
}

export function ImagePlaceholder({ label, className = '', rounded = true }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gold/25 bg-[repeating-linear-gradient(135deg,rgba(254,209,9,0.07)_0px,rgba(254,209,9,0.07)_10px,transparent_10px,transparent_20px)] bg-[#1E1E1E] ${rounded ? 'rounded-xl' : ''} ${className}`}
    >
      <span className="font-mono text-[11px] tracking-[1.5px] text-[#8A8A8A] uppercase px-4 text-center">
        {label}
      </span>
    </div>
  );
}
