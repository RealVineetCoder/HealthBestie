export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 AI Health Bestie. All rights reserved.</p>
          <p className="mt-1">
            <a
              href="/"
              className="text-pink-500 hover:underline hover:text-pink-600"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href="/"
              className="text-pink-500 hover:underline hover:text-pink-600"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    );
  }
  
  