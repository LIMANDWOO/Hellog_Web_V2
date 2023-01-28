import MainNavBar from "@/components/common/NavBar/MainNavBar";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <MainNavBar />
      {children}
    </div>
  );
};

export default RootLayout;
