import { useState } from "react";

export default function HikeCalculator() {
	const [baseSalary, setBaseSalary] = useState(0);
	const [hikePercent, setHikePercent] = useState(0);
	const [newSalary, setNewSalary] = useState<number | null>(null);

	const calculateHike = (e: React.FormEvent) => {
		e.preventDefault();
		const hikeAmount = (baseSalary * hikePercent) / 100;
		setNewSalary(baseSalary + hikeAmount);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
			<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Hike Calculator</h1>
				<form onSubmit={calculateHike} className="space-y-4">
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Base Salary</label>
						<input
							type="number"
							value={baseSalary}
							onChange={e => setBaseSalary(Number(e.target.value))}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100"
							min="0"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Hike Percentage (%)</label>
						<input
							type="number"
							value={hikePercent}
							onChange={e => setHikePercent(Number(e.target.value))}
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
				{newSalary !== null && (
					<div className="mt-6 text-center">
						<span className="text-lg font-semibold text-green-600 dark:text-green-400">
							New Salary: ₹{newSalary.toLocaleString()}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
