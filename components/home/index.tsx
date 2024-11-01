import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import Participant from "../Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<String[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant(name: string) {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    setParticipants([...participants, name]);
    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover",
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipants(
              participants.filter((participant) => participant !== name)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
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
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddParticipant(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
