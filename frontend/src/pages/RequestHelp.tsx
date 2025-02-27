import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car as CarIcon, PenTool as Tool, AlertCircle } from 'lucide-react';

interface Location {
  latitude: number | null;
  longitude: number | null;
  address: string;
}

export default function RequestHelp() {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    address: '',
  });
  const [carDetails, setCarDetails] = useState({
    model: '',
    color: '',
    year: '',
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const issues = [
    'Flat Tire',
    'Dead Battery',
    'Out of Gas',
    'Engine Problem',
    'Locked Out',
    'Other',
  ];

  useEffect(() => {
    if ('geolocation' in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // In a real app, we would use a geocoding service here
            setLocation({
              latitude,
              longitude,
              address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
            });
          } catch (error) {
            setError('Failed to get your location. Please enter it manually.');
          } finally {
            setIsLoading(false);
          }
        },
        () => {
          setError('Please enable location services to use this feature.');
          setIsLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/api/help/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          location,
          carDetails,
          issue,
        }),
      });

      if (response.ok) {
        console.log('Help request submitted successfully');
        // Optionally, navigate to a confirmation page or show a success message
      } else {
        const data = await response.json();
        setError(data.message || 'Help request submission failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900">Request Roadside Help</h1>
              <p className="mt-2 text-gray-600">We'll connect you with nearby volunteers</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Location Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h2>Your Location</h2>
                </div>
                {isLoading ? (
                  <div className="flex items-center justify-center h-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-600 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{location.address || 'Location not available'}</p>
                  </div>
                )}
              </div>

              {/* Personal Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <h2>Your Details</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Car Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <CarIcon className="h-6 w-6 text-blue-600" />
                  <h2>Vehicle Details</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Model"
                    value={carDetails.model}
                    onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Color"
                    value={carDetails.color}
                    onChange={(e) => setCarDetails({ ...carDetails, color: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    value={carDetails.year}
                    onChange={(e) => setCarDetails({ ...carDetails, year: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Issue Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <Tool className="h-6 w-6 text-blue-600" />
                  <h2>What's the Issue?</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {issues.map((issueType) => (
                    <button
                      key={issueType}
                      type="button"
                      onClick={() => setIssue(issueType)}
                      className={`p-3 text-sm rounded-lg border transition-all ${
                        issue === issueType
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {issueType}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Find Nearby Help
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}