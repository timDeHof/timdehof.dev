import { Container } from "@/components/ui";
import React, { FC } from "react";

import { Props } from "./props";

export const SectionHeader: FC<Props> = ({
  title,
  description,
  className,
}: Props) => {
  return (
    <Container className={className} maxWidth="2xl">
      <h2 className="my-4 text-6xl font-bold text-center text-secondary">
        {title}
      </h2>
      <p className="mb-4 text-base lg:text-2xl dark:text-white-700 text-black-700">
        {description}
      </p>
    </Container>
  );
};
