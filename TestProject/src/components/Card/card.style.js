/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card_container: {
        borderWidth: 1,
        margin: 10,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    card_body: {
        padding: 10,
    },
    card_title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    card_content_text: {
        fontSize: 15,
    },
    card_button_container: {
        backgroundColor: '#00C2FF',
        borderColor: 'gray',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
        alignItems: 'center',
    },
    card_button_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
