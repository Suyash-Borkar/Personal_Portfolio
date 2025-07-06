import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="cosmic-button inline-flex items-center gap-2"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
