import UserManagement from "../components/UserManagement";

const userManagement = () => {
  window.document.title = "User Management";
  return (
    <div className="container p-lg-5">
      <UserManagement />
    </div>
  );
};

export default userManagement;
