import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleAddParticipant() {
    console.log("Você clicou no botão Adicionar");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 1 de Novembro de 2024.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do partiipante"
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
