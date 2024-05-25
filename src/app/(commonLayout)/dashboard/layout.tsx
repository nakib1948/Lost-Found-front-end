
import Dashboard from "@/Components/Dashboard/Dashboard";

const layout = ({children}:{children:React.ReactNode}) => {
   
    return (
        <Dashboard>{children}</Dashboard>
    );
};

export default layout;