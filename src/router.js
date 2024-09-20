import AboutHarry from "./Pages/About";
import MainPage from "./Pages/MainPage";
import Params from "./Pages/Params";

const router = [
    {
        element : <MainPage/>,
        path: "/"
    },
    {
        element : <AboutHarry/>,
        path : "/about"
    },
    {
        element : <Params/>,
        path:"/facts/:id"
    }

]
export default router