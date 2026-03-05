import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p>{count}</p>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button onClick={() => setCount((count) => count + 1)}>
                        Increment
                    </button>

                    <button onClick={() => setCount((count) => count - 1)}>
                        Decrement
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
