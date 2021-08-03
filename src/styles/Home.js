import {StyleSheet, Dimensions} from 'react-native';
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mb20: {
    marginBottom: 20,
  },

  mr10: {
    marginRight: 10,
  },

  scrollContainer: {},

  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
    paddingLeft: 25,
    paddingRight: 25,
  },

  searchContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  searchInputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 15,
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    paddingVertical: 18,
    paddingHorizontal: 13,
    height: 50,
    marginRight: 9,
  },

  searchIcon: {
    marginRight: 19,
  },

  searchPlaceholder: {
    lineHeight: 50,
    height: 50,
    color: '#DA6317',
    opacity: 0.4,
  },

  filterBtn: {
    width: 49,
    height: 50,
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },

  listHeaderText: {
    color: '#09051C',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
  },

  listHeaderTextMore: {
    color: 'rgba(255, 124, 50, 1)',
    fontSize: 12,
    lineHeight: 16,
  },

  listData: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  listItem: {
    width: (widthScreen - 70) / 2,
    borderRadius: 22,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    padding: 25,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginRight: 20,
  },

  listItemHorizontal: {
    flexDirection: 'row',
    width: widthScreen - 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 11,
    justifyContent: 'flex-start',
  },

  listItemMeta: {
    alignItems: 'center',
  },

  listItemMetaHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  listImgHorizontal: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 21,
  },

  listItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    marginBottom: 4,
    color: '#000000',
  },

  listItemTitleHorizontal: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 4,
    color: '#09051C',
  },

  listItemTime: {
    fontSize: 13,
    lineHeight: 17,
    color: '#000000',
    opacity: 0.5,
  },

  listItemDescWrap: {
    flexDirection: 'column',
  },

  listItemPrice: {
    fontSize: 22,
    color: '#FEAD1D',
    lineHeight: 29,
    fontWeight: '700',
  },

  listItemDesc: {
    fontSize: 14,
    lineHeight: 14,
    color: '#3B3B3B',
    opacity: 0.3,
  },

  containerBackground: {
    width: widthScreen,
    height: 154,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
