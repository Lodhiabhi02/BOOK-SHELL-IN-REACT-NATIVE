// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'

// export default function ProductCard() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Recommended for you</Text>

//       <View style={styles.card}>
//         {/* Product Image */}
//         <Image
//           source={{
//             uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
//           }}
//           style={styles.image}
//         />

//         {/* Product Info */}
//         <View style={styles.info}>
//           <Text style={styles.title}>Sony PlayStation 5 Pro</Text>
//           <Text style={styles.desc}>
//             Experience next-level gaming performance with the Sony PlayStation 5 Pro.
//           </Text>

//           <TouchableOpacity>
//             <Text style={styles.addText}>+ Add to your order</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Price */}
//         <View style={styles.priceBox}>
//           <Text style={styles.oldPrice}>$599.99</Text>
//           <Text style={styles.newPrice}>$499.99</Text>
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#f5f5f5',

//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 12,
//     alignItems: 'center',
//     elevation: 3, // Android shadow
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 8,
//   },
//   info: {
//     flex: 1,
//     marginHorizontal: 12,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   desc: {
//     fontSize: 12,
//     color: '#555',
//     marginVertical: 4,
//   },
//   addText: {
//     color: '#007AFF',
//     fontWeight: '600',
//     marginTop: 4,
//   },
//   priceBox: {
//     alignItems: 'flex-end',
//   },
//   oldPrice: {
//     textDecorationLine: 'line-through',
//     color: '#999',
//     fontSize: 12,
//   },
//   newPrice: {
//     color: '#E53935',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// })


// import { View, Text,Image } from 'react-native'
// import React from 'react'
// import { StyleSheet } from 'react-native'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

// export default function index() {
//   return (
//     <SafeAreaProvider>


//     <View style={styles.container}>
//       <Text style={styles.heading}>Recommended for you</Text>

//       <View style={styles.card}>
//         <Image  style={styles.image} source={{uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg'}} />

//         <View style={styles.info}>
//           <Text style={styles.text}>SRGI CS -th Sem A 2026</Text>

//           <Text style={styles.text2}>~ Ria: ok ignore me</Text>

//         </View>

//       </View>
//     </View>
//      </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//      padding: 16,
//      backgroundColor: 'black',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 10,
//     color: 'white',
//   },
//   container2: {
//      padding: 16,
//      backgroundColor: 'green',
//   },
//  card:{
//     flexDirection: 'row',
//     backgroundColor: 'gray',
//     borderRadius: 12,
//     padding: 12,
//     alignItems: 'center',
//     elevation: 3, // Android shadow
//  },
//  image:{
//     width: '70',
//     height: '70',
//     borderRadius: 50,
//  },
//  text:{
//     fontSize: 20,
//     fontWeight: 'bold',
//  },
//  info:{
//     flex: 1,
//     marginHorizontal: 12,
//  },
//  text2:{
//     fontSize: 15,
//     color: 'gary-light',
//     marginVertical: 4,
//  }
// })

// import { View, Text, StyleSheet, Image } from 'react-native'
// import React from 'react'

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.status}>

//         {/* Profile Image */}
//         <View style={styles.imageWrapper}>
//           <Image
//             source={{ uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' }}
//             style={styles.image}
//           />

//           {/* Plus Icon */}
//           <View style={styles.plus}>
//             <Text style={styles.plusText}>+</Text>
//           </View>
//         </View>

//         {/* Info */}
//         <View style={styles.info}>
//           <Text style={styles.name}>My status</Text>
//           <Text style={styles.subText}>Click to add status update</Text>
//         </View>

//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 16,
//   },

//   status: {
//     marginTop: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   imageWrapper: {
//     width: 60,
//     height: 60,
//   },

//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },

//   plus: {
//     position: 'absolute',
//     bottom: -2,
//     right: -2,
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     backgroundColor: '#25D366',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: '#000',
//   },

//   plusText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   info: {
//     marginLeft: 12,
//   },

//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },

//   subText: {
//     fontSize: 14,
//     color: '#aaa',
//     marginTop: 2,
//   },
// })

import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function index()
{
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome to the Home page</Text>

      <TouchableOpacity style={styles.button}>
        <Link href=" /(tabs)/task"  >task</Link>
        <Link href=" /(tabs)/shoping" >shoping</Link>

      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {

    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
})