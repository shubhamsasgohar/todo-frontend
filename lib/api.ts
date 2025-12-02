const BASE_URL = "http://127.0.0.1:8000/api";

export interface TodoItem {
    id: number;
    title: string;
    details: string | null;
    document_path: string | null;
}

// Fetch all todos
export async function fetchTodos(): Promise<TodoItem[]> {
    const response = await fetch(`${BASE_URL}/todos`, {
        cache: "no-store",
    });
    return response.json();
}

// Create new todo
export async function createTodo(payload: FormData) {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        body: payload,
    });
    return response.json();
}

// Update existing todo
export async function updateTodo(id: number, payload: FormData) {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "POST",
        body: payload,
    });
    return response.json();
}

// Delete a todo
export async function deleteTodo(id: number) {
    await fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE",
    });
}

export async function getTodoById(id: number): Promise<TodoItem> {
    const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch todo");
    }

    return res.json();
}
