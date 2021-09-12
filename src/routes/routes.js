import Buyumlar from "../pages/Buyumlar";
import Dashboard from "../pages/Dashboard";
import Davolanganlar from "../pages/Davolanganlar";

export const routes = [
    {
        key:"/dashboard",
        path:"/dashboard",
        component:Dashboard
    },
    {
        key:"/buyumlar",
        path:"/buyumlar",
        component:Buyumlar
    },
    {
        key:"/davolangan",
        path:"/davolangan",
        component:Davolanganlar
    },
]