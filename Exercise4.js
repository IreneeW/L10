import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
    {
        data: [
            {
                name: 'Country Sourdough',
                price: '$6.80',
                ingredients: 'Flour, water, sourdough starter, sea salt',
                image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400',
            },
            {
                name: 'Brioche Bun',
                price: '$3.20',
                ingredients: 'Flour, butter, eggs, milk, honey, yeast',
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
            },
        ],
        title: 'ARTISAN LOAVES',
        icon: 'bread-slice',
        bgcolor: '#f5deb3',
    },
    {
        data: [
            {
                name: 'Custard Tart',
                price: '$4.60',
                ingredients: 'Flour, butter, egg yolks, milk, sugar, vanilla',
                image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400',
            },
            {
                name: 'Apple Galette',
                price: '$5.20',
                ingredients: 'Apples, flour, butter, brown sugar, cinnamon',
                image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400',
            },
        ],
        title: 'PASTRIES & TARTS',
        icon: 'cookie-bite',
        bgcolor: '#f7c6c7',
    },
];
const renderItem = ({ item, section }) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                Alert.alert(item.ingredients);
            }}
        >
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.priceStyle}>{item.price}</Text>
            </View>
            <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <Button
                    title="ADD BAKERY ITEM"
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
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    priceStyle: {
        fontSize: 18,
        color: '#333',
        marginTop: 6,
        fontWeight: '600',
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