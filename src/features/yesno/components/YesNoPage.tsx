export default function YesNoPage() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Yes or No</h2>
        <p className="text-gray-600">고민되는 것을 입력해보세요</p>
      </div>

      <div className="mt-8">
        <textarea
          className="w-full p-4 border rounded-lg h-32 resize-none"
          placeholder="결정하기 어려운 일이 있나요?"
        />
      </div>

      <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        답변 받기
      </button>
    </div>
  );
}
