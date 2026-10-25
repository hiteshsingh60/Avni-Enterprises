export const Logo = ({ testId = "brand-logo", className = "h-9 sm:h-10" }) => (
  <img data-testid={testId} src="/images/logo-light.png" alt="Avni Enterprises" className={`w-auto ${className}`} />
);
