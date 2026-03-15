import ReadMore from "./ReadMore";

type BlogCompProps = {
  title: string;
  author: string;
  date: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function BlogComp({
  title,
  author,
  date,
  imageSrc = "/PBlog.png",
  imageAlt = "Blog thumbnail",
}: BlogCompProps) {
  return (
    <div className="w-full max-w-[572px] min-h-[163px] flex items-center gap-4 p-4 mb-4">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[163px] lg:h-[163px] object-cover rounded-2xl shrink-0"
      />

      <div className="flex flex-col justify-center gap-3 min-h-[120px] sm:min-h-[140px] lg:min-h-[163px]">
        <p className="text-sm text-gray-600">
          {author} | {date}
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-black leading-tight">{title}</h2>
        <ReadMore href="/blog" className="mt-1" />
      </div>
    </div>
  );
}