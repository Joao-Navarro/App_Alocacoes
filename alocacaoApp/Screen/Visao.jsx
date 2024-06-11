// Importa bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.37.10:3000/"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function DetalhesScreen() {

    const [id, setId] = useState('');
    const [detalhe, setDetalhe] = useState(null);
    const [error, setError] = useState(null); // Estado para erros

    // Função para buscar um produto específico na API
    const PesquisaDetalhe = async () => {
        try {
            const response = await fetch(`${API_URL}/visaoAlocacao/${id}`); // Faz a requisição GET para a API com o ID do produto
            if (!response.ok) {
                const errorResponse = await response.text(); // Lê a resposta de erro
                throw new Error(errorResponse); // Lança um erro com a resposta
            }
            const data = await response.json(); // Converte a resposta para JSON
            setDetalhe(data); // Atualiza o estado com o produto buscado
            setError(null); // Reseta o estado de erro
        } catch (error) {
            console.error("Erro ao buscar detalhe:", error); // Loga o erro no console
            setError("Detalhe não encontrado"); // Define a mensagem de erro
            setProduct(null); // Reseta o estado do produto
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o ID do detalhe"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            {/* Botão para buscar um produto específico */}
            <Button title="Pesquisar" onPress={PesquisaDetalhe}
                color={'#CC0000'} />
            {/* Exibe a lista de professores, se existir */}
            {detalhe && (
                <View style={styles.detalhes}>
                    <Text>Nome Prosfessor: {detalhe.professor}</Text>
                    <Text>Nome Sala: {detalhe.sala}</Text>
                    <Text>Bloco: {detalhe.bloco}</Text>
                    <Text>Dia da semana: {detalhe.dia}</Text>
                    <Text>Período: {detalhe.período}</Text>
                </View>
            )}
            {console.log(detalhe)}
            {/* Exibe a mensagem de erro, se existir */}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        padding: 20, // Espaçamento interno
        backgroundColor: "#fff", // Cor de fundo branca
    },
    detalhes: {
        padding: 10, // Espaçamento interno
        marginTop: 20, // Margem superior
        borderBottomColor: "#ccc", // Cor da borda inferior
        borderBottomWidth: 1, // Largura da borda inferior
    },
    error: {
        color: 'red', // Cor do texto do erro
        marginTop: 20, // Margem superior
    },
    input: {
        height: 40, // Altura do input
        borderColor: "#ccc", // Cor da borda
        borderWidth: 1, // Largura da borda
        marginBottom: 10, // Margem inferior
        padding: 10, // Espaçamento interno
    },
});