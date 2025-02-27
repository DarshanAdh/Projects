import React from 'react';
import { MapPin, MessageCircle, Star, Shield } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Request Help",
      description: "Open the app, tap 'Request Volunteer', select your issue, and share your location."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "Connect with Volunteers",
      description: "Nearby volunteers receive alerts and can choose to help based on their skills."
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Get Assistance",
      description: "Track your volunteer's arrival and communicate safely through the app."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Stay Safe",
      description: "All volunteers are vetted, and you can access emergency services if needed."
    }
  ];

  return (
    <div id="how-it-works" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple steps to get help when you need it most
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}