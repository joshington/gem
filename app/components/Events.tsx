
import { Calendar } from "lucide-react";

const events = [
  { date: "May 19 - 21", title: "Pastors & Minister's Training ", time: "8:00 AM" },
  { date: "August 25 - 31", title: "Destiny Is Calling Conference", time: "8:00 AM" },
];

export default function Events() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 flex items-center gap-3">
          <Calendar /> Upcoming Events
        </h2>
        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="flex items-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-900 font-bold px-4 py-2 rounded-lg mr-6 text-center">
                {event.date}
              </div>
              <div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-slate-500">{event.time}</p>
              </div>
              <button className="ml-auto text-blue-600 font-semibold hover:underline">Details →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}