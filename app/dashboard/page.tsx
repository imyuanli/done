import AddModule from "@/app/dashboard/add-module";
import DragCard from "@/app/dashboard/drag-card";

const Dashboard = () => {
    return (
        <div className={'px-4 md:px-8'}>
            <div className={'flex justify-between'}>
                <div>
                    Dashboard
                </div>
                <AddModule/>
            </div>
            <div>
                <DragCard/>
            </div>
        </div>
    )
}


export default Dashboard