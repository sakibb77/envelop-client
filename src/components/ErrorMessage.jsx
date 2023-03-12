const ErrorMessage = ({ error }) => {
  return (
    <p className="p-4 rounded bg-rose-100 text-rose-500 border border-rose-400">
      {error}
    </p>
  );
};

export default ErrorMessage;
