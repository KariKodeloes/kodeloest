
// Security configuration and constants

export const SECURITY_CONFIG = {
  // Authentication
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  SESSION_TIMEOUT: 60 * 60 * 1000, // 1 hour
  MIN_TIME_BETWEEN_ATTEMPTS: 1000, // 1 second
  
  // Input validation
  MAX_INPUT_LENGTH: 1000,
  MAX_ALT_TEXT_LENGTH: 500,
  MAX_DESCRIPTION_LENGTH: 2000,
  
  // Content Security
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  
  // Rate limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS_PER_WINDOW: 100,
} as const;

// Security headers that should be set by the server
export const SECURITY_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const;

// Environment validation
export const validateEnvironment = () => {
  const requiredEnvVars = ['VITE_ADMIN_CODE'];
  const missing = requiredEnvVars.filter(envVar => !import.meta.env[envVar]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`);
    console.warn('Using default values. Set these in production!');
  }
};

// Initialize security checks
validateEnvironment();
