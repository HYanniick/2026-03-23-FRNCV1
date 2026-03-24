import { View, Text } from 'react-native';
import React from 'react';
import { style } from './Banner.styles';
interface BannerProps {
  text?: string;
  styleProps?: object;
}
const Banner = ({ text = 'Ma boutique', styleProps={} }:BannerProps) => {
  return (
    <View style={[style.bannerContainer, styleProps]}>
      <View style={style.left}>
        <Text style={style.title}>{text}</Text>
      </View>
    </View>
  );
};

export default Banner;