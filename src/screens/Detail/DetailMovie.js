import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    ScrollView 
} from 'react-native'
import { useSelector } from 'react-redux'
import { DefaultPoster } from '../../assets'

const DetailMovie = () => {
    const url_path = 'https://image.tmdb.org/t/p/w500'

    const detailMovie = useSelector(state => state.DetailMovieReducer);

    return (
        <View style={styles.page}>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={detailMovie?.movieDetail?.poster_path ? {uri: `${url_path}`+detailMovie?.movieDetail?.poster_path } : DefaultPoster}
                        style={styles.imagePoster}
                    />
                </View>
                <View style={{ borderWidth: 1, marginTop: 20 }} />
                <View style={styles.wrapper}>
                    <View style={{ width: '35%' }}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.subTitle}>{detailMovie?.movieDetail?.original_title}</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={styles.title}>Rating</Text>
                        <Text style={styles.subTitle}>{detailMovie?.movieDetail?.vote_average}</Text>
                    </View>
                    <View style={{ width: '35%' }}>
                        <Text style={styles.title}>Release Date</Text>
                        <Text style={styles.subTitle}>{detailMovie?.movieDetail?.release_date}</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 1, marginTop: 12 }} />
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={styles.txtOverview}>Overview</Text>
                    <Text style={styles.txtDetail}>{detailMovie?.movieDetail?.overview}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailMovie

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#2B2B2B'
    },
    imagePoster: {
        width: '90%',
        borderRadius: 5,
        height: 350,
        resizeMode: 'contain',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    txtOverview: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    txtDetail: {
        textAlign: 'justify',
        color: 'white',
        letterSpacing: 0.5,
        marginTop: 10
    }
})