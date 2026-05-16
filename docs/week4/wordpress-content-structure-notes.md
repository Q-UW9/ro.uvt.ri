# WordPress Content Structure Notes - Week 4
This document outlines the content types designed to serve the Department of International Relations (DRI) headless architecture.

## Strategy
- **Static Content:** Managed via standard WordPress Pages (`/pages`) to handle immutable profiles like "About DRI" and "Contact".
- **Dynamic Content:** Handled via Custom Post Types to store decoupled collections (Calls, Stories, Resources, Programmes) that update autonomously on the React client app.