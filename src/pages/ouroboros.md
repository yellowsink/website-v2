---
layout: ../layouts/BaseLayout.astro
title: Ouroboros
---

## Ouroboros

Ouroboros is a simple but effective private VPN manager for self hosting.

It provides a means for users of a Tailnet managed by [Headscale](https://headscale.net) to manage their own devices,
similar to the official Tailscale dashboard.

System admins create Headscale users, and manually match them up to GitHub user IDs for authentication.
Then, users can log in and manage their devices, and register devices seamlessly.

Supported features:

- view list of your nodes
- view list of others' nodes
- rename your nodes
- delete your nodes
- logout (expire) your nodes
- enable and disable your exit nodes
- enable, disable, and delete your routes
- view other users' routes
- authentication via GitHub OAuth2 for access
- registering nodes via a UI

Not supported features:

- Headscale server configuration and management
- ACLs
- DNS configuration and Tailscale SSH
- User signups and management

### Demos

The easiest way to show how it works is demo videos:

<div id="vidcont">
  <video src="/demo-main.mp4" alt="Demo video of ouroboros's dashboard" controls></video>
  <video src="/demo-register.mp4" alt="Demo video of registering a linux node to ouroboros" controls></video>
  <video id="r" src="/demo-mobile-add.mp4" alt="Demo video of logging in to ouroboros on android" controls></video>
</div>

### Setup

Here are instructions to configure Headscale 0.23.0 with Ouroboros 0.3.1 with docker-compose and Caddy.

First, check instructions for setting up a GitHub app and more in depth explanation of the config keys
[here](https://github.com/yellowsink/ouroboros/blob/ee99700/README.md#setup-usage-and-config).

First, set up your docker containers as so:

```yaml
caddy:
   image: caddy
   ports:
      - 80:80
      - 443:443
      - 443:443/udp
   volumes:
      - ./wherever/caddy/Caddyfile:/etc/caddy/Caddyfile
      - ./wherever/caddy/data:/data
      - ./wherever/caddy/config:/config
   cap_add: [NET_ADMIN]

headscale:
   image: headscale/headscale:0.23.0
   ports: [3478:3478] # DERP STUN
   command: serve
   volumes:
      - ./wherever/headscale:/etc/headscale

ouroboros:
   image: yellosink/ouroboros:0.3.1
   environment:
      - HS_IS_REMOTE=true
      - HS_ADDRESS=my.server.com:443
      - HS_API_KEY=xxxxxxx
      - HS_LOGIN_URL=my.server.com
      - GH_CLIENT_ID=xxxxxxx
      - GH_CLIENT_SECRET=xxxxxx
      - 'USER_MAP={ "12345678": "john" }'
```

Copy the config file from the [headscale repo](https://github.com/juanfont/headscale/blob/204a102/config-example.yaml),
and make the following change:

```yaml
# we need this as caddy is supplying our TLS, else we can't access it
# we aren't exposing this port outside of docker, and caddy will secure it, so this is safe
grpc_allow_insecure: true
```

Setup your caddyfile as so:

```
my.server.com {
  @grpc protocol grpc
  handle @grpc {
    reverse_proxy h2c://headscale:50443
  }

  redir /ouroboros /ouroboros/ 301
  redir /          /ouroboros/ 301

  reverse_proxy /ouroboros/* ouroboros:8080
  reverse_proxy /register/* ouroboros:8080

  reverse_proxy headscale:8080
}
```

Then generate an API key with `docker compose exec headscale headscale apikeys --create` and put it in the `HS_API_KEY` env var.

Now ensure you've created all the users you need to exist, then you're done!

<style>
  #vidcont {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: .5rem;
    align-items: center;
  }

  #vidcont video {
    width: 100%;
  }

  #vidcont #r {
    grid-area: 1 / 2 / span 2 / span 1;
  }
</style>
