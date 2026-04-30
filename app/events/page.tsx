import EventsCalendar from '../components/EventsCalendar';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full bg-white py-12 text-center">
        <div className="page-container">
          <h1 className="page-title">
            AIRES Events
          </h1>
        </div>
      </section>
      
      <section className="w-full bg-gray-50 py-12">
        <div className="page-container">
          <EventsCalendar />
        </div>
      </section>
    </main>
  );
}