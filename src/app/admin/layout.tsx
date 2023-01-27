interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <div>adminNav</div>
      {children}
    </div>
  );
};

export default AdminLayout;
