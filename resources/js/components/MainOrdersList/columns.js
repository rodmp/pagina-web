import React from "react";
import { Button, Badge } from "@bigcommerce/big-design";

const orderActions = {
        cancelOrder: "Cancel"
    },
    orderStatus = {
        incomplete: "Incomplete",
        awaitingFulfillment: "Awaiting Fulfillment"
    },
    orderActionType = {
        cancel: "destructive"
    };

/**
 * Get Action Name by status
 *
 * @param {orderStatus[keyof orderStatus]} status
 */
const getActionName = status => {
    switch (status) {
        case orderStatus.incomplete: {
            return orderActions.cancelOrder;
        }
        case orderStatus.awaitingFulfillment: {
            return null;
        }
        default: {
            return null;
        }
    }
};

/**
 * Get Action Type from Action Name
 *
 * @param {orderActions[keyof orderActions]} actionName
 */
const getActionType = actionName => {
    switch (actionName) {
        case orderActions.cancelOrder: {
            return orderActionType.cancel;
        }
        default: {
            return null;
        }
    }
};

/**
 *
 * @param {orderStatus[keyof orderStatus]} status
 */
const getStatusVariant = status => {
    switch (status) {
        case orderStatus.incomplete: {
            return "danger";
        }
        case orderStatus.awaitingFulfillment: {
            return "secondary";
        }
        default: {
            return "success";
        }
    }
};

/**
 * Render Columns
 *
 * @param {(id: string, actionName: string)=>void} onAction
 */
export const columns = onAction => [
    {
        header: "Order Id",
        hash: "id",
        render: ({ id }) => id
    },
    {
        header: "Billing Name",
        hash: "billing_address",
        render: ({ billing_address }) =>
            `${billing_address.first_name} ${billing_address.last_name}`
    },
    {
        header: "Order Total",
        hash: "total_ex_tax",
        render: ({ total_ex_tax }) => total_ex_tax
    },
    {
        header: "Order Status",
        hash: "status",
        render: ({ status }) =>
            React.createElement(
                Badge,
                {
                    variant: getStatusVariant(status),
                    label: status
                },
                null
            )
    },
    {
        header: "Actions",
        hash: "actions",
        render: ({ id, status }) => {
            const actionName = getActionName(status);
            const actionType = getActionType(actionName);
            if (actionName) {
                return React.createElement(
                    Button,
                    {
                        actionType,
                        onClick: e => onAction(id, actionName)
                    },
                    actionName
                );
            }
            return null;
        }
    }
];

export default columns;
