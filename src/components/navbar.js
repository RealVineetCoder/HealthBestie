export default function Navbar() {
    return (
      <header className="w-full bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-500">
            AI Health Bestie
          </a>
          <ul className="flex gap-6 text-gray-700">
            <li>
              <a href="/" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-pink-500 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-pink-500 transition">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/mental-health" className="hover:text-pink-500 transition">
                Mental Health Chat
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  