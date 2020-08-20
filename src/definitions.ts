declare module '@capacitor/core' {
  interface PluginRegistry {
    PusherBeams: PusherBeamsPlugin;
  }
}

export interface PusherBeamsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
