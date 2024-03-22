import Image from "next/image";

interface Props {
  src: any;
  alt: string;
  style?: any;
  className?: string;
  ad?: boolean;
}

export default function PageImage({ src, alt, style, className, ad }: Props) {
  return (
    <>
      <Image priority className={className} src={src} alt={alt} style={style} />
      {ad ? (
        <span className="absolute right-3 bg-[#000000] pl-3 pr-3 text-white text-[12.8px] font-[700]">
          Ad
        </span>
      ) : (
        ""
      )}
    </>
  );
}
