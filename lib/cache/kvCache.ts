import Kv, { Store } from '@keyvhq/core'
import KvRedis from '@keyvhq/redis'

import { isRedisEnabled, redisUrl, redisNamespace } from '../config'

export interface KVCacheConfig {
	isRedis?: boolean;
	redisUrl?: string;
	redisNamespace?: string;
}

export class KVCache {
	store: Store<string | undefined>;
	constructor(private config: KVCacheConfig) {
		if (this.config.isRedis) {
			this.store = new KvRedis(redisUrl)
		} else {
			// Kv Core 没有继承Store，虽然实现了Store
			this.store = new Kv() as unknown as Store<string | undefined>;
		}
	}
}


export default new KVCache({
	isRedis: isRedisEnabled,
	redisUrl,
	redisNamespace
});
