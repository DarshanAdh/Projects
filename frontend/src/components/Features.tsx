import React from 'react';
import { Shield, Gift, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safety First",
      description: "Verified volunteers, in-app communication, and emergency assistance at your fingertips."
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      title: "Community Rewards",
      description: "Earn points for helping others, redeem for gas discounts and local business rewards."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Build Community",
      description: "Connect with helpful neighbors and pay it forward by becoming a volunteer."
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Roadside Rescue Network
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-gray-50 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}