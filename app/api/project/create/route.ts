import {ok} from "@/lib/utils";
import {getToken} from "next-auth/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
    const token = await getToken({req:request})
    const {name, description, visibility} = await request.json()
    const project = await prisma.project.create({
        data: {
            name,
            description,
            visibility,
            createdBy: {
                connect: { id: token?.sub },
            },
        },
    })
    return ok({
        projectName: project.name
    })
}