// components/common/FullPageLoader.tsx
const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-darkest flex flex-col items-center justify-center text-white z-50 ">
      <div className="loader mb-4 animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-xl font-semibold">Loading your dashboard...</p>
    </div>
  );
};

export default FullPageLoader;
