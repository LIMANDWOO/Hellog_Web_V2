interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <div>homeNav</div>
      {children}
    </div>
  );
};

export default RootLayout;
