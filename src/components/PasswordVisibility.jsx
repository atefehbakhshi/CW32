import { useState } from "react";
import { Icon } from "@iconify/react";

export default function PasswordVisibility({ setInputType }) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityHandler = () => {
    if (!isVisible) {
      setInputType("text");
      setIsVisible(true);
    } else {
      setInputType("password");
      setIsVisible(false);
    }
  };

  return (
    <button onClick={visibilityHandler}>
      {isVisible ? <Icon icon="mdi:eye" /> : <Icon icon="mdi:eye-off" />}
    </button>
  );
}
