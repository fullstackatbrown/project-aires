import ReadMore from "./ReadMore";

export default function PrimaryBlog({
  title,
  author,
  date,
  description,
  readMoreLink,
  readMoreTarget,
  imageSrc,
  imageAlt,
}: {
  title: string;
  author: string;
  date: string;
  description: string;
  readMoreLink?: string;
  readMoreTarget?: "_self" | "_blank";
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="w-full max-w-[708px] shadow-small mb-4">
      <img
        src={imageSrc ?? "/PBlog.png"}
        alt={imageAlt ?? "Blog Post Image"}
        className="w-full aspect-[708/369] object-cover rounded-md mb-4"
      />
      <p className="text-sm text-gray-600 mb-4"> {author} | {date}</p>
      <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      <p className="text-black text-base">{description}</p>
      <ReadMore href={readMoreLink ?? "/blog"} target={readMoreTarget} className="mt-4" />
    </div>
  );
}
