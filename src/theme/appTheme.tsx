import {StyleSheet} from 'react-native'

export const colors = {
    primary: '#6b9997',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    }, 
    btnScreens: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    btnScreenText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    personBtn:{
        backgroundColor: '#059b9a',
        width: 150,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    personBtnText:{
        color: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical: 20,
        marginHorizontal: 30,
    },
    menuButton: {
        marginVertical: 10,
    },
    menuText:{
        fontSize:20,
    },
    drawerItem:{
        flexDirection: 'row',
    },
});