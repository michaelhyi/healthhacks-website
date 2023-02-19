// File "Icon.tsx"
import loadable from "@loadable/component"
import { IconBaseProps, IconType } from "react-icons/lib"

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps
}

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): JSX.Element {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  // @ts-expect-error
  const ElementIcon: IconType = loadable(async () => await import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element],
  });

  return <ElementIcon {...propsIcon} />
}