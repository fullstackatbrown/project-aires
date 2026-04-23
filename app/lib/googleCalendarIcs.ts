export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
};

type ParsedEvent = {
  title: string;
  start: Date;
  allDay: boolean;
  location: string;
};

function unfoldIcsLines(raw: string) {
  return raw.replace(/\r?\n[ \t]/g, "");
}

function parseIcsDate(value: string): { date: Date; allDay: boolean } | null {
  if (/^\d{8}$/.test(value)) {
    const y = Number(value.slice(0, 4));
    const m = Number(value.slice(4, 6)) - 1;
    const d = Number(value.slice(6, 8));
    return { date: new Date(Date.UTC(y, m, d)), allDay: true };
  }

  const match = value.match(
    /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/
  );
  if (!match) return null;

  const [, yy, mm, dd, hh, mi, ss, z] = match;
  const y = Number(yy);
  const m = Number(mm) - 1;
  const d = Number(dd);
  const h = Number(hh);
  const min = Number(mi);
  const s = Number(ss);

  const date = z
    ? new Date(Date.UTC(y, m, d, h, min, s))
    : new Date(y, m, d, h, min, s);

  return { date, allDay: false };
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function parseEvents(ics: string): ParsedEvent[] {
  const text = unfoldIcsLines(ics);
  const blocks = text.split("BEGIN:VEVENT").slice(1);

  return blocks
    .map((block) => {
      const summary = block.match(/\nSUMMARY:(.+)/)?.[1]?.trim() ?? "Untitled event";
      const location = block.match(/\nLOCATION:(.+)/)?.[1]?.trim() ?? "Location TBA";
      const dtStart = block.match(/\nDTSTART[^:]*:(.+)/)?.[1]?.trim();
      if (!dtStart) return null;

      const parsed = parseIcsDate(dtStart);
      if (!parsed) return null;

      return {
        title: summary,
        start: parsed.date,
        allDay: parsed.allDay,
        location,
      };
    })
    .filter((e): e is ParsedEvent => Boolean(e));
}

export async function fetchNextIcsEvents(limit = 3): Promise<EventItem[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) return [];

  const icsUrl = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
    calendarId
  )}/public/basic.ics`;

  const res = await fetch(icsUrl, { next: { revalidate: 300 } });
  if (!res.ok) return [];

  const raw = await res.text();
  const now = new Date();

  return parseEvents(raw)
    .filter((e) => e.start >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, limit)
    .map((e) => ({
      title: e.title,
      date: formatDate(e.start),
      time: e.allDay ? "All day" : formatTime(e.start),
      location: e.location,
    }));
}