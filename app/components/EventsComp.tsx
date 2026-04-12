import Button from "./Button";

type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
};

function CalendarIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block w-3.5 h-3.5 border border-black rounded-[2px] align-middle"
    >
      <span className="absolute left-0 right-0 top-[4px] border-t border-black" />
      <span className="absolute top-[-2px] left-[3px] w-[2px] h-[3px] bg-black rounded-sm" />
      <span className="absolute top-[-2px] right-[3px] w-[2px] h-[3px] bg-black rounded-sm" />
    </span>
  );
}

function ClockIcon() {
  return (
    <span aria-hidden="true" className="relative inline-block w-4 h-4 align-middle">
      <span className="absolute inset-0 border border-black rounded-full" />
      <span className="absolute left-1/2 top-[3px] -translate-x-1/2 w-[1.25px] h-[5px] bg-black rounded" />
      <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[4px] h-[1.25px] bg-black rounded origin-left rotate-45" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-[1.5px] bg-black rounded-full" />
    </span>
  );
}

function PinIcon() {
  return (
    <span aria-hidden="true" className="relative inline-block w-5 h-5 shrink-0">
      <span className="absolute left-1/2 top-[1px] -translate-x-1/2 w-[10px] h-[10px] border border-black rounded-full" />
      <span className="absolute left-1/2 top-[10px] -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-black" />
      <span className="absolute left-1/2 top-[4px] -translate-x-1/2 w-[2.5px] h-[2.5px] bg-black rounded-full" />
    </span>
  );
}

export default function EventsComp({
  events = [
    { title: "AI Ethics Panel", date: "Apr 10, 2026", time: "6:00 PM", location: "CIT 101" },
    { title: "Robotics Workshop", date: "Apr 17, 2026", time: "4:30 PM", location: "Engineering Lab" },
    { title: "Policy Roundtable", date: "Apr 24, 2026", time: "5:00 PM", location: "Salomon 001" },
  ],
}: {
  events?: EventItem[];
}) {
  return (
    <section className="w-full mt-10 pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="relative bg-white text-black rounded-xl border border-gray-400 px-6 md:px-10 lg:px-12 pt-10 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-start pb-6">
            {/* Left column */}
            <div>
              <h2 className="text-4xl md:text-4xl font-semibold leading-tight text-[#08B2E3]">
                Upcoming Events
              </h2>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-2 md:mt-3">
              {events.slice(0, 3).map((event, idx) => (
                <div
                  key={`${event.title}-${idx}`}
                  className={`md:px-5 ${
                    idx === 0
                      ? "md:border-l md:border-r md:border-gray-400"
                      : idx < 2
                      ? "md:border-r md:border-gray-400"
                      : ""
                  }`}
                >
                  <h3 className="text-lg md:text-[26px] font-semibold leading-tight mb-4 text-black">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-sm md:text-base text-black">
                    <p className="flex items-center gap-2">
                      <CalendarIcon />
                      <span>{event.date}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ClockIcon />
                      <span>{event.time}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="inline-flex w-4 h-4 items-center justify-center">
                        <PinIcon />
                      </span>
                      <span>{event.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intersecting bottom button */}
          <div className="absolute left-1/2 -bottom-5 -translate-x-1/2">
            <Button
              text="View More Events"
              href="/events"
              filled={1}
              className="px-7 py-1 text-sm whitespace-nowrap shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}