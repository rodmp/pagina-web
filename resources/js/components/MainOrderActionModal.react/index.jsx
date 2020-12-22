import React, {useState} from "react";
import {Button, Modal, Text} from "@bigcommerce/big-design";
import _ from "lodash";

function MainOrderActionModal(props) {
    const {actionName, onClickApply} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClickApply = () => {
        setIsOpen(false);
        onClickApply();
    };
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                {_.capitalize(actionName)}
            </Button>
            <Modal
                actions={[
                    {
                        text: "Cancel",
                        variant: "subtle",
                        onClick: () => setIsOpen(false),
                    },
                    {text: "Apply", onClick: handleClickApply},
                ]}
                header={`${_.capitalize(actionName)} Order`}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnEscKey={true}
                closeOnClickOutside={false}
            >
                <Text>{`Will you ${_.toLower(actionName)} this order?`}</Text>
            </Modal>
        </>
    );
}

export default MainOrderActionModal;
