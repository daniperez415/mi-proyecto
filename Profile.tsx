import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const nombre: string = "Fernanda Daniela Perez Garcia";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 8.8;
const titulado: boolean = false;

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.fMgicNRIcJUB_1gqy-LoMgHaE8?r=0&w=1024&h=683&rs=1&pid=ImgDetMain&o=7&rm=3' }} style={styles.avatar} />

            <Text style={styles.titulo}>{nombre}</Text>
            <Text style={styles.subtitulo}>{carrera}</Text>
            <Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
            <Text style={styles.dato}>Promedio: {promedio}</Text>
            <Text style={styles.dato}>Titulado: {String(titulado)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
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
        marginBottom: 4,
    },
    subtitulo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 16,
    },
    dato: {
        fontSize: 16,
        marginBottom: 6,
    },
});
