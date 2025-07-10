import { Routes, Route } from "react-router";
import AppLayout from "../Layout/AppLayout";
import { Home, About } from "../Pages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout><Home /></AppLayout>}/>
            <Route path="/about" element={<AppLayout><About /></AppLayout>}/>
        </Routes>
    )
}


export default AppRouter;