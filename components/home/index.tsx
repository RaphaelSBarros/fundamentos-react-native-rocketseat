import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Participant from "../Participant";

export default function Home() {
  const participants = [
    "Ana",
    "Bruno",
    "Carla",
    "Diego",
    "Fernanda",
    "Gustavo",
    "Helena",
    "Igor",
    "Juliana",
    "Lucas",
    "Mariana",
    "Pedro",
    "Sofia",
    "Thiago",
    "Clara",
    "Rafael",
    "Isabela",
    "Felipe",
    "Laura",
    "André",
  ];

  function handleAddParticipant() {
    console.log("Você clicou no botão Adicionar");
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Você clicou em remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 1 de Novembro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do partiipante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
