import { View, Text, StyleSheet } from 'react-native';

export default function HobbiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis Hobbies</Text>
      <Text style={styles.item}> Pintura </Text>
      <Text style={styles.item}> Dibujo</Text>
      <Text style={styles.item}> Escuchar musica</Text>
      <Text style={styles.item}> Cocinar postres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginBottom: 8,
  },
});
