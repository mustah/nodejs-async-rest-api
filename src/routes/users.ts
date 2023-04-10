import { Router } from 'express';
import { Observable } from 'rxjs/Rx';
import { fetchGitHubUser } from '../services/GithubService';

export const users = Router();

users.get('/:username', (req, res) => {
  const { username } = req.params;

  Observable.fromPromise(fetchGitHubUser(username))
    .map(user => ({
      name: user.name,
      email: user.email,
      company: user.company
    }))
    .subscribe(
      users => res.send(users),
      error => res.status(500).send(error)
    );
});
