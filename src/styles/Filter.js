import {StyleSheet, Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mb20: {
    marginBottom: 20,
  },

  mr10: {
    marginRight: 10,
  },

  scrollContainer: {
    position: 'relative',
    paddingBottom: 70,
  },

  container: {
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingRight: 25,
    position: 'relative',
  },

  searchContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
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

  filterHeading: {
    marginBottom: 20,
  },

  filterHeadingText: {
    color: '#09051C',
    fontSize: 15,
    fontWeight: 'bold',
  },

  filterBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  filterChossen: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    color: '#DA6317',
    fontWeight: '700',
    marginRight: 10,
    marginBottom: 20,
  },

  filterBtnWrap: {
    width: widthScreen - 50,
    borderRadius: 15,
    marginBottom: 20,
  },

  filterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 57,
  },

  filterBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;