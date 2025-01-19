export default function MultiChoicePage() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">여러 선택지</h2>
        <p className="text-gray-600">선택지를 입력해보세요</p>
      </div>

      <div className="mt-8 space-y-3">
        <input
          type="text"
          className="w-full p-3 border rounded-lg"
          placeholder="선택지 1"
        />
        <input
          type="text"
          className="w-full p-3 border rounded-lg"
          placeholder="선택지 2"
        />
      </div>

      <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        선택지 추가하기
      </button>
    </div>
  );
}
