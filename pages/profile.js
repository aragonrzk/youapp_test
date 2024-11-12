import { useEffect, useState } from 'react';
import { getProfile } from '../lib/api/getProfile';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const token = 'YOUR_ACCESS_TOKEN'; // Dapatkan token ini dari login atau storage

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile(token);
        setProfile(profileData);
      } catch (error) {
        setError("Failed to load profile.");
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Tampilkan data lain sesuai response API */}
    </div>
  );
}
