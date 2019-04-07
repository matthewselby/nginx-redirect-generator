# Nginx Redirect Generator {NRG}

NRG was created to simplify and standardize the way that redirects are implimented in NGINX

## 🌟 Features 🌟

- import redirects from file
  - .txt
  -

## Roadmap

- add options menu
  - push out style menu
  - dark mode
  - don't force source URL to string
  - first line contains URLs and not headers "PapaParse - `header: false`"
- look for queries in source URLs and automagically create location query redirects for them
- allow for NGINX redirects as input for possible cleanup and allow for .conf file upload
  - test for comments...either remove all or find a way to keep
- explore options for generating new NGINX blocks with redirects "secondary domain specific redirects or External Rewrites"
  - ...this could get tricky. Might be best to leave this out and have them use the generator for rewrites within that block.
- create a separate front end for creating and visualizing source/destination URLS before generating "NGINX Redirct Builder??"
  - import from file or text and convert to JSON with PapaParse
  - checkboxes/toggles for features (advanced mode toggle from menu)
    - case insenstivie `(?i)`
    - starting with carrot `^`
    - conditional trailing slash `/?`
    - stop at end of sting `$`
    - 301 or 302 `permanent or redirect`
    - add/ensure trailing slash in source URL
    - remove trailing slash
    - add global options for all checkboxes "apply to all"
  - save sheet by default at randomized link for sharing or revisiting
    - allow for checkbox to not save current sheet
    - allow for private sheets "probably not...these should not be indexed anyway"
  - save sheet to .csv file "including options"