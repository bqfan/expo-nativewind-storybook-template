import { useState } from 'react';
import { Linking, Text, View } from 'react-native';
import { Header } from './Header';

export const Page = () => {
  const [user, setUser] = useState<{ name: string } | undefined>();

  return (
    <View>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <View className="px-5 py-12 max-w-[600px] mx-auto text-[#333]">
        <Text role="heading" className="font-extrabold text-[32px] leading-none mb-1">
          Pages in Storybook
        </Text>

        <Text className="my-4">
          We recommend building UIs with a{' '}
          <Text
            className="text-[#1ea7fd] font-bold"
            role="link"
            onPress={() => {
              Linking.openURL('https://componentdriven.org');
            }}
          >
            component-driven
          </Text>{' '}
          process starting with atomic components and ending with pages.
        </Text>

        <Text className="my-4">
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </Text>

        <View className="mb-4">
          <Text>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </Text>
          <Text>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </Text>
        </View>

        <Text className="my-4">
          Get a guided tutorial on component-driven development at{' '}
          <Text
            className="text-[#1ea7fd]"
            role="link"
            onPress={() => {
              Linking.openURL('https://storybook.js.org/tutorials/');
            }}
          >
            Storybook tutorials
          </Text>
          . Read more in the{' '}
          <Text
            className="text-[#1ea7fd]"
            role="link"
            onPress={() => {
              Linking.openURL('https://storybook.js.org/docs');
            }}
          >
            docs
          </Text>
          .
        </Text>

        <View className="flex-row flex-wrap mt-10 mb-10 text-[13px] leading-[20px]">
          <View className="bg-[#e7fdd8] rounded-2xl px-3 py-1 mr-2 mb-1 self-start">
            <Text className="text-[#66bf3c] text-[11px] leading-[12px] font-bold">Tip </Text>
          </View>
          <Text>Adjust the width of the canvas with the </Text>
          <Text>Viewports addon in the toolbar</Text>
        </View>
      </View>
    </View>
  );
};
