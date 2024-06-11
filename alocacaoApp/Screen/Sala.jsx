// Importa bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.37.10:3000/"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function SalaScreen() {

    const [salas, setSala] = useState([]); // Estado para a lista de produtos
    const [error, setError] = useState(null); // Estado para erros

    // Função para buscar todos os produtos na API
    const fetchAllSala = async () => {
        try {
            const response = await fetch(`${API_URL}/salas`); // Faz a requisição GET para a API
            if (!response.ok) {
                const errorResponse = await response.text(); // Lê a resposta de erro
                throw new Error(errorResponse); // Lança um erro com a resposta
            }
            const data = await response.json(); // Converte a resposta para JSON
            setSala(data); // Atualiza o estado com a lista de professores
            setError(null); // Reseta o estado de erro
        } catch (error) {
            console.error("Erro ao buscar todos as alocações:", error); // Loga o erro no console
            setError("Não foi possível buscar as alocações."); // Define a mensagem de erro
        }
    };

    return (
        <View style={styles.container}>
            {/* Botão para buscar todos os professores */}
            <Button title="Consultar" onPress={fetchAllSala} color={'#CC0000'} />
            {/* Exibe a lista de professores, se existir */}
            {alocacoes.length > 0 && (
                <FlatList
                    data={salas} // Dados da lista de professores
                    keyExtractor={(item) => item.id.toString()} // Função para extrair a chave de cada item
                    renderItem={({ item }) => (
                        <View style={styles.Sala}>
              
                            <Text>Nome sala: {item.nomesala}</Text>
                            <Text>Bloco: {item.bloco}</Text>
                          
                        </View>
                    )}
                />
            )}
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
    alocacoes: {
        padding: 10, // Espaçamento interno
        marginTop: 20, // Margem superior
        borderBottomColor: "#ccc", // Cor da borda inferior
        borderBottomWidth: 1, // Largura da borda inferior
    },
    error: {
        color: 'red', // Cor do texto do erro
        marginTop: 20, // Margem superior
    },
    button: {

    }
});