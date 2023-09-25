import { HomePage } from "./components/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CourseDetails } from "./components/CourseDetailPage/CourseDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/courses/:id",
        element: <CourseDetails />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <div className="w-full h-screen">
                <HomePage />
            </div>
        </RouterProvider>
    );
}

export default App;
