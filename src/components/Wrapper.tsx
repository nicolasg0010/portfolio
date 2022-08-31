type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="border-2 min-h-screen flex flex-col lg:flex-row">{children}</div>;
}
