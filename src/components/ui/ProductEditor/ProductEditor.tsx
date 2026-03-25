import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductEditor.styles";

type Props = {
  product: IProduct;
  onProductSaved: (product: IProduct) => void | Promise<void>;
  onCancel?: () => void;
  isSaving?: boolean;
};

type ProductFormState = {
  titre: string;
  description: string;
  stock: string;
  prix: string;
  imageUrl: string;
  thumbnailUrl: string;
  barCode: string;
};

const toFormState = (product: IProduct): ProductFormState => ({
  titre: product.titre,
  description: product.description,
  stock: product.stock?.toString() ?? "",
  prix: product.prix.toString(),
  imageUrl: product.imageUrl,
  thumbnailUrl: product.thumbnailUrl,
  barCode: product.barCode ?? "",
});

const parseNumber = (value: string) => {
  const normalizedValue = value.trim().replace(",", ".");

  if (normalizedValue.length === 0) {
    return null;
  }

  const nextValue = Number(normalizedValue);

  return Number.isNaN(nextValue) ? null : nextValue;
};

const ProductEditor = ({
  product,
  onProductSaved,
  onCancel,
  isSaving = false,
}: Props) => {
  const [formState, setFormState] = useState<ProductFormState>(
    toFormState(product),
  );

  useEffect(() => {
    setFormState(toFormState(product));
  }, [product]);

  const parsedPrice = parseNumber(formState.prix);
  const parsedStock = parseNumber(formState.stock);
  const hasInvalidPrice = parsedPrice === null || parsedPrice < 0;
  const hasInvalidStock =
    parsedStock === null || parsedStock < 0 || !Number.isInteger(parsedStock);
  const isSaveDisabled = formState.titre.trim().length === 0 || hasInvalidPrice || hasInvalidStock;

  const updateField =
    (field: keyof ProductFormState) =>
    (value: string) => {
      setFormState((currentValue) => ({
        ...currentValue,
        [field]: value,
      }));
    };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
      return;
    }

    setFormState(toFormState(product));
  };

  const handleSave = () => {
    if (isSaveDisabled || parsedPrice === null || parsedStock === null) {
      return;
    }

    onProductSaved({
      ...product,
      titre: formState.titre.trim(),
      description: formState.description.trim(),
      stock: parsedStock,
      prix: parsedPrice,
      imageUrl: formState.imageUrl.trim(),
      thumbnailUrl: formState.thumbnailUrl.trim(),
      barCode: formState.barCode.trim().length > 0 ? formState.barCode.trim() : undefined,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.header}>Edition Produit</Text>
      <View style={styles.central}>
        <View style={styles.left}>
          <Text style={styles.headerValue}>Titre</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            value={formState.titre}
            onChangeText={updateField("titre")}
            placeholder="Nom du produit"
          />
          <Text style={styles.headerValue}>Description</Text>
          <TextInput
            style={[styles.input, styles.multiLinesInput]}
            numberOfLines={6}
            multiline
            maxLength={256}
            value={formState.description}
            onChangeText={updateField("description")}
            placeholder="Décrivez le produit"
          />
          <Text style={styles.headerValue}>Stock</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="number-pad"
            inputMode="numeric"
            value={formState.stock}
            onChangeText={updateField("stock")}
            placeholder="0"
          />
          <Text style={styles.headerValue}>Prix</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="decimal-pad"
            inputMode="decimal"
            value={formState.prix}
            onChangeText={updateField("prix")}
            placeholder="0.00"
          />
          <Text style={styles.headerValue}>Code-barres</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            keyboardType="number-pad"
            inputMode="numeric"
            value={formState.barCode}
            onChangeText={updateField("barCode")}
            placeholder="EAN / UPC"
          />
          <Text style={styles.headerValue}>Image</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            inputMode="url"
            autoCapitalize="none"
            value={formState.imageUrl}
            onChangeText={updateField("imageUrl")}
            placeholder="https://..."
          />
          <Text style={styles.headerValue}>Thumbnail</Text>
          <TextInput
            style={[styles.input, styles.inputText]}
            inputMode="url"
            autoCapitalize="none"
            value={formState.thumbnailUrl}
            onChangeText={updateField("thumbnailUrl")}
            placeholder="https://..."
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.previewTitle}>Prévisualisation</Text>
          {formState.imageUrl.trim().length > 0 ? (
            <Image source={{ uri: formState.imageUrl.trim() }} style={styles.image} />
          ) : (
            <View style={[styles.image, styles.placeholder]}>
              <Text>Aucune image</Text>
            </View>
          )}
          {formState.thumbnailUrl.trim().length > 0 ? (
            <Image
              source={{ uri: formState.thumbnailUrl.trim() }}
              style={styles.thumbnail}
            />
          ) : (
            <View style={[styles.thumbnail, styles.placeholder]}>
              <Text>Miniature</Text>
            </View>
          )}
        </View>
      </View>
      {(hasInvalidPrice || hasInvalidStock) && (
        <Text style={styles.validationMessage}>
          Vérifiez le prix et le stock avant d'enregistrer.
        </Text>
      )}
      <View style={styles.buttons}>
        <Button
          title="Annuler"
          color="tomato"
          onPress={handleCancel}
          disabled={isSaving}
        />
        <View style={styles.saveButton}>
          {isSaving && <ActivityIndicator color="skyblue" />}
          <Button
            title={isSaving ? "Enregistrement..." : "Enregistrer"}
            color="skyblue"
            onPress={handleSave}
            disabled={isSaveDisabled || isSaving}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductEditor;
