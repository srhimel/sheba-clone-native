import React from 'react'
import { StyleSheet, View, Image, ScrollView, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchService } from '../redux/serviceSlice'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import sliderImages from "../data/sliderImages"
import Theme from '../theme'
import Text from '../components/text/Text'
import Slider from '../components/slider/Slider'



export default function HomeScreen() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchService())
  }, [])
  const { loading, data, error } = useSelector(state => state.service)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  return (
    <SafeAreaView>
      {/* fixed Header */}
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="mapbox" size={24} color={Theme.colors.primary} style={{ marginRight: 8 }} />
          <View>
            <Text preset='h3' style={{
              color: Theme.colors.primary,
              marginBottom: -5
            }}>Uttara</Text>
            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <Text>Uttara, Dhaka, Bangladesh </Text>
              <MaterialCommunityIcons name="menu-down" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputWrapper}>
          <AntDesign name="search1" size={16} color="#999" style={{ marginRight: 10 }} />
          <TextInput placeholder='Search Services' style={{
            width: '100%'
          }} />
        </View>
        <View style={styles.sliderSection}>
          <Slider images={sliderImages} />
        </View>
        <View style={styles.serviceSection}>
          {
            data?.services?.length && data?.services.map(item => {
              return (
                <View style={styles.serviceColumnWrapper} key={item.id}>
                  <View style={styles.serviceContainer}>
                    <Image source={{ uri: item.image }} style={styles.serviceItemImage} />
                    <Text preset='strong' style={styles.serviceItemText}>
                      {item?.title}
                    </Text>
                  </View>
                </View>
              )
            })
          }
          <View style={styles.more}>
            <Pressable>
              <View style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
                <Text style={{ color: Theme.colors.primary, fontFamily: Theme.typography.primaryBold }}>More Categories </Text>
                <MaterialCommunityIcons name="menu-down" size={24} color={Theme.colors.primary} />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.sliderSection}>
          <Image source={{
            uri: 'https://www.sheba.xyz/blog/bn/wp-content/uploads/2021/04/Virus-disinfection.jpg'
          }}
            style={styles.footerImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerSection: {
    paddingHorizontal: Theme.spacing[5],
    paddingVertical: Theme.spacing[4],
    borderBottomColor: Theme.colors.border,
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceSection: {
    marginTop: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.border,
    marginHorizontal: Theme.spacing[5],
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[3],
    borderRadius: Theme.spacing[3],
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceColumnWrapper: {
    paddingVertical: Theme.spacing[4],
    width: '25%'
  },
  serviceContainer: {
    alignItems: 'center',
    marginHorizontal: Theme.spacing[3],
  },
  serviceItemImage: {
    width: 30,
    height: 30,
    marginBottom: Theme.spacing[2],
  },
  serviceItemText: {
    textAlign: 'center',
    fontSize: 10
  },
  inputWrapper: {
    marginHorizontal: Theme.spacing[5],
    marginVertical: Theme.spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[2],
    borderRadius: Theme.spacing[3],
  },
  sliderSection: {
    marginHorizontal: Theme.spacing[5],
  },
  more: {
    marginTop: Theme.spacing[4],
    alignItems: 'center',
    width: '100%',
    borderTopColor: Theme.colors.border,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: Theme.spacing[2],
  },
  footerImage: {
    height: 220,
    resizeMode: 'contain',
    marginBottom: Theme.spacing[5],
  }

})