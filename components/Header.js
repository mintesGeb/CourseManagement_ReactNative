import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import HeaderStyle from "../styles/HeaderStyle";
// import CourseImage from "../images/course.png";

const Header = () => {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../images/course.png")}
        />
      </View>
      <Text style={HeaderStyle.android}>Courses Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
export default Header;
