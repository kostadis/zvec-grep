export const REMOTE_EMBEDDING_PROVIDER_CATALOG = {
  qwen: {
    provider: "qwen",
    apiKey: "required",
  },
  dgx: {
    provider: "dgx",
    apiKey: "optional",
  },
} as const;

export type RemoteEmbeddingProviderCatalogEntry =
  (typeof REMOTE_EMBEDDING_PROVIDER_CATALOG)[keyof typeof REMOTE_EMBEDDING_PROVIDER_CATALOG];

export function listRemoteEmbeddingProviders(): RemoteEmbeddingProviderCatalogEntry[] {
  return Object.values(REMOTE_EMBEDDING_PROVIDER_CATALOG);
}

export function getRemoteEmbeddingProviderCatalogEntry(
  provider: string,
): RemoteEmbeddingProviderCatalogEntry | undefined {
  return REMOTE_EMBEDDING_PROVIDER_CATALOG[
    provider as keyof typeof REMOTE_EMBEDDING_PROVIDER_CATALOG
  ];
}

/**
 * Only catalogued providers are remote. A new remote provider must be added to
 * REMOTE_EMBEDDING_PROVIDER_CATALOG before it is subject to authorization.
 */
export function isRemoteEmbeddingProvider(provider: string): boolean {
  return Object.hasOwn(REMOTE_EMBEDDING_PROVIDER_CATALOG, provider);
}
