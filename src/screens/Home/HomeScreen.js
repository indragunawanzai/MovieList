import React, { useCallback } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { getDataListMovie } from '../../redux/action/movie/MovieAction';
import { getDataDetailMovie } from '../../redux/action/movie/DetailMovieAction';
import { useFocusEffect } from '@react-navigation/native';
import { DefaultPoster } from '../../assets';

const HomeScreen = ({ navigation }) => {
    const url_path = 'https://image.tmdb.org/t/p/w500'

    const dispatch = useDispatch()

    const movie = useSelector(state => state.MovieReducer);
    const detailMovie = useSelector(state => state.DetailMovieReducer);

    useFocusEffect(
        useCallback(() => {
            dispatch(getDataListMovie())
        }, [])
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                dispatch(getDataDetailMovie(item?.id))
                if (detailMovie.errors === false) {
                    navigation.navigate('DetailMovie', {})
                } else {
                    console.log(detailMovie?.movieDetail)
                }
            }}
        >
            <View style={styles.container}>
                <Image
                    source={item?.poster_path ? {uri: `${url_path}`+item?.poster_path } : DefaultPoster}
                    style={styles.imagePoster}
                />
                <View style={styles.wrapper}>
                    <View style={{ marginRight: 20 }}>
                        <Text
                            style={styles.txtTitle}
                            numberOfLines={2}
                        >{item?.name}</Text>
                    </View>

                    <View style={{ width: '65%' }}>
                        <Text style={styles.txtlistType}>{item?.list_type}</Text>
                        <Text
                            style={styles.txtDesc}
                            numberOfLines={2}
                        >{item?.description ? item?.description : 'Description'}</Text>
                    </View>

                    <View style={styles.viewDetail}>
                        <LinearGradient
                            colors={['yellow', 'red']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            locations={[0, 1]}
                            style={styles.gradient}
                        >
                            <Text style={styles.txtDetail}>Detail</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.pages}>
            <View style={{marginTop: 15}}>
                <Text style={styles.txtHeader}>Movie List</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                horizontal={false}
                data={movie?.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#191919'
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    container: {
        width: '100%',
        height: 125,
        backgroundColor: '#2B2B2B',
        borderRadius: 8,
        marginTop: 50,
        flexDirection: 'row',
    },
    wrapper: {
        paddingVertical: 10,
        flex: 1,
        justifyContent: 'space-between'
    },
    imagePoster: {
        height: 110,
        width: 110,
        marginTop: -20,
        resizeMode: 'contain',
        borderRadius: 8
    },
    txtTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    txtlistType: {
        color: '#E4D8DC',
        fontSize: 15,
        fontWeight: 'bold'
    },
    txtDesc: {
        color: '#C9CCD5',
        fontSize: 12
    },
    viewDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20
    },
    gradient: {
        paddingVertical: 3,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    txtDetail: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
})