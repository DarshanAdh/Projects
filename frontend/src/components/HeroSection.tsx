import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    navigate('/volunteer-registration');
  };

  return (
    <div className="relative bg-white pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Neighbors helping neighbors,
            <span className="text-blue-600"> on the road</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A community-focused app where drivers in need can send alerts to nearby volunteers
            for free or low-cost assistance. Think "crowdsourced roadside help" powered by
            kindness, rewards, and real-time tech.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleVolunteerClick}
              className="rounded-md bg-gray-100 px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <img
            src="https://www.datocms-assets.com/49357/1634679845-roadside-help.jpg?auto=format&fit=max&w=1200"
            alt="Roadside assistance"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}