import { useState } from "react";

export default function AIMailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy AI response for now
  const generateMail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMail("");
    try {
      // Replace this with actual API call to your AI backend
      await new Promise(res => setTimeout(res, 1200));
      setMail(`Subject: AI Generated Mail\n\nDear User,\n\n${prompt}\n\nBest Regards,\nAI Mail Bot`);
    } catch (err) {
      setError("Failed to generate mail. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">AI Mail Generator</h1>
        <form onSubmit={generateMail} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Enter your prompt</label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-gray-100"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Mail"}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-center text-red-600 dark:text-red-400">{error}</div>
        )}
        {mail && (
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Generated Mail</label>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-100">{mail}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
