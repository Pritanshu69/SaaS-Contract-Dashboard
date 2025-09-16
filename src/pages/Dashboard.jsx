import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
        <p className="mt-2 text-gray-700">This is your main page after login.</p>
      </div>
    </div>
  );
}
