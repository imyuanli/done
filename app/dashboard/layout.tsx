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
        <div className={'min-h-screen h-full'}>
            <Header routers={routers}/>
            <main className={'py-4'}>
                {children}
            </main>
        </div>
    );
}


export default DashboardLayout
