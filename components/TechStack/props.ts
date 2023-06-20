export interface TechStackItem {
  name: string;
  icon: React.ReactElement | JSX.Element;
}

export interface TechStackProps {
  stack: TechStackItem[];
  title: string;
}
