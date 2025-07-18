import { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                id="title"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            /><br />

            <input
                id="desc"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            /><br />

            <button
                style={{ margin: 10 }}
                onClick={() => {
                    fetch("http://localhost:3000/todos", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("Todo added");
                    })
                    .catch(err => {
                        console.error("Error adding todo:", err);
                        alert("Failed to add todo");
                    });
                }}
            >Add a todo</button>
        </div>
    );
}
