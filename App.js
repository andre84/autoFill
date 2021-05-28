/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextInput
            placeholder="Name"
            importantForAutofill="yes"
            name="given-name"
            textContentType="givenName"
          />
          <TextInput
            placeholder="Surname"
            name="family-name"
            importantForAutofill="yes"
            textContentType="familyName"
          />
          <TextInput
            autoCompleteType="tel"
            placeholder="Tel"
            importantForAutofill="yes"
            type="tel"
            name="phone"
            textContentType="telephoneNumber"
          />
          <TextInput
            placeholder="Email"
            name="email"
            importantForAutofill="yes"
            textContentType="emailAddress"
            autoCompleteType="email"
          />
          <TextInput
            placeholder="Address1"
            name="address-line1"
            importantForAutofill="yes"
            textContentType="streetAddressLine1"
          />
          <TextInput
            placeholder="Address2"
            name="address-line2"
            importantForAutofill="yes"
            textContentType="streetAddressLine2"
          />
          <TextInput
            placeholder="City"
            name="ship-city"
            importantForAutofill="yes"
            textContentType="addressCity"
          />
          <TextInput
            placeholder="State"
            name="ship-state"
            importantForAutofill="yes"
            textContentType="addressState"
          />
          <TextInput
            placeholder="Zip"
            name="ship-zip"
            importantForAutofill="yes"
            textContentType="postalCode"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
