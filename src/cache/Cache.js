import AsyncStorage from "@react-native-async-storage/async-storage";

export async function Cache(name, data) {
  try {
    await AsyncStorage.setItem(`${name}`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export async function LoadCache(name) {
  const data = await AsyncStorage.getItem(`${name}`);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}
