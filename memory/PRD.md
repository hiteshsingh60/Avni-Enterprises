# Avni Enterprises – Landing Page PRD

## Original problem statement
"Build a landing page: I want to make a modern website for my business , use my brand logo as mentioned in company profile , here I am sharing my company profile from where you can take data. The website would be very high profile and elegant."
(Company profile PDF: Avni Enterprises, Delhi, facility management & admin support AMC.)

User choices: Dark & luxurious look; enquiries saved + emailed to owner; no WhatsApp button.

## Architecture
- Frontend: React (CRA), framer-motion, lenis smooth scroll, self-hosted Cormorant Garamond + Manrope, sonner toasts. Components in src/components/site/.
- Backend: FastAPI `POST /api/enquiries` → MongoDB `enquiries` + Emergent-managed Resend email to OWNER_EMAIL (backend/.env). Email helper in backend/email_service.py.
- Logo recreated as SVG (gold #F5B34A square, navy #1F3A6D "AE"), also favicon.svg.

## Personas
Facility/admin heads at corporates, institutions, real-estate firms seeking a single AMC vendor.

## Core requirements
Brand logo, profile-sourced content only, elegant premium design, enquiry capture with owner email.

## Implemented (2026-10-25)
- Hero with masked line reveal, clip-reveal tower image, 3D tilt + parallax, mouse spotlight
- Slow editorial services marquee; About + stats + mission; 7-service bento; Single-Window AMC model with scroll progress line; Clients (Sobha, L&T, Ashoka); Enquiry form; Footer
- Enquiry API verified (saved + email 202 Accepted)
- Logo (user PNG, recoloured for dark bg), gold logo-drawing intro, footer "Our brands" with Pristin logo
- Email now sent via user's own Resend account (RESEND_API_KEY, RESEND_FROM_EMAIL) using resend SDK; reply-to = visitor email; works on any host

## Backlog
- P1: Admin view of saved enquiries (protected)
- P1: Real client logos / own project photos
- P2: SEO (sitemap, OG image), case studies page

## Next tasks
Await user feedback on design/content.
