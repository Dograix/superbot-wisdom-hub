
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import SuperbidButton from "../ui/SuperbidButton";
import SuperbidInput from "../ui/SuperbidInput";
import { toast } from "sonner";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsLoading(true);
      // Here would go actual authentication logic
      // For now we'll simulate it with a timeout
      
      setTimeout(() => {
        toast.success("Login successful");
        navigate("/dashboard");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md animate-fade-in">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>

      <SuperbidInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={<Mail size={18} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <SuperbidInput
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        icon={<Lock size={18} />}
        rightIcon={
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            className="rounded border-gray-300 text-primary focus:ring-primary/80"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>
        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
          Forgot password?
        </Link>
      </div>

      <div className="pt-2">
        <SuperbidButton
          type="submit"
          variant="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </SuperbidButton>
      </div>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Don't have an account?</span>{" "}
        <Link to="/register" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
