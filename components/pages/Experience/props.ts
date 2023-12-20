export interface ExperienceCardProps {
  icon: {
    icon: React.ReactElement;
    iconStyle: { background: string };
  };
  date?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
}
