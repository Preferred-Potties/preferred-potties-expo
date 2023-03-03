// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   PermissionsAndroid,
// } from "react-native";
// import React, { useState } from "react";
// import Geolocation from "expo-geolocation-service";

// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: "Geolocation Permission",
//         message: "Can we access your location?",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK",
//       }
//     );
//     alert("granted", granted);
//     if (granted === "granted") {
//       console.log("You can use Geolocation");
//       return true;
//     } else {
//       console.log("You cannot use Geolocation");
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

// const [location, setLocation] = useState(false);

// const getLocation = () => {
//   const result = requestLocationPermission();
//   result.then((res) => {
//     console.log("res is:", res);
//     if (res) {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           console.log(position);
//           setLocation(position);
//         },
//         (error) => {
//           // See error code charts below.
//           console.log(error.code, error.message);
//           setLocation(false);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     }
//   });
//   console.log(location);
// };

// export default function TestScreen() {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <View
//         style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
//       >
//         <Button title="Get Location" onPress={getLocation} />
//       </View>
//       <Text>Latitude: </Text>
//       <Text>Longitude: </Text>
//       <View
//         style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
//       >
//         <Button title="Send Location" />
//       </View>
//     </View>
//   );
// }

import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      /* @hide */
      //  i
      /* @end */
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

/* @hide const styles = StyleSheet.create({ ... }); */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
/* @end */
