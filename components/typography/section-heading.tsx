import type { ReactNode } from "react"

import { cn } from "cn"

import { Eyebrow } from "./eyebrow"
import { Heading, type HeadingLevel } from "./heading"
import { Text } from "./text"

type SectionHeadingProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  level?: Extract<HeadingLevel, 2 | 3>
  align?: "left" | "center"
  className?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        centered && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading level={level}>{title}</Heading>
      {description ? <Text variant="lead">{description}</Text> : null}
    </div>
  )
}

export { SectionHeading }
