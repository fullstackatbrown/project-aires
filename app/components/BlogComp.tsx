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
    <div className="flex items-center gap-4 p-4 mb-4 w-143 min-h-41">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-41 h-41 object-cover rounded-2xl shrink-0"
      />

      <div className="flex flex-col justify-center h-41 gap-1">
        <p className="text-sm text-gray-600">
          {author} | {date}
        </p>
        <h2 className="text-xl font-semibold text-black leading-tight">{title}</h2>
        <ReadMore href="/blog" className="mt-1" />
      </div>
    </div>
  );
}