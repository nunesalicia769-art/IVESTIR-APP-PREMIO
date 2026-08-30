import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Alert, Linking } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('100');
  const [tempo, setTempo] = useState('12');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const v = parseFloat(valor) || 0;
    const t = parseFloat(tempo) || 0;
    const taxa = 0.01; // 1% ao mês
    const total = v * (Math.pow(1+taxa, t) - 1) / taxa;
    const investido = v * t;
    const lucro = total - investido;
    setResultado({ total: total.toFixed(2), lucro: lucro.toFixed(2), investido: (v*t).toFixed(2) });
  };

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.logo}>💰 INVESTIR DO ZERO PREMIUM</Text>
        <Text style={s.sub}>O método que transforma R$100 em patrimônio</Text>
        
        <View style={s.card}>
          <Text style={s.cardTitle}>🧮 Calculadora de Juros Compostos</Text>
          <Text style={s.label}>Quanto por mês? (R$)</Text>
          <TextInput style={s.input} value={valor} onChangeText={setValor} keyboardType="numeric" />
          <Text style={s.label}>Por quantos meses?</Text>
          <TextInput style={s.input} value={tempo} onChangeText={setTempo} keyboardType="numeric" />
          <TouchableOpacity style={s.btn} onPress={calcular}><Text style={s.btnText}>CALCULAR MEU FUTURO</Text></TouchableOpacity>
          {resultado && (
            <View style={s.result}>
              <Text style={s.resultText}>💵 Total investido: R$ {resultado.investido}</Text>
              <Text style={s.resultText}>📈 Valor final: R$ {resultado.total}</Text>
              <Text style={[s.resultText, {color:'#4ade80', fontWeight:'bold', fontSize:18}]}>✅ Lucro: R$ {resultado.lucro}</Text>
            </View>
          )}
        </View>

        <View style={s.card}>
          <Text style={s.cardTitle}>📚 Módulos Premium</Text>
          <Text style={s.item}>✅ Módulo 1: Mentalidade Milionária</Text>
          <Text style={s.item}>✅ Módulo 2: Onde Investir com Pouco</Text>
          <Text style={s.item}>✅ Módulo 3: Ações que Pagam Dividendos</Text>
          <Text style={s.item}>✅ Módulo 4: Fundo Imobiliário</Text>
          <Text style={s.item}>✅ Módulo 5: Plano dos 7 Anos</Text>
        </View>

        <TouchableOpacity style={[s.btn, {backgroundColor:'#22c55e'}]} onPress={()=>Alert.alert('Acesso Liberado!','Você já tem acesso Premium!')}>
          <Text style={s.btnText}>🔓 JÁ SOU PREMIUM</Text>
        </TouchableOpacity>

        <Text style={s.footer}>Build funcionando! 🚀 03:50 AM - Você venceu!</Text>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container:{flex:1, backgroundColor:'#0f172a'},
  scroll:{padding:20, paddingTop:60},
  logo:{color:'#fff', fontSize:22, fontWeight:'bold', textAlign:'center'},
  sub:{color:'#94a3b8', textAlign:'center', marginTop:8, marginBottom:24},
  card:{backgroundColor:'#1e293b', borderRadius:16, padding:16, marginBottom:16},
  cardTitle:{color:'#fff', fontWeight:'bold', fontSize:16, marginBottom:12},
  label:{color:'#cbd5e1', marginTop:8},
  input:{backgroundColor:'#0f172a', color:'#fff', borderRadius:8, padding:12, marginTop:4, borderWidth:1, borderColor:'#334155'},
  btn:{backgroundColor:'#3b82f6', borderRadius:12, padding:16, alignItems:'center', marginTop:16},
  btnText:{color:'#fff', fontWeight:'bold'},
  result:{marginTop:16, backgroundColor:'#0f172a', padding:12, borderRadius:8},
  resultText:{color:'#e2e8f0', marginTop:4},
  item:{color:'#cbd5e1', marginTop:6},
  footer:{color:'#4ade80', textAlign:'center', marginTop:20}
});
