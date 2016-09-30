'use strict';

import fetch from 'node-fetch';

const apiEndpoint = 'https://api.github.com';

export const fetchGitHubUser = username =>
  fetch(`${apiEndpoint}/users/${username}`)
    .then(response => response.json());