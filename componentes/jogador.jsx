import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

export default function Jogador(props) {
  const { nome = 'Desconhecido', imagem, numero = '?' } = props;

  return (
    <Card.Title
      style={styles.cardTitle}
      title={`${numero} - ${nome}`}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    margin: 10,
  },
});
