interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div>
      <div>authNav</div>
      {children}
    </div>
  );
};

export default AuthLayout;
