import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100">
        404
      </h1>

      <p className="mb-8 max-w-md text-center text-xl text-gray-600 dark:text-gray-300">
        Oops! The page you’re looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="rounded-full bg-blue-500 px-6 py-3 text-white shadow transition hover:bg-blue-600"
      >
        Go back home
      </Link>
    </div>
  );
}
