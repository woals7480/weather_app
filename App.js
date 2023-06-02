import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "3108b3986e2950cfc86062f3e9cd4022";
const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Rain: "rains",
  Thunderstorm: "lightning",
  Drizzle: "rain",
  Snow: "snow",
};
const dates = ["일", "월", "화", "수", "목", "금", "토"];

export default function App() {
  const [city, setCity] = useState("...loading");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const [date, setDate] = useState(0);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const today = new Date();
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setOk(false);
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
    setDate(today.getDate());
    setDay(today.getDay());
    setMonth(today.getMonth());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          days.map((el, index) => (
            <View style={styles.day} key={index}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: -20,
                  marginBottom: 80,
                }}
              >
                <Text style={{ fontSize: 40, color: "white" }}>
                  {month + 1}/{day + index} {dates[date + index]}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.temp}>
                    {parseFloat(el.temp.day).toFixed(1)}°
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.tempDetail}>
                      최저:{parseFloat(el.temp.min).toFixed(1)}°
                    </Text>
                    <Text style={styles.tempDetail}>
                      최고:{parseFloat(el.temp.max).toFixed(1)}°
                    </Text>
                  </View>
                </View>
                <Fontisto
                  name={icons[el.weather[0].main]}
                  size={70}
                  color="white"
                />
              </View>
              <Text style={styles.description}>{el.weather[0].main}</Text>
              <Text style={styles.descriptionDeatil}>
                {el.weather[0].description}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#8c83b4" },
  city: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cityName: { fontSize: 52, fontWeight: "400", color: "white" },
  day: {
    width: SCREEN_WIDTH,
    padding: 30,
  },
  temp: {
    fontSize: 100,
    marginTop: 50,
    color: "white",
  },
  tempDetail: { color: "white", fontSize: 16, marginRight: 5 },
  description: {
    fontSize: 48,
    color: "white",
    marginTop: 10,
  },
  descriptionDeatil: {
    fontSize: 18,
    color: "white",
  },
});
