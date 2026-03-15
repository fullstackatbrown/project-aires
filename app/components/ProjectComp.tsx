import ReadMore from "./ReadMore";

export default function ProjectComp({
  title,
  description,
  imageSrc = "/PBlog.png",
  imageAlt = "Project thumbnail",
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="w-full max-w-[439px] flex flex-col p-5 mb-4 border border-[#08B2E3] rounded-xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full aspect-square object-cover rounded-xl border-2 border-white mx-auto"
      />

      <div className="mt-5 flex flex-col gap-3">
        <h2 className="text-xl font-medium text-black leading-tight">{title}</h2>
        <p className="text-sm text-black">{description}</p>
        <ReadMore href="/projects" className="mt-2" />
      </div>
    </div>
  );
}