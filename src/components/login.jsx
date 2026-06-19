import { useState } from "react";

import Input from "./ui/input";
import Button from "./ui/button";

function Login({ onStart }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) onStart(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-96 h-96 flex items-center justify-center flex-col gap-6 rounded-lg bg-[#171717] p-8"
      >
        <h1 className="text-white text-xl font-semibold">Quiz Games</h1>

        <Input
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Masukkan nama anda..."
        />

        <Button type="submit">Mulai Quiz</Button>
      </form>
    </div>
  );
}
export default Login;
