import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "daadcab60cedb984f82b125211e98bea";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=37.5&lon=127.06&APPID=${API_KEY}&units=metric`
      // `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp,
    });

    console.log("data :: ", data);
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
