import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement>;

export const Logo: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="160"
      cursor="default"
      width="160"
      baseProfile="full"
      viewBox="0 0 160 160"
    >
      <g />
      <path
        stroke="currentColor"
        strokeWidth="32"
        fill="none"
        d="M0 16h144v128H80V64m-64 0v96"
      />
    </svg>
  );
};
