Title: feat(ui): basic layout & UI for Dashboard, Mutation Lab, Story Creator

Description:
This PR implements the basic UI/UX foundation for SCME PRIME v9.

What it adds:
- Global layout (Header/Nav, main container)
- Sidebar stub + responsive layout
- Dashboard: hero + quick panels
- Mutation Lab: starter UI (controls + result area)
- Story Creator: editor shell (outline, draft, preview)
- Basic client-side routing and links
- Accessible HTML structure and ARIA roles
- Small CSS utilities in globals.css

Next steps (after merge):
- Wire up serverless endpoints for AI calls
- Add mutation ideas dataset & search
- Add auth + settings

Checklist:
- [ ] Add Header/Nav component (desktop + mobile)
- [ ] Add Sidebar component (collapsible)
- [ ] Dashboard page: stats cards + recent activity panel
- [ ] Mutation Lab page: input controls + result tiles
- [ ] Story Creator page: outline sidebar + editor area
- [ ] Add shared components folder (Button, Card, Field)
- [ ] Improve globals.css (responsive utilities)
- [ ] Add sample mock data for front-end (src/mocks)
- [ ] Test: smoke test build & deploy on Vercel
