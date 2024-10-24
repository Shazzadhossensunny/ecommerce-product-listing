const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center p-4 h-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 opacity-75"></div>
  </div>
);

export default LoadingSpinner;
