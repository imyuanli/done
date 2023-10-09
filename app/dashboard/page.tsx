import {getServerSession} from "next-auth";
import LogoutButton from "@/app/dashboard/components/logout-button";
import Image from "next/image";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
const Dashboard = async () => {

    const session:any = await getServerSession(authOptions)
    console.log(session)

    return (
        <div>
            dashboard
            {
                session?
                    <div>
                        <h1>{session.user.name}</h1>
                        <h1>{session.user.email}</h1>
                        <Image
                            src={session.user.image}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <LogoutButton/>
                    </div>
                    :
                    <div>暂无信息</div>
            }
        </div>
    );
}


export default Dashboard