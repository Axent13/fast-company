import httpService from "./http.service";

const userEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndpoint + payload._id,
            payload
        );
        return data;
    },
    getById: async (localId) => {
        const { data } = await httpService.get(userEndpoint + localId);
        return data;
    }
};
export default userService;
