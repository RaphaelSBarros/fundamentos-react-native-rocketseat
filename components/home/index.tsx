import {
  Alert,
  FlatList,
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
    if (participants.includes("Ana")) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    console.log("Você clicou no botão Adicionar");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover",
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          style: "destructive",
          onPress: () => Alert.alert("Deletado!"),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );

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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
