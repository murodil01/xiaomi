import React, { useEffect, useState } from "react";
import { notification } from "antd";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("https://api.ashyo.fullstackdev.uz/api/profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Noma'lum xatolik yuz berdi");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        notification.error({
          message: "Xatolik!",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      {user ? (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
          <p><strong>Ism:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefon:</strong> {user.phone}</p>
        </div>
      ) : (
        <p>Foydalanuvchi ma'lumotlari topilmadi.</p>
      )}
    </div>
  );
};

export default Profile;
