const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        width: 360,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        '@media (max-width: 425px)': {
            width: 342
        }
    },
    title: {
        height: 24,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.2,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 23
    },
    text: {
        height: 85,
        fontFamily: 'Roboto',
        fontSize: 20,
        lineHeight: 1.2,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 4
    },
    reason: {
        height: 25,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.2,
        textAlign: 'left',
        color: '#000000',
        marginBottom: 8
    },
    star: {
        color: '#ff0000'
    },
    description:{
        height: 82.8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.19,
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#757575',
        backgroundColor: '#ffffff',
        marginBottom: 25.2,
        boxSizing: 'border-box',
        paddingTop: 20,
        paddingLeft: 6,
        resize: 'none'
    }
};

export default styles;