import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Jogador from './jogador';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em: ${anoFundacao}`} />
      <Card.Content>
        <Text>Mascote: {mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} imagem={item.imagem} />
          )}
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});
