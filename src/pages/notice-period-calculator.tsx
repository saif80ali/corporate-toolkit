import { useState } from "react";

export default function NoticePeriodCalculator() {
  const [startDate, setStartDate] = useState("");
  const [noticeDays, setNoticeDays] = useState(30);
  const [endDate, setEndDate] = useState<string | null>(null);

  const calculateEndDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || noticeDays < 0) return;
    const start = new Date(startDate);
    start.setDate(start.getDate() + noticeDays);
    setEndDate(start.toISOString().split("T")[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Notice Period Calculator</h1>
        <form onSubmit={calculateEndDate} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Last Working Day (Start Date)</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Notice Period (Days)</label>
            <input
              type="number"
              value={noticeDays}
              onChange={e => setNoticeDays(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100"
              min="0"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>
        {endDate && (
          <div className="mt-6 text-center">
            <span className="text-lg font-semibold text-green-600 dark:text-green-400">
              Notice Period End Date: {endDate}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
