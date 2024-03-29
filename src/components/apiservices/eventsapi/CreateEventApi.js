import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:9090'
    }
)

export const createEventApi = (event, orgId) => apiClient.post(`/api/events/organiser/${orgId}/eventadd`, event)