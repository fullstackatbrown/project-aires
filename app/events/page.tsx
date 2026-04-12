import EventsHeader from '../components/EventsHeader';
import EventsCalendar from '../components/EventsCalendar';
import CalendarInfo from '../components/CalendarInfo';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#08B2E3]">
            AIRES Events
          </h1>
        </div>
      </section>
      
      <section className="w-full bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <EventsCalendar />
        </div>
      </section>
    </main>
  );
}