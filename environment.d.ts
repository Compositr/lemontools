// Do not edit this file unless you know what you are doing!
// Just stay on the safe side and don't edit 
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN?: string;
      ENVIRONMENT: "dev" | "production" | "debug";
      TEST_GUILD: string;
      APPLICATION_ID: string
    }
  }
}

export {} // Empty export to avoid errors which sometimes occur