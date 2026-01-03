import { Song } from './types';

export const DEFAULT_ALBUM_ART = 'https://picsum.photos/200/200';
export const PLACEHOLDER_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export const PLACEHOLDER_SONGS: Song[] = [
  { id: 's1', title: 'Song of the Wind', artist: 'Breezy Tunes', albumArt: 'https://picsum.photos/id/10/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Folk' },
  { id: 's2', title: 'City Lights', artist: 'Urban Beats', albumArt: 'https://picsum.photos/id/20/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Electronic' },
  { id: 's3', title: 'Rainy Day Dream', artist: 'Mellow Sounds', albumArt: 'https://picsum.photos/id/30/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Jazz' },
  { id: 's4', title: 'Mountain Echo', artist: 'Wilderness Harmony', albumArt: 'https://picsum.photos/id/40/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Ambient' },
  { id: 's5', title: 'Sunset Groove', artist: 'Chillwave Collective', albumArt: 'https://picsum.photos/id/50/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Lo-fi' },
  { id: 's6', title: 'Starlight Serenade', artist: 'Cosmic Harmonies', albumArt: 'https://picsum.photos/id/60/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Classical' },
  { id: 's7', title: 'Ocean Waves', artist: 'Aqua Beats', albumArt: 'https://picsum.photos/id/70/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Chillhop' },
  { id: 's8', title: 'Forest Path', artist: 'Nature\'s Symphony', albumArt: 'https://picsum.photos/id/80/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'New Age' },
  { id: 's9', title: 'Desert Sands', artist: 'Nomadic Rhythms', albumArt: 'https://picsum.photos/id/90/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'World' },
  { id: 's10', title: 'Aurora Borealis', artist: 'Celestial Sounds', albumArt: 'https://picsum.photos/id/100/200/200', audioUrl: PLACEHOLDER_AUDIO_URL, genre: 'Electronic' },
];

export const GEMINI_PRO_MODEL = 'gemini-3-pro-preview';
export const GEMINI_FLASH_MODEL = 'gemini-3-flash-preview';
export const GEMINI_FLASH_AUDIO_MODEL = 'gemini-2.5-flash-native-audio-preview-09-2025';
export const GEMINI_PRO_IMAGE_MODEL = 'gemini-3-pro-image-preview';

export const VEO_MODEL = 'veo-3.1-fast-generate-preview'; // Although not directly used for video, it's a model mentioned in guidelines.
