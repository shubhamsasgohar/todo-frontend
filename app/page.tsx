"use client";

import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo, TodoItem } from "@/lib/api";

export default function HomePage() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    useEffect(() => {
        const load = async () => {
            const items = await fetchTodos();
            setTodos(items);
        };
        load();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        const items = await fetchTodos();
        setTodos(items);
    };

    return (
        <main className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-semibold">Todo List</h1>

                <a
                    href="/create"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                >
                    + Add New Task
                </a>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="text-left p-3 font-medium text-gray-600">#</th>
                        <th className="text-left p-3 font-medium text-gray-600">Title</th>
                        <th className="text-left p-3 font-medium text-gray-600">
                            Details
                        </th>
                        <th className="text-left p-3 font-medium text-gray-600">PDF</th>
                        <th className="text-right p-3 font-medium text-gray-600">
                            Actions
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {todos.length === 0 ? (
                        <tr>
                            <td
                                colSpan={4}
                                className="text-center p-6 text-gray-500 italic"
                            >
                                No tasks available.
                            </td>
                        </tr>
                    ) : (
                        todos.map((todo, index) => (
                            <tr
                                key={todo.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="p-3 font-medium text-gray-900">
                                    {index + 1}
                                </td>
                                <td className="p-3 font-medium text-gray-900">
                                    {todo.title}
                                </td>
                                <td className="p-3 text-gray-700">{todo.details}</td>

                                <td className="p-3">
                                    {todo.document_path ? (
                                        <a
                                            href={`http://127.0.0.1:8000/storage/${todo.document_path}`}
                                            target="_blank"
                                            className="text-blue-600 underline text-sm"
                                        >
                                            View PDF
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-sm">No file</span>
                                    )}
                                </td>

                                <td className="p-3 text-right space-x-2">
                                    <a
                                        href={`/edit/${todo.id}`}
                                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm shadow"
                                    >
                                        Edit
                                    </a>

                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm shadow"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
