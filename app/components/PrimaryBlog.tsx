import ReadMore from "./ReadMore";

export default function PrimaryBlog({
  title,
  date,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  date: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className=" max w-[708px] shadow-small mb-4">
      <img
        src={imageSrc ?? "/PBlog.png"}
        alt={imageAlt ?? "Blog Post Image"}
        className="w-[708px] h-[369px] object-cover rounded-md mb-4"
      />
      <p className="text-medium text-gray-600 mb-4">{date}</p>
      <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      <p className="text-black text-base">{description}</p>
      <ReadMore href="/blog" className="mt-4" />
    </div>
  );
}