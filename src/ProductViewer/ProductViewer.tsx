import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IProduct} from '../interfaces/IProducts'
interface IProductViewerProps {
    product:IProduct
}

const ProductViewer = ({product}: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={styles.title}>Titre : {product?.titre}</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
          {(product?.stock ?? 0) > 0 ? 
            <Text style={styles.stock}>Stock : {product?.stock}</Text>
            : <Text style={styles.indisponible}>Indisponible</Text>
}
          <Text style={styles.description}>Description : {product?.description}</Text>
          <Text style={styles.prix}>Prix : {product?.prix}</Text>
        </View>
        <View style={styles.colRight}>
          <Image style={styles.image} source={{uri:product?.imageUrl}} />
          <Button title="Edition" />
        </View>
      </View>
    </View>
  )
}

export default ProductViewer

const styles = StyleSheet.create({
  ProductViewer: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 7,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  colsFlex: {
    flexDirection: 'row',
    gap: 20,
  },
  colLeft: {
  },
  colRight: {
      justifyContent: 'center',
      gap: 10,
  },
  stock: {
      fontWeight: 'bold',
      fontSize: 16,
  },
  description: {
      fontSize: 14,
  },
  prix: {
      fontWeight: 'bold',
      fontSize: 18,
  },
  image: {
      width: 200,
      height: 200,
  },
  indisponible: {
      fontWeight: 'bold',
      fontSize: 16,
      fontStyle: 'italic',
      color: 'red',
  },
  bold: {
      fontWeight: 'bold',
  }
})