import { StyleSheet, Text, View, ScrollView, Image, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import Theme from '../../theme'

const width = Dimensions.get('window').width

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const SliderView = useRef()
  // auto scroll to next image
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        SliderView.current.scrollTo({
          x: (width - (Theme.spacing[5] * 2)) * (currentIndex + 1),
          y: 0,
          animated: true,
        })
      } else {
        SliderView.current.scrollTo({
          x: 0,
          y: 0,
          animated: false,
        })
      }
    }, 3000)
    return () => clearInterval(interval)
  }
    , [currentIndex])

  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={SliderView}
        style={styles.scrollView}
        onScroll={(event) => setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width))}
      >
        {
          images.map((image, index) => {
            return (
              <Image key={image.id} source={image.image} style={styles.image} />
            )
          })
        }
      </ScrollView>
      <Animated.View style={styles.dotNavigation}>
        {
          images.map((_i, i) => {
            return (
              <Animated.View key={i} style={[styles.dot, i === currentIndex && styles.active]} />
            )
          })
        }
      </Animated.View>
    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    width: (width - (Theme.spacing[5] * 2)),
    height: (width / 2.5),
    resizeMode: 'cover',
  },
  dotNavigation: {
    marginTop: Theme.spacing[4],
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  active: {
    backgroundColor: Theme.colors.primary,
  }
})