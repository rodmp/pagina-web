import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Button from 'root/src/client/web/base/Button'
import Modal from 'root/src/client/web/base/Modal';
import styles from './styles';

class RejectDareModal extends React.Component {
    state = {
        rejectDescription: ''
    }

    onConfirm = () => {
        this.props.onClose();
        // submit this.state.rejectDescription
    }

    render() {
        const { classes, visible, onClose } = this.props;

        return (
            <Modal visible={visible} onClose={onClose}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.title}>Reject Dare</div>
                        <div className={classes.text}>
                            You won't be able to get this Dare back. This may disappoint any fans who already pledged.
                        </div>
                        <div className={classes.reason}>
                            Reason<span className={classes.star}>*</span>:
                        </div>
                        <textarea
                            className={classes.description}
                            placeholder="Reject Description"
                            value={this.state.rejectDescription}
                            onChange={(event) => { this.setState({rejectDescription: event.target.value}) }}
                        />
                        <Button onClick={this.onConfirm}>Confirm</Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

RejectDareModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RejectDareModal);