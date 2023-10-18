import request from "@/service/request";

export const create_project = async (payload: any) => request.post('/api/project/create', payload)

export const select_projects = async (payload: any) => request.post('/api/project/select', payload)

