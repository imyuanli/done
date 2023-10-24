import request from "@/service/request";

export const create_project = async (payload: any) => request.post('/api/project/create', payload)

export const get_project_list = async (payload: any) => request.post('/api/project/get_project_list', payload)

