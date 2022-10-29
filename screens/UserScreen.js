import React from "react";
import {
  Text,
  HStack,
  Center,
  Switch,
  NativeBaseProvider,
  Box,
  TextArea,
  AlertDialog,
  Button,
  cancelRef,
  onClose,
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const UserScreen = () => {
  return (
    <SafeAreaView>
      <Text>ようこそ！</Text>
    </SafeAreaView>
  );
};

export default UserScreen;
