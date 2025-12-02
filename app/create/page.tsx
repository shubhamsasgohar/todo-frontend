"use client";

import { useState } from "react";
import { createTodo } from "@/lib/api";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const form = new FormData();
        form.append("title", title);
        form.append("details", details);
        if (file) form.append("file", file);

        await createTodo(form);
        window.location.href = "/";
    };

    return (
        <main className="p-8 max-w-xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">
                    Create New Task
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title"
                            className="border border-gray-300 px-4 py-2 w-full rounded
                         text-gray-900 placeholder-gray-400
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Details
                        </label>
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Optional description..."
                            className="border border-gray-300 px-4 py-2 w-full rounded h-28 resize-none
                         text-gray-900 placeholder-gray-400
                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Upload PDF (optional)
                        </label>

                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="block w-full text-gray-900 border border-gray-300 rounded
                         p-2 bg-gray-50 cursor-pointer"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between pt-4">
                        <a
                            href="/"
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400
                         text-gray-800 rounded shadow"
                        >
                            Cancel
                        </a>

                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700
                         text-white rounded shadow"
                        >
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
