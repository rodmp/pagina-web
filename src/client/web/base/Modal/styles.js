const styles = {
    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 82,
        '@media (max-width: 425px)': {
            paddingTop: 79
        }
    },
    modal: {
        width: 503,
        height: 398,
        borderRadius: 6,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        '@media (max-width: 425px)': {
            width: 360
        }
    },
    closeContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: 32
    },
    close: {
        width: 21,
        height: 21,
        marginTop: 11,
        marginRight: 11,
        padding: 0,
        backgroundColor: 'transparent',
        border: 'none',
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
    },
    hide: {
        display: 'none'
    }
};

export default styles;