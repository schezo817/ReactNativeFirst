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
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <SafeAreaView>
          <Center>
            <Text>予定を入力してください</Text>
            <Box alignItems="center" w="100%">
              <TextArea
                h={20}
                placeholder="Text Area Placeholder"
                w="75%"
                maxW="300"
              />
            </Box>
            <HStack alignItems="center" space={4}>
              <Text>利用規約に同意する</Text>
              <Switch size="sm" />
            </HStack>
            <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
              確定
            </Button>
            <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>確定</AlertDialog.Header>
                <AlertDialog.Body>
                  この内容で決定していいですか？
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={onClose}
                      ref={cancelRef}
                    >
                      いいえ
                    </Button>
                    <Button
                      colorScheme="danger"
                      onPress={() => navigation.navigate("User")}
                    >
                      はい
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Center>
        </SafeAreaView>
      </ScrollView>
    </NativeBaseProvider>
  );
}
