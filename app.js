import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investir do Zero Premium</Text>
      <Text style={styles.sub}>Seu guia completo para começar a investir</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> Linking.openURL('https://pay.kiwify.com.br/LfjZTzD')}>
        <Text style={styles.btnText}>QUERO ACESSAR AGORA</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0a0a0a',alignItems:'center',justifyContent:'center',padding:20},
  title:{color:'#FFD700',fontSize:28,fontWeight:'bold',textAlign:'center',marginBottom:10},
  sub:{color:'#fff',fontSize:16,textAlign:'center',marginBottom:30},
  btn:{backgroundColor:'#FFD700',padding:18,borderRadius:10,width:'100%'},
  btnText:{color:'#000',fontWeight:'bold',textAlign:'center',fontSize:16}
});
