import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity-cms/lib/client";
import { urlFor } from "@/sanity-cms/lib/image";
import { eBoardMembersQuery } from "@/sanity-cms/lib/queries";

interface SanityEBoardMember {
  _id: string;
  name: string;
  year: string;
  concentration?: string;
  roleAtAIRES: string;
  shortBio?: string;
  headshot?: SanityImageSource & { alt?: string };
}

export default async function EBoardPage() {
  // Fetch all e-board members from Sanity CMS using the `eBoardMembersQuery` defined in `./sanity-cms/lib/queries.ts`.
  const members = await client.fetch<SanityEBoardMember[]>(eBoardMembersQuery);

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-[#08B2E3] mb-4">
          Executive Board
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {members.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-10"
            >
              {member.headshot ? (
                <Image
                  src={urlFor(member.headshot).url()}
                  alt={member.headshot.alt ?? member.name}
                  className="w-24 h-24 object-cover rounded-md mx-auto"
                />
              ) : (
                <div className="w-24 h-24 rounded-md bg-gray-100 mx-auto" />
              )}

              <h2 className="text-xl mt-6 text-black">{member.name}</h2>
              <p className="text-[#08B2E3] text-sm mt-1">
                {member.roleAtAIRES}
              </p>

              <div className="w-10 h-0.5 bg-gray-200 mx-auto my-5" />

              <p className="text-gray-500 text-sm leading-relaxed">
                {member.shortBio ?? ""}
              </p>
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <p className="text-gray-500 max-w-2xl mx-auto mt-10">
            No e-board members yet.
          </p>
        )}

        <div className="bg-[#08B2E3] text-white rounded-xl mt-20 py-16 px-10">
          <h2 className="text-2xl mb-4">
            Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
          </h2>

          <p className="text-sm opacity-90">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet.
          </p>
        </div>
      </div>
    </main>
  );
}
