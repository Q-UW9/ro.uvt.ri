# Static vs Dynamic Content Mapping
Architectural separation details for developers consuming the headless endpoints.

### Static Assets (Pages Endpoint)
- About DRI (`/wp-json/wp/v2/pages?slug=about-dri`)
- Contact (`/wp-json/wp/v2/pages?slug=contact`)
- Partnerships (`/wp-json/wp/v2/pages?slug=partnerships`)

### Dynamic Frameworks (Custom Base Endpoints)
- `/wp-json/wp/v2/calls` - Live operational mobility windows.
- `/wp-json/wp/v2/stories` - Student mobility reviews.
- `/wp-json/wp/v2/resources` - Regulatory downloads and paperwork templates.
- `/wp-json/wp/v2/programmes` - Active structural pathways.