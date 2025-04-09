import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button
      className="px-8 py-2 bg-teal-500 self-start rounded-lg"
      onPress={onPress}
    >
      <ButtonText className="text-white text-base font-bold">
        {text}
      </ButtonText>
    </Button>
  );
};
