import React from 'react'
import { Box, Heading, AspectRatio, Image, Text, Center, Row, Stack, NativeBaseProvider, FlatList } from 'native-base'
import { ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function CardView(props: any) {
	var imagesData = [
		{
			source: require('../assets/images/unknown.png'),
		},
		{
			source: require('../assets/images/unknown2.png'),
		},
		{
			source: require('../assets/images/unknown3.png'),
		},
		{
			source: require('../assets/images/unknown4.png'),
		},
		{
			source: require('../assets/images/unknown5.png'),
		},
		{
			source: require('../assets/images/unknown6.png'),
		},
	]

	var renderImageData = ({ item }) => (
		<Box
			style={{
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.6,
				shadowRadius: 4,
			}}>
			<Image source={item.source} rounded='md' alt='image' mx={1} style={[styles.imageThumbnail]} flexGrow={1} />
		</Box>
	)

	return (
		<Box style={styles.card}>
			<Box width='100%' rounded='lg' overflow='hidden'>
				<Box backgroundColor='black'>
					<ImageBackground
						source={require('../assets/images/unknown.png')}
						alt='image'
						blurRadius={5}
						opacity={0.5}
						backgroundColor='black'>
						<Stack my='1' mx='2' space={3}>
							<Row space={2} justifyContent='space-between'>
								<Heading size='lg' style={[styles.text, styles.title, { fontSize: 25 }]}>
									Shivery Abyss
								</Heading>
								<Text fontSize='xs' style={styles.text}>
									47°4' 48.4298"N{'\n'}
									17°59' 0.3034"E
								</Text>
							</Row>
							<Center>
								<Row width={'100%'} justifyContent='center'>
									<Center>
										<Text style={[styles.text, { fontSize: 18 }]}>Captured at 2022-01-07 by</Text>
										<Text fontSize='sm' style={[styles.text]} mb='2'>
											PSI497 and Ketavin_SBE
										</Text>
									</Center>
									<FontAwesome
										name={'edit'}
										style={[
											styles.text,
											{ fontSize: 30, textAlign: 'right', alignSelf: 'center', right: 2, position: 'absolute' },
										]}
									/>
								</Row>
								<Row width={'100%'} mb={3}>
									<FlatList
										data={imagesData}
										renderItem={renderImageData}
										keyExtractor={(item) => item.source}
										horizontal={true}
										width={'100%'}
										contentContainerStyle={{ marginBottom: 10 }}
										indicatorStyle='white'
									/>
								</Row>
								<Text style={[styles.text, { fontSize: 18 }]}>Deployed at 2021-11-14 by</Text>
								<Text fontSize='sm' style={[styles.text]} mb='2'>
									Explrrr, Adventur34 and TimmyTommy123
								</Text>
								<Row rounded='md' mb={3} width={'100%'} justifyContent='space-evenly'>
									<FlatList
										data={imagesData}
										renderItem={renderImageData}
										keyExtractor={(item) => item.source}
										horizontal={true}
										width={'100%'}
										contentContainerStyle={{ marginBottom: 10 }}
										indicatorStyle='white'
									/>
								</Row>
							</Center>
						</Stack>
					</ImageBackground>
				</Box>
				{/* <Center
						bg='violet.500'
						_dark={{
							bg: 'violet.400',
						}}
						_text={{
							color: 'warmGray.50',
							fontWeight: '700',
							fontSize: 'xs',
						}}
						position='absolute'
						bottom='0'
						px='3'
						py='1.5'>
						PHOTOS
					</Center> */}
			</Box>
		</Box>
	)
}

const font = 'ice'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		fontFamily: font,
	},
	title: {
		fontWeight: 'bold',
	},
	text: {
		color: '#DEDEDE',
		fontFamily: font,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
	},
	card: {
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.6,
		shadowRadius: 3,
		alignItems: 'center',
		width: '100%',
	},
	imageThumbnail: {
		resizeMode: 'cover',
		width: 100,
		height: 100,
	},
})
