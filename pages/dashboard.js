import { useEffect } from "react";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const router = useRouter();

  // Use effect to redirect if not authenticated (e.g., no access token)
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); // Example: Retrieve token from storage
    if (!accessToken) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* Dashboard content goes here */}
    </div>
  );
};

export default DashboardPage;
