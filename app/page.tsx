import Header from "@/components/header";
import HomePage from "@/components/home-page";

export default function Home() {

    return (
        <div className={'flex justify-center items-center flex-col w-full'}>
            <Header/>
            <main className={'container'}>
                <HomePage/>
            </main>
        </div>
    )
}
