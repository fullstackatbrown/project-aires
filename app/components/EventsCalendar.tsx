
export default function EventsCalendar() {
  const CALENDAR_ID =
    'Y180MzEzMzEyMTIyNGJhY2FmYjUxNmY3YzhlYTQyZWUyMjFjODE0MGZhOTliM2ViYjU2MDgzZDMwYjdjZTA4NmU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
  const calendarUrl = `https://calendar.google.com/calendar/u/0/r/month?cid=${CALENDAR_ID}`;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#08B2E3]">Event Calendar</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-[#08B2E3] text-white px-6 py-4">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <p className="text-sm text-cyan-100 mt-1">Click on any event to see more details</p>
        </div>

        <div className="w-full bg-gray-50 p-6">
          <iframe
            src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=America%2FNew_York`}
            width="100%"
            height="600"
            className="rounded border-0"
            title="AIRES @ Brown Events Calendar"
            style={{ minHeight: '600px', display: 'block' }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#08B2E3] text-white font-semibold rounded-lg hover:bg-[#08B2E3] transition-colors duration-200"
        >
          Add to G-cal
        </a>
      </div>
    </div>
  );
}
