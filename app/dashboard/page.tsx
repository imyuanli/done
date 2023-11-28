import AddModule from "@/components/dashboard/add-module";

const Dashboard = () => {
    return (
        <div className={'min-h-screen h-full py-4'}>
            <div className={'px-4 md:px-8'}>
                <div className={'flex justify-between'}>
                    <div>
                        Dashboard
                    </div>
                    <AddModule/>
                </div>
            </div>
        </div>
    )
}


export default Dashboard