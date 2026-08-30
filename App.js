import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INVESTIR DO ZERO PREMIUM</Text>
      <Text style={styles.sub}>Seu guia completo!</Text>
      <Text style={styles.ok}>✅ APP INSTALADO COM SUCESSO!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0a0a0a',alignItems:'center',justifyContent:'center'},
  title:{color:'#FFD700',fontSize:22,fontWeight:'bold'},
  sub:{color:'#fff',marginTop:10},
  ok:{color:'#00ff00',marginTop:20,fontWeight:'bold'}
});
