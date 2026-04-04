import EventsHeader from '../components/EventsHeader';
import EventsCalendar from '../components/EventsCalendar';
import CalendarInfo from '../components/CalendarInfo';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventsHeader />
      
      <section className="w-full bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <EventsCalendar />
        </div>
      </section>
      
      <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <CalendarInfo />
        </div>
      </section>
    </main>
  );
}