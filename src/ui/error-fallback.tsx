const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="bg-red-100 p-4 text-red-800">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 rounded bg-gray-200 px-3 py-1"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
