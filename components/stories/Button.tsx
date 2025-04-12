import { TouchableOpacity, View, Text } from 'react-native';
import clsx from 'clsx';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onPress?: () => void;
  className?: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onPress,
  className,
}: ButtonProps) => {
  const modeStyles = primary
    ? 'bg-[#1ea7fd]'
    : 'bg-transparent border border-black/15';

  const textModeStyles = primary ? 'text-white' : 'text-[#333]';

  const sizeStyles = {
    small: 'py-[10px] px-4',
    medium: 'py-[11px] px-5',
    large: 'py-[12px] px-6',
  }[size];

  const textSizeStyles = {
    small: 'text-[12px]',
    medium: 'text-[14px]',
    large: 'text-[16px]',
  }[size];

  return (
    <TouchableOpacity accessibilityRole="button" activeOpacity={0.6} onPress={onPress}>
      <View
        className={clsx(
          'rounded-full border border-black',
          sizeStyles,
          modeStyles,
          className
        )}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <Text className={clsx('font-bold', textModeStyles, textSizeStyles)}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
