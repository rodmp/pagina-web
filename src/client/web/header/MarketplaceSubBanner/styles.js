const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    stepComponent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 1218,
        height: 140,
        boxShadow: '0 3px 26px 0 rgba(0, 0, 0, 0.16)',
        backgroundColor: '#ffffff',
        marginTop: 25,
        '@media (max-width: 1218px)': {
            width: '90vw'
        }
    },
    subTitle: {
        width: 114,
        height: 24,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.2,
        textAlign: 'center',
        color: '#000000',
        marginTop: 33,
        marginBottom: 10
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    megaphone: {
        width: 60,
        height: 54,
        marginBottom: 21
    },
    bubbles: {
        width: 61.6,
        height: 56.9,
        marginBottom: 18.1
    },
    player: {
        width: 65.2,
        height: 65.2,
        marginBottom: 9.8
    },
    itemText: {
        width: 181,
        height: 13,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 1.17,
        textAlign: 'center',
        color: '#000000'
    },
    dareAStreamer: {
        '@media (max-width: 768px)': {
            width: 93,
            height: 29
        }
    },
    crowdfundYourDare: {
        '@media (max-width: 768px)': {
            width: 148,
            height: 13
        },
        '@media (max-width: 425px)': {
            width: 78,
            height: 29
        }
    },
    enjoyAwesomeContent: {
        '@media (max-width: 768px)': {
            width: 112,
            height: 29
        },
        '@media (max-width: 425px)': {
            width: 94,
            height: 44
        }
    },
};

export default styles;