import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INVESTIR DO ZERO PREMIUM</Text>
      <Text style={styles.sub}>Seu guia completo para começar a investir hoje!</Text>
      <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL('https://go.hotmart.com')}>
        <Text style={styles.btnText}>ACESSAR CONTEÚDO PREMIUM</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#0a0a0a',alignItems:'center',justifyContent:'center',padding:20},
  title:{color:'#FFD700',fontSize:28,fontWeight:'bold',textAlign:'center',marginBottom:10},
  sub:{color:'#fff',fontSize:16,textAlign:'center',marginBottom:30},
  btn:{backgroundColor:'#FFD700',padding:15,borderRadius:10,width:'100%',alignItems:'center'},
  btnText:{color:'#000',fontWeight:'bold',fontSize:16}
});
