import { TokenCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

export default class AzureKeyVault {
    constructor() { }

    public static getKeyVaultSecret = async (credential: TokenCredential, url: string) => {
        const client = new SecretClient(url, credential);
        const secret: any = await client.getSecret(`${process.env.AZURE_SECRETS_NAME}`);
        return JSON.parse(secret.value);
    };
}
