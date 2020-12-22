export const ApiService = {
    /**
     * Get orders from store
     *
     * @param {*} params
     */
    getOrders(params) {
        params = Object.assign(
            {
                page: 1,
                limit: 10,
            },
            params
        );

        return axios({
            method: "get",
            url: "/bc-api/v2/orders",
            params,
        });
    },

    /**
     * Get Orders Count
     */
    getOrdersCount() {
        return axios({
            method: "get",
            url: "/bc-api/v2/orders/count",
        });
    },

    /**
     * Update Order by Id
     *
     * @param {string | number} orderId
     * @param {*} data
     */
    updateOrder(orderId, data) {
        return axios({
            method: "put",
            url: `/bc-api/v2/orders/${orderId}`,
            data,
        });
    },

    /**
     * Delete Order by Id
     *
     * @param {string | number} orderId
     */
    deleteOrder(orderId) {
        return axios({
            method: "delete",
            url: `/bc-api/v2/orders/${orderId}`,
        });
    },

    /**
     * Get resource with Pagination
     *
     * @param {string} resource Query string
     * @param {*} params
     */
    getResourceCollection(resource, params) {
        params = Object.assign(
            {
                page: 1,
                limit: 10,
            },
            params
        );

        return axios({
            method: "get",
            url: `/bc-api/${resource}`,
            params,
        });
    },

    /**
     * Get all resource
     *
     * @param {string} resource Query string
     * @param {*} params
     */
    getResourceEntry(resource, params) {
        return axios({
            method: "get",
            url: `/bc-api/${resource}`,
            params,
        });
    },

    /**
     * Update Resource
     *
     * @param {string} resource Query string
     * @param {*} data New data
     */
    updateResourceEntry(resource, data) {
        return axios({
            method: "put",
            url: `/bc-api/${resource}`,
            data,
        });
    },

    /**
     * Delete Resource
     *
     * @param {string} resource Query string
     */
    deleteResourceEntry(resource) {
        return axios({
            method: "delete",
            url: `/bc-api/${resource}`,
        });
    },
};
