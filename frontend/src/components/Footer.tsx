import React from 'react';
import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center">
          <Car className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">Roadside Rescue Network</span>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Neighbors helping neighbors, on the road.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">About</a>
          <a href="#" className="text-gray-400 hover:text-white">Safety</a>
          <a href="#" className="text-gray-400 hover:text-white">Volunteer</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          © 2025 Roadside Rescue Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}