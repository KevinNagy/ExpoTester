import React, { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, Box } from 'native-base'

import { useFonts, Iceland_400Regular } from '@expo-google-fonts/iceland'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	let [fontsLoaded] = useFonts({
		ice: Iceland_400Regular,
	})

	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync()
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 1000))
			} catch (e) {
				console.warn(e)
			} finally {
				// Telln the application to render
				setAppIsReady(true)
				if (!fontsLoaded) {
					return null
				}
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<NativeBaseProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</NativeBaseProvider>
		)
	}
}
