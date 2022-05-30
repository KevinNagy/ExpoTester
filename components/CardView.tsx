import React from 'react'
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from 'native-base'
import { ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'

export default function CardView(props: any) {
	return (
		<Box style={styles.card}>
			<Box width='100%' rounded='lg' overflow='hidden'>
				<Box>
					<Box backgroundColor='black'>
						<ImageBackground
							source={require('../assets/images/unknown.png')}
							alt='image'
							blurRadius={5}
							opacity={0.5}
							backgroundColor='black'>
							<Stack my='4' mx='2' space={3}>
								<HStack space={2} justifyContent='space-between'>
									<Heading size='xs' mt='-1' style={[styles.title, { fontSize: 25 }]}>
										Shivery Abyss
									</Heading>
									<Text fontSize='xs' style={styles.text} ml='-0.5' mt='-3'>
										47°4' 48.4298"N{'\n'}
										17°59' 0.3034"E
									</Text>
								</HStack>
								<Center>
									<Text style={[styles.text, { fontSize: 18 }]}>Captured at 2022-01-07 by</Text>
									<Text fontSize='xs' style={[styles.text, { fontSize: 14 }]} mb='2'>
										PSI497 and Ketavin_SBE
									</Text>
									<HStack rounded='md' width={'100%'} justifyContent='space-evenly' mb={3}>
										<Image
											source={require('../assets/images/unknown.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
										<Image
											source={require('../assets/images/unknown2.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
										<Image
											source={require('../assets/images/unknown3.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
									</HStack>
									<Text style={[styles.text, { fontSize: 18 }]}>Deployed at 2021-11-14 by</Text>
									<Text fontSize='xs' style={[styles.text, { fontSize: 14 }]} mb='2'>
										Explrrr, Adventur34 and TimmyTommy123
									</Text>
									<HStack rounded='md' width={'100%'} justifyContent='space-evenly'>
										<Image
											source={require('../assets/images/unknown4.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
										<Image
											source={require('../assets/images/unknown5.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
										<Image
											source={require('../assets/images/unknown6.png')}
											rounded='md'
											alt='image'
											style={[styles.imageThumbnail]}
											flex={0.31}></Image>
									</HStack>
								</Center>
								<HStack alignItems='center' space={4} justifyContent='space-between'>
									<HStack alignItems='center'>
										{/* <Text
											color='coolGray.600'
											_dark={{
												color: 'warmGray.200',
											}}
											fontWeight='400'>
											6 mins ago
										</Text> */}
									</HStack>
								</HStack>
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
		fontSize: 20,
		fontWeight: 'bold',
		color: '#DEDEDE',
		fontFamily: font,
	},
	text: {
		color: '#DEDEDE',
		fontFamily: font,
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.6,
		shadowRadius: 3,
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
		width: 75,
		height: 75,
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.6,
		shadowRadius: 3,
	},
})
