import { useState } from "react";

export const Toggle = () => {
  const [toggle, SetToggle] = useState(false);

  return { toggle, SetToggle };
};
