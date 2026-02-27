const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="p-4 bg-red-100 text-red-800">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-3 py-1 bg-gray-200 rounded"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
