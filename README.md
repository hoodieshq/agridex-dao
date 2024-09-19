### Using custom Swap API endpoints

You can set custom URLs via the configuration for any self-hosted Jupiter APIs, like the [V6 Swap API](https://station.jup.ag/docs/apis/self-hosted) or [Paid Hosted APIs](https://station.jup.ag/docs/apis/self-hosted#paid-hosted-apis) Here is an example:

```
NEXT_PUBLIC_JUPTER_SWAP_API_ENDPOINT=https://quote-api.jup.ag/v6
```

Example for required APIs:

```
NEXT_PUBLIC_MAGIC_LINK_PUBLIC_API_KEY=
NEXT_PUBLIC_HELIUS_DEVNET_RPC=
NEXT_PUBLIC_HELIUS_MAINNET_RPC=
```

To access the Agridex's Registry, add `AGRIDEX_PACKAGE_REGISTRY_ACCESS_TOKEN` to environment.
