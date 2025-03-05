import React, { useState } from "react";
import { notification } from "antd";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.ashyo.fullstackdev.uz/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Xatolik yuz berdi");
      }

      notification.success({ message: "Muvaffaqiyatli ro'yxatdan o'tildi!" });
    } catch (error) {
      notification.error({ message: "Xatolik!", description: error.message });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Ro'yxatdan o'tish</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded w-full">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default Register;
