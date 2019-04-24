import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = (props) => {
    const { classes, onClose, children, visible } = props;
    return (
        <div className={ visible ? classes.backdrop : classes.hide}>
            <div className={classes.modal}>
                <div className={classes.closeContainer}>
                    <button onClick={onClose} className={classes.close}>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg" color="#000000" />
                    </button>
                </div>
                <div className={classes.contentContainer}>{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default withStyles(styles)(Modal);