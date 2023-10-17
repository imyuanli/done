import {ok} from "@/lib/utils";

export async function POST(request: any) {
    console.log(request?.session)
    const {name, description, visibility} = await request.json()
    console.log(name, description, visibility)
    // const user = await prisma.project.create({
    //     data: {
    //         name,
    //         description,
    //         visibility,
    //         // createdBy: {
    //         //     connect: { id: userId },
    //         // },
    //     },
    // })
    return ok({
        projectId: "123"
    })
}