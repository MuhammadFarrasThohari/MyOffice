import Router from "./Router";
import { TaskProvider } from "./data/Context";

export default function App() {
    return (
        <TaskProvider>
            <Router />
        </TaskProvider>
    );
}
