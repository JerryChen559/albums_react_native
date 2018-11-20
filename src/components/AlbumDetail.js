import React from "react";
import { View, Text, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = props => {
  const { title, artist, thumbnail_image, image } = props.album;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          {/* RN needs: image dimensions & uri object */}
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Text>Buy Now</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    // trick to make the image expand across 100%
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
