docomplete
==========

A Chrome extension to re-enable password completion on websites that intentionally disable it (`autocomplete=off`).

Disabling autocomplete is touted as a security feature, but in reality it just forces users to re-use the same username/password combination all over the place, as no user can remember 20 different passwords for minor sites he/she visits every 3 months.

This extension runs entirely in the background and has no user interface. It enables autocompleting passwords for many forms, but does not work for login forms submitted through AJAX (that's a Chrome limitation/feature).

The source code is available [here](https://github.com/mprobst/docomplete).

Installation
============

Check out the repository and point your Chrome installation to the local files - this way you can be sure the code isn't doing anything nefarious.

Alternatively, [install from the Chrome Webstore](https://chrome.google.com/webstore/detail/docomplete/onlplldgmkgpoangfokimmikjheamnfb).
