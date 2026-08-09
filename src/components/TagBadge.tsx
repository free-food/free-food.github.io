import type { Tag } from "../content/deals";

const tagStyles: Record<Tag, { bg: string; color: string }> = {
  free: { bg: "var(--color-tag-free-bg)", color: "var(--color-tag-free)" },
  budget: { bg: "var(--color-tag-budget-bg)", color: "var(--color-tag-budget)" },
  rewards: { bg: "var(--color-tag-rewards-bg)", color: "var(--color-tag-rewards)" },
  unverified: {
    bg: "var(--color-tag-unverified-bg)",
    color: "var(--color-tag-unverified)",
  },
  expired: { bg: "var(--color-tag-expired-bg)", color: "var(--color-tag-expired)" },
  "limited-time": {
    bg: "var(--color-tag-limited-bg)",
    color: "var(--color-tag-limited)",
  },
};

const tagLabels: Record<Tag, string> = {
  free: "Free",
  budget: "Under $10",
  rewards: "Rewards signup",
  unverified: "Unverified",
  expired: "Expired",
  "limited-time": "Limited time",
};

type Props = {
  tag: Tag;
};

export default function TagBadge({ tag }: Props) {
  const style = tagStyles[tag];
  return (
    <span
      className="tag-badge"
      style={{ background: style.bg, color: style.color }}
    >
      {tagLabels[tag]}
    </span>
  );
}
