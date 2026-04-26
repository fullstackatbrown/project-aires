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

const E_BOARD_ABSTRACT = (
  <>
    Meet our dedicated executive board members who lead AIRES @ Brown with
    passion and expertise.
  </>
);

export default async function EBoardPage() {
  // Fetch all e-board members from Sanity CMS using the `eBoardMembersQuery` defined in `./sanity-cms/lib/queries.ts`.
  const members = await client.fetch<SanityEBoardMember[]>(eBoardMembersQuery);

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-[#08B2E3] mb-4">
          Executive Board
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">{E_BOARD_ABSTRACT}</p>

        <div className="grid items-start gap-10 mt-16 md:grid-cols-2">
          {members.map((member) => (
            <div
              key={member._id}
              className="flex h-full flex-col bg-white rounded-xl shadow-md border border-[#08B2E3] p-8 sm:p-10"
            >
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="shrink-0">
                  {member.headshot ? (
                    <Image
                      src={urlFor(member.headshot)
                        .width(144)
                        .height(144)
                        .fit("crop")
                        .auto("format")
                        .url()}
                      alt={member.headshot.alt ?? member.name}
                      width={144}
                      height={144}
                      className="h-36 w-36 rounded-md object-cover"
                    />
                  ) : (
                    <div className="h-36 w-36 rounded-md bg-gray-100" />
                  )}
                </div>

                <div className="flex-1">
                  <h2 className="text-xl text-black">{member.name}</h2>
                  <p className="mt-1 text-sm text-[#08B2E3]">
                    {member.roleAtAIRES}
                  </p>

                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>Class {member.year}</p>
                    <p>Concentration: {member.concentration}</p>
                  </div>

                  <div className="my-5 h-0.5 w-10 sm:mx-0 mx-auto" />
                </div>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-gray-500">
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
      </div>
    </main>
  );
}
