import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types'
import { Box, Heading, AspectRatio, Image, Text, Center, Row, Stack, NativeBaseProvider } from 'native-base'
import CardView from '../components/CardView'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	return (
		// <View style={styles.container}>
		// 	<View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
		// 	{/* <View
		// 		style={{
		// 			flex: 0.7,
		// 			width: '90%',
		// 			borderRadius: 30,
		// 			borderWidth: 2,
		// 			borderColor: 'black',
		// 			backgroundColor: 'grey',
		// 		}}>
		// 		<Text>Fuuuuuuuuuuuuu</Text>
		// 	</View> */}

		// </View>
		<NativeBaseProvider>
			<Center flex={1} px='3' backgroundColor='#333333'>
				<CardView />
			</Center>
		</NativeBaseProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
