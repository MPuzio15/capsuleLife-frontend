import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingVertical: 7,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'salmon',
    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
        letterSpacing: 2,
    },
    iconContainer: {
        padding: 10,
    },
    icon: {
        tintColor: 'white',
        width: 28,
        height: 28,
    },
});

export default styles;
