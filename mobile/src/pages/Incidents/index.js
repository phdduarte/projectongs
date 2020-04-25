import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList , Image, Text, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false) // criando estado para paginacao

    const navigation = useNavigation()

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident }) // tem que ser o mesmo nome da rota
    }

    async function loadIncidents() {
        if (loading) { // se ele ja tiver carregando ele nao precisar fazer novamente.
            return
        }

        if (total > 0 && incidents.length === total) { // se existir ao menos um caso 
            return // e ele for o numero total de casos nao precisa busca mais informacoes
        }

        setLoading(true)

        // const response = await api.get(`incidents?page=${page}`) 
        // uma forma de passar dentro da url mas se nao quiser sujar a url pode fazer: 
        const response = await api.get('incidents', {
            params: { page }
        }) 

        // setIncidents(response.data) assim ele troca os valores por novos
        setIncidents([ ... incidents, ... response.data]) // essa é a forma de anexar dois vetores dentro de um vetor
        // copia todos os valores dentro de 
        // incidents e dentro de response.data 
        setTotal(response.headers['x-total-count'])
        setPage(page + 1 )
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View> 

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} 
                // onEndReached é disparada de forma automatica qunado o usuario chega no final da lista
                onEndReachedThreshold={0.2}
                // onEndReachedThreshold ela fala quantos % o usuario precisa esta no final da lista para ela 
                // carregar novos itens
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {
                                Intl.NumberFormat(
                                    'pt-BR', 
                                        { 
                                            style: 'currency', 
                                            currency: 'BRL' 
                                        }
                                ).format(incident.value)
                            }
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}