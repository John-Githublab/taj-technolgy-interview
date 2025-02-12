class Helpers {
  static checkPasswordStrength = (password: string): string => {
    // Regular expression for password strength criteria
    const lengthRegex = /^.{8,}$/; // Password must be at least 8 characters long
    const upperCaseRegex = /[A-Z]/; // Password must contain at least one uppercase letter
    const lowerCaseRegex = /[a-z]/; // Password must contain at least one lowercase letter
    const numberRegex = /[0-9]/; // Password must contain at least one number
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Password must contain at least one special character

    // Check password strength and returns the text accrdingly
    if (!lengthRegex.test(password)) {
      return "Password must be at least 8 characters long";
    }
    if (!upperCaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowerCaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!numberRegex.test(password)) {
      return "Password must contain at least one number";
    }
    if (!specialCharRegex.test(password)) {
      return "Password must contain at least one special character";
    }

    return "Password is strong";
  };
  static checkPasswordStrengthBar = (password: string): number => {
    const lengthCriteria = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let score = 0;
    if (lengthCriteria) score++;
    if (hasUpperCase) score++;
    if (hasLowerCase) score++;
    if (hasNumbers) score++;
    if (hasSpecialChars) score++;
    return score;
  };
  static isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  static getLabel = (type: string) => {
    let label = "";
    switch (type) {
      case "create":
        label = "Submit";
        break;
      case "edit":
        label = "Update";
        break;
      default:
        label = ""; // Optional: Add a default case
        break;
    }
    return label;
  };
  static getLastPath = (location: any) => {
    return location?.pathname?.split("/")?.pop();
  };
  static sorter = (a: any, b: any) => {
    if (typeof a?.age === "number" && typeof b?.age === "number") {
      return a?.age - b?.age; // Numeric comparison
    }
    if (typeof a.age === "string" && typeof b.age === "string") {
      return a.age.localeCompare(b.age); // String comparison
    }
    return 1; // Default case for mismatched or invalid data
  };
}

export default Helpers;
