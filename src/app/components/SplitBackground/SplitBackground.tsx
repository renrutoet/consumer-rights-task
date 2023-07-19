import { PropsWithChildren } from "react";
import styles from "./SplitBackground.module.scss";

interface SplitBackgroundProps extends PropsWithChildren {
  text?: string;
}

export const SplitBackground = ({
  text,
  children,
}: SplitBackgroundProps): JSX.Element => {
  return (
    <div className={` ${styles["c-split-background"]}`}>
      <div className={` ${styles["c-split-background__background-left"]}`}>
        <div className={`${styles["c-split-background__background-text"]}`}>
          {text}
        </div>
      </div>
      <div className={`${styles["c-split-background__children"]}`}>
        {children}
      </div>
    </div>
  );
};
