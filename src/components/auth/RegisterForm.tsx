
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import SuperbidButton from "../ui/SuperbidButton";
import SuperbidInput from "../ui/SuperbidInput";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      // Here would go actual registration logic
      // For now we'll simulate it with a timeout
      
      setTimeout(() => {
        toast.success("Registration successful");
        navigate("/login");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error("Registration failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md animate-fade-in">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">{t('register.title')}</h1>
        <p className="text-muted-foreground">
          {t('register.subtitle')}
        </p>
      </div>

      <SuperbidInput
        label={t('register.fullName')}
        type="text"
        placeholder={`${t('register.fullName')}...`}
        icon={<User size={18} />}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <SuperbidInput
        label={t('register.email')}
        type="email"
        placeholder={`${t('register.email')}...`}
        icon={<Mail size={18} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <SuperbidInput
        label={t('register.password')}
        type={showPassword ? "text" : "password"}
        placeholder={`${t('register.password')}...`}
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

      <SuperbidInput
        label={t('register.confirmPassword')}
        type={showConfirmPassword ? "text" : "password"}
        placeholder={`${t('register.confirmPassword')}...`}
        icon={<Lock size={18} />}
        rightIcon={
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="focus:outline-none"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="rounded border-gray-300 text-primary focus:ring-primary/80"
          required
        />
        <label htmlFor="terms" className="text-sm">
          {t('register.termsAgreement')}{" "}
          <Link to="/terms" className="text-primary hover:underline">
            {t('register.termsOfService')}
          </Link>{" "}
          {t('register.and')}{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            {t('register.privacyPolicy')}
          </Link>
        </label>
      </div>

      <div className="pt-2">
        <SuperbidButton
          type="submit"
          variant="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : t('register.createAccount')}
        </SuperbidButton>
      </div>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">{t('register.alreadyHaveAccount')}</span>{" "}
        <Link to="/login" className="text-primary font-medium hover:underline">
          {t('register.signIn')}
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
