import Navbar from "../components/Navbar";

export default function Settings() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Settings Page</h1>
        <p className="mt-2 text-gray-700">User settings go here.</p>
      </div>
    </div>
  );
}