---
name: GitHub push verification
description: Distinguishing a successful remote push from a local tracking-reference error
---

A push through the existing GitHub proxy can upload the branch successfully but exit with code 254 because updating the local remote-tracking reference or upstream configuration is restricted.

**Why:** Several approved live updates reported a new remote revision and then failed on a local `.git` lock; GitHub had already accepted the update.

**How to apply:** Compare `git ls-remote origin refs/heads/main` with `git rev-parse HEAD` before retrying a push. Do not change credentials, remotes, or repository visibility to fix a local tracking-reference error. Pushing this repository can trigger Render to update the live site, so obtain confirmation before each production update.
