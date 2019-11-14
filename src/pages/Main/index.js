import React, {useEffect, useReducer} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from '~/assets/logotipo-santander.png';

const INITIAL_STATE = {
  isLoaded: false,
  isLoading: true,
  imageSize: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_IS_LOADED':
      return {
        ...state,
        isLoaded: !state.isLoaded,
      };
    case 'UPDATE_IS_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'UPDATE_IMAGE_SIZE':
      return {
        ...state,
        imageSize: action.value,
      };
    default:
      return state;
  }
}

export default function Main() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {isLoaded, isLoading, imageSize} = state;

  useEffect(() => {
    dispatch({type: 'UPDATE_IS_LOADING'});
  }, []);

  useEffect(() => {
    dispatch({type: 'UPDATE_IS_LOADING'});
    alert('Hello.');
  }, [state.isLoading]);

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        alt="Logotipo do Banco Santander em cor branca, contrastando com fundo em vermelho na tela de carregamento da aplicação."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC0001',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
