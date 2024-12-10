export interface AccountFormSchema {
    IsDemo: any;                 // Indicates if the user is in demo mode
    IsAdmin: any;                // Indicates if the user has admin privileges
    IsNewUser: any;              // Indicates if the user is new
    Username: any;         // User's username
    DisplayName: any;      // User's display name
    Email: any;            // User's email address
    Token: any;            // Authentication token
    IsCannotChangePassword: any; // Indicates if the user cannot change their password
    IsMustChangePassword: any;   // Indicates if the user must change their password
    FirstName: any;        // User's first name
    LastName: any;         // User's last name
    DateExpires: any; // Expiration date (ISO string, Date object, or null)
    ClerkUserId: any;
  }
  