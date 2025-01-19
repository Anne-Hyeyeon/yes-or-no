import loadingBunny from "../../assets/images/loading/loading_bunny.jpeg";

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center text-center space-y-6">
        <img
          src={loadingBunny}
          alt="loading bunny"
          className="w-48 h-48 object-contain mx-auto"
        />
        <p className="text-xl font-medium text-gray-700">
          결정토끼가 너를 위해 생각 중이야...
        </p>
        <div className="flex items-center justify-center">
          <div
            className="w-10 h-10 border-4 border-t-gray-800 border-gray-300 rounded-full animate-spin"
            role="status"
          />
        </div>
      </div>
    </div>
  );
}
