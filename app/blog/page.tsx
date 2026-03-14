import Image from "next/image";

const BLOG_INTRO =
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.";

const POSTS = [
  {
    id: "1",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Discussion: Artificial Intelligence, Surveillance, and Defense",
    snippet:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: "2",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Discussion: Artificial Intelligence, Surveillance, and Defense",
    snippet:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: "3",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Discussion: Artificial Intelligence, Surveillance, and Defense",
    snippet:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: "4",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Discussion: Artificial Intelligence, Surveillance, and Defense",
    snippet:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

const FEATURED_POSTS = [
  {
    id: "f1",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Discussion: Artificial Intelligence, Surveillance, and Defense",
  },
  {
    id: "f2",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Impacts of Large Language Models in Today's Contemporary Society",
  },
  {
    id: "f3",
    image:
      "https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif",
    author: "Author Name",
    date: "Month, Day, Year",
    title: "Progress or Peril: The AI Ethics Debate",
  },
];

const PAGES = [1, 2, 3, 4];
const CURRENT_PAGE = 1;

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
        <h1 className="text-4xl font-bold text-[#5B9BD5] md:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500">
          {BLOG_INTRO}
        </p>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 md:flex-row md:gap-12">
        <div className="min-w-0 flex-1 md:order-1">
          <ul className="space-y-10">
            {POSTS.map((post) => (
              <li key={post.id} className="flex flex-col gap-4 sm:flex-row">
                <div className="h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                  <Image
                    src={post.image}
                    alt=""
                    width={208}
                    height={208}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="text-sm text-black">
                    {post.author} | {post.date}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-neutral-800">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-neutral-500">
                    {post.snippet}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center text-sm font-medium text-[#5B9BD5] hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <nav
            className="mt-10 flex items-center gap-1"
            aria-label="Blog pagination"
          >
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Previous page"
            >
              ←
            </button>
            {PAGES.map((page) => (
              <button
                key={page}
                type="button"
                className={`flex h-9 min-w-9 items-center justify-center rounded px-2 text-sm ${
                  page === CURRENT_PAGE
                    ? "bg-[#5B9BD5] text-white"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
              aria-label="Next page"
            >
              →
            </button>
          </nav>
        </div>

        <aside className="w-full shrink-0 md:order-2 md:w-80">
          <div className="rounded-xl border-2 border-black bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#5B9BD5] shrink-0">
                Featured
              </h2>
              <span className="h-px flex-1 bg-neutral-200" aria-hidden />
            </div>
            <ul className="mt-6 space-y-6">
              {FEATURED_POSTS.map((post) => (
                <li key={post.id} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-black">
                      {post.author} | {post.date}
                    </p>
                    <h3 className="mt-0.5 text-sm font-bold text-black line-clamp-2">
                      {post.title}
                    </h3>
                    <a
                      href="#"
                      className="mt-2 inline-block text-sm font-medium text-[#5B9BD5] hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="h-1 w-full bg-[#5B9BD5]" />
    </main>
  );
}
