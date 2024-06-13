/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TARGET_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
