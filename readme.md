# 🚀 Nginx Redirect Generator {NRG} 🚀

NRG *(pronounced "energy")* was created to simplify and standardize the way that redirects are implimented in NGINX.

## 🌟 Features 🌟

- import redirects from file
  - .txt
  - .csv
- default logic is used for generation
  - Example: `rewrite ^/oldthing/?$ https://www.something.com/newthing/ permanent;`

## ⚠️ Notes ⚠️

- currently no custom logic
- no .xlsx support "[Convert with this tool to .csv](https://cloudconvert.com/xlsx-to-csv)"
- query strings are removed and not currently generated as location query redirects
- large files will lock the browser "lets keep it below 10k rows 😉"

## 🎉 Resources 🎉

- [Spredsheet template for redirects](https://docs.google.com/spreadsheets/d/1ITXWUaH2-iTj7SQ0Kemz3gipDT2ldPBs2JK9bRK7haE/edit?usp=sharing)
- [How to format NGINX redirects/rewrites](https://www.codesmite.com/article/clean-url-rewrites-using-nginx)
- [.xlsx to .csv converter](https://cloudconvert.com/xlsx-to-csv)

## 🚗 Roadmap 🚗

Love this - https://mango-is.com/tools/csv-to-json/

- select all inside code will only select code
- impliment [ClipboardJS](https://clipboardjs.com/) on generated redirects
  - [do this](https://webdesign.tutsplus.com/tutorials/copy-to-clipboard-made-easy-with-clipboardjs--cms-25086)
- load test and ensure perf
  - currently locks browser on 50k and 100k .csv
  - perhaps use lodash for `generateRedirects()`
  - add PapaParse Worker "may need to add source of PapaParse to repo for this"
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
    - 301 or 302 `permanent, redirect` + allow for all other NGINX options here `break, last, etc.`
    - add/ensure trailing slash in source URL
    - remove trailing slash
    - add global options for all checkboxes "apply to all"
  - save sheet by default at randomized link for sharing or revisiting
    - allow for checkbox to not save current sheet
    - allow for private sheets "probably not...these should not be indexed anyway"
  - save sheet to .csv file "including options"
  - button to check HTTP status of all destinations/targets
    - [example for Google Sheets](https://medium.com/@the.benhawy/how-to-use-google-spreadsheets-to-check-for-broken-links-1bb0b35c8525)
- create app for testing NGINX Config - [docker example](https://dev.to/simdrouin/validate-your-nginx-configuration-files-easily-with-docker-4ihi)
  - perhaps create an app on [Zeit](https://zeit.co/) for this
- may want to impliment my own form of syntax highlighting since we will know all syntax used

## Changelog

will start at 1.0.0