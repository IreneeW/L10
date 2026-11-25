import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
    {
        data: [
            { name: 'Pikachu', card: '25' },
            { name: 'Voltorb', card: '100' },
        ],
        title: 'ELECTRIC',
        icon: 'bolt',
        bgcolor: '#f7f716',
    },
    {
        data: [
            { name: 'Squirtle', card: '7' },
            { name: 'Psyduck', card: '54' },
        ],
        title: 'WATER',
        icon: 'droplet',
        bgcolor: '#8ad4eb',
    },
];

const renderItem = ({ item, section }) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                Alert.alert(section.title + ' ' + item.name + ' selected!');
            }}
        >
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image
                source={{ uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png' }}
                style={styles.cardImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <Button
                    title="ADD POKEMON"
                    color="#2596be"
                    onPress={() => {
                        Alert.alert('Add button pressed!');
                    }}
                />
            </View>

            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { title, icon, bgcolor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
                        <FontAwesome6 name={icon} size={18} color="#000" />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 36,
        paddingHorizontal: 10,
    },
    buttonWrapper: {
        marginBottom: 12,
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: '#333',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    textStyle: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardImage: {
        width: 185,
        height: 260,
        borderRadius: 12,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#222',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});