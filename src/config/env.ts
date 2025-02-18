import * as z from 'zod';

const createEnv = () => {
  // ENV schema. Make sure to add new properties here so we can get notice if we receive an invalid env config.
  const EnvSchema = z.object({
    API_URL: z.string(),
    APP_URL: z.string().optional().default('http://localhost:8080'),
    PERSISTENT_STORE_KEY: z.string(),
    ENV_KEY: z.string(),
  });

  const envVars = Object.entries(import.meta.env).reduce<Record<string, string>>((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value;
    }
    return acc;
  }, {});

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    // causes app to whitescreen and not work if no proper env config is provided.
    throw new Error(`Invalid env provided.`);
  }

  return parsedEnv.data;
};

export const env = createEnv();
