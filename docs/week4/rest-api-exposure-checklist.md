# REST API Exposure Checklist
Verification parameters used to confirm data compliance across endpoints.

- [x] Post Types registry explicitly has `show_in_rest` set to true.
- [x] Taxonomy schemas have `show_in_rest` flag verified.
- [x] ACF Field Group rulesets mapped to include custom payloads under the `acf` object container namespace.
- [x] Endpoints respond without requiring authentication wrappers for default GET read parameters.