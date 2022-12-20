import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "phosphor-react";

export function ButtonUpdateThemeComponent() {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Button
      css={{
        position: "absolute",
        top: 0,
        right: 10
      }}
      auto
      color={isDark ? "default" : "error"}
      icon={isDark ? <Sun weight='bold' size={20} color="#fff" /> : <Moon weight='bold' size={20} />}
      onPress={(e) => setTheme(isDark ? 'light' : 'dark')}
    />
  )
}