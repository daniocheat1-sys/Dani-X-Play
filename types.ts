import { FunctionDeclaration } from "@google/genai";

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  audioUrl: string;
  genre: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
}

export interface GeminiSuggestion {
  title: string;
  artist?: string;
  genre?: string;
  description: string;
  downloadLink?: string;
  sourceUrls?: { uri: string; title: string }[];
}

export enum AppView {
  ALL_MUSIC = 'All Music',
  FAVOURITES = 'Favourites',
  PLAYLISTS = 'Playlists',
  RECENT_MUSIC = 'Recent Music',
  AI_ASSISTANT = 'AI Assistant',
  IMAGE_GENERATOR = 'Image Generator',
  VOICE_ASSISTANT = 'Voice Assistant',
}

export interface LiveSessionCallbacks {
  onopen: () => void;
  onmessage: (message: any) => void;
  onerror: (event: Event) => void;
  onclose: (event: CloseEvent) => void;
}

export interface LiveSessionConfig {
  systemInstruction?: string;
  tools?: { functionDeclarations: FunctionDeclaration[] }[];
  inputAudioTranscription?: {};
  outputAudioTranscription?: {};
}

export interface ImageGenerationConfig {
  imageSize: "1K" | "2K" | "4K";
  aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

// Defines the AIStudio interface for global window object
// The actual global declaration for `window.aistudio` is assumed to be provided by the runtime environment.
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}
