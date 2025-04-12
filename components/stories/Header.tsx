import { View, Text } from 'react-native';
import { Button } from './Button';

export type HeaderProps = {
  user?: { name: string };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
};

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <View>
    <View className="flex-row justify-between border-b border-black/10 py-[15px] px-5">
      <View className="flex-row items-center">
        <Text className="text-black font-extrabold text-[20px] mt-[6px] mb-[6px] ml-[10px] self-start">
          Acme
        </Text>
      </View>
      <View className="flex-row items-center">
        {user ? (
          <>
            <Text>Welcome, </Text>
            <Text className="font-bold">{user.name}!</Text>
            <Button className="ml-[10px]" size="small" onPress={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button className="ml-[10px]" size="small" onPress={onLogin} label="Log in" />
            <Button
              className="ml-[10px]"
              primary
              size="small"
              onPress={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </View>
    </View>
  </View>
);
