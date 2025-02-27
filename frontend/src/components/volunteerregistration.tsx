import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/VolunteerRegistration.css'; 

function VolunteerRegistration() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  interface RegistrationData {
    name: string;
    phone: string;
    role: string;
    licenseNumber: string;
  }

  interface ApiResponse {
    message?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const registrationData: RegistrationData = {
      name,
      phone,
      role: 'provider',
      licenseNumber,
    };

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        navigate('/');
        console.log('Volunteer registration successful');
      } else {
        const data: ApiResponse = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="volunteer-registration-page">
      <div className="volunteer-registration">
        <h2>Become a Volunteer</h2>
        <p>Enter your details to join our network of roadside helpers.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="licenseNumber">License Number:</label>
            <input
              type="text"
              id="licenseNumber"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              required
              placeholder="e.g., DL12345678"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Register as Volunteer'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerRegistration;