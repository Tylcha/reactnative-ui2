/* eslint-disable prettier/prettier */
import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './card.style';

const Card = ({ text, title }) => {
    return (
        <SafeAreaView>
            <View style={styles.card_container}>
                <View style={styles.card_body}>
                    <Text style={styles.card_title}>{text}</Text>
                    <Text style={styles.card_content_text}>
                        {title}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.card_button_container}
                    onPress={() => Alert.alert('Merhaba ' + text)}
                >
                    <Text style={styles.card_button_text}>I LIKED</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Card;
