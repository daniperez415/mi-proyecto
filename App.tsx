import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Profile';
import HobbiesScreen from './Hobbies';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenida</Text>
            <Text style={styles.subtitulo}>Selecciona una opción</Text>

            <View style={styles.buttonWrapper}>
                <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} />
            </View>

            <View style={styles.buttonWrapper}>
                <Button title="Ver Hobbies" onPress={() => navigation.navigate('Hobbies')} />
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
                <Stack.Screen name="Perfil" component={ProfileScreen} />
                <Stack.Screen name="Hobbies" component={HobbiesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 16,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
    },
    buttonWrapper: {
        width: 220,
        marginBottom: 12,
    },
});
