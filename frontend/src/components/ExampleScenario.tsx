import { Clock, Car, MessageCircle, Heart } from 'lucide-react';

export default function ExampleScenario() {
  const timeline = [
    {
      time: "3:00 PM",
      icon: <Car className="h-6 w-6 text-blue-600" />,
      title: "Emma's car won't start",
      description: "Sends a 'Jump-Start Needed' alert from grocery store parking lot"
    },
    {
      time: "3:02 PM",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Alex receives notification",
      description: "Nearby driver with jumper cables accepts the request"
    },
    {
      time: "3:07 PM",
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "In-app communication",
      description: "Emma tracks Alex's approach and they chat safely through the app"
    },
    {
      time: "3:15 PM",
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Successful rescue",
      description: "Car is jumped, Emma donates to charity, both share 5-star reviews"
    }
  ];

  return (
    <div id="example" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A real-world example of how our community helps each other
          </p>
        </div>
        <div className="mt-20 max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <div key={index} className="relative pb-12">
              {index !== timeline.length - 1 && (
                <div className="absolute left-8 top-14 h-full w-0.5 bg-gray-200"></div>
              )}
              <div className="relative flex items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  {event.icon}
                </div>
                <div className="ml-6 pt-3">
                  <p className="text-sm text-blue-600 font-semibold">{event.time}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="mt-1 text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}