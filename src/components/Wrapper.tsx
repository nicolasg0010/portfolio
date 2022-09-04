type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <div className="bg-lightBg font-robotoSlab text-md min-h-screen flex flex-col lg:flex-row max-h-screen">
      {children}
    </div>
  );
}
