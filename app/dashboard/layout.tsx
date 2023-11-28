import Header from "@/components/header";

const routers = [
    {
        name: '工作台',
        value: '',
    },
    {
        name: '项目',
        value: '/projects',
    }
]

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Header routers={routers}/>
            {children}
        </>
    );
}


export default DashboardLayout
