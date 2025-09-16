import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Profile Page</h1>
        <p className="mt-2 text-gray-700">User profile details go here.</p>
      </div>
    </div>
  );
}
