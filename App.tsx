import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';
import PlaylistManager from './components/PlaylistManager';
import AIAssistant from './components/AIAssistant';
import ImageGenerator from './components/ImageGenerator';
import VoiceAssistant from './components/VoiceAssistant';
import { AppView, Song, Playlist } from './types';
import { PLACEHOLDER_SONGS, PLACEHOLDER_AUDIO_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.ALL_MUSIC);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 'p1', name: 'Gospel Musics', songs: [] },
    { id: 'p2', name: 'Pop Music', songs: PLACEHOLDER_SONGS.filter(s => s.genre === 'Electronic' || s.genre === 'Lo-fi') },
    { id: 'p3', name: 'R & B', songs: [] },
    { id: 'p4', name: 'West Life', songs: [] },
    { id: 'p5', name: 'Afro Beat', songs: [] },
    { id: 'p6', name: 'Rock', songs: [] },
  ]);
  const [allMusic, setAllMusic] = useState<Song[]>(PLACEHOLDER_SONGS);
  const [favouriteSongs, setFavouriteSongs] = useState<Song[]>([]);
  const [recentSongs, setRecentSongs] = useState<Song[]>([]);

  // Simulate initial song load
  useEffect(() => {
    if (allMusic.length > 0 && !currentSong) {
      setCurrentSong(allMusic[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleSongSelect = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Add to recent songs, ensuring no duplicates and limited history
    setRecentSongs((prev) => {
      const filtered = prev.filter(s => s.id !== song.id);
      return [song, ...filtered].slice(0, 10); // Keep last 10 unique songs
    });
  }, []);

  const handleNextSong = useCallback(() => {
    if (!currentSong) return;
    const currentIndex = allMusic.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % allMusic.length;
    handleSongSelect(allMusic[nextIndex]);
  }, [currentSong, allMusic, handleSongSelect]);

  const handlePrevSong = useCallback(() => {
    if (!currentSong) return;
    const currentIndex = allMusic.findIndex((s) => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + allMusic.length) % allMusic.length;
    handleSongSelect(allMusic[prevIndex]);
  }, [currentSong, allMusic, handleSongSelect]);

  const handleSongEnd = useCallback(() => {
    handleNextSong(); // Play next song when current one ends
  }, [handleNextSong]);

  const handleAddPlaylist = useCallback((name: string) => {
    const newPlaylist: Playlist = {
      id: `p${playlists.length + 1}`,
      name: name,
      songs: [],
    };
    setPlaylists((prev) => [...prev, newPlaylist]);
    setCurrentView(AppView.PLAYLISTS);
  }, [playlists.length]);

  const handleAddToPlaylist = useCallback((playlistId: string, song: Song) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, songs: [...playlist.songs.filter(s => s.id !== song.id), song] }
          : playlist
      )
    );
  }, []);


  const renderMainContent = useCallback(() => {
    switch (currentView) {
      case AppView.ALL_MUSIC:
        return <SongList songs={allMusic} onSongSelect={handleSongSelect} currentPlayingSongId={currentSong?.id || null} />;
      case AppView.FAVOURITES:
        return <SongList songs={favouriteSongs} onSongSelect={handleSongSelect} currentPlayingSongId={currentSong?.id || null} />;
      case AppView.PLAYLISTS:
        return <PlaylistManager playlists={playlists} onAddPlaylist={handleAddPlaylist} onSongSelect={handleSongSelect} currentPlayingSongId={currentSong?.id || null} onAddToPlaylist={handleAddToPlaylist}/>;
      case AppView.RECENT_MUSIC:
        return <SongList songs={recentSongs} onSongSelect={handleSongSelect} currentPlayingSongId={currentSong?.id || null} />;
      case AppView.AI_ASSISTANT:
        return <AIAssistant listeningHistory={recentSongs.slice(0, 5)} onSongSelect={handleSongSelect} />;
      case AppView.IMAGE_GENERATOR:
        return <ImageGenerator />;
      case AppView.VOICE_ASSISTANT:
        return <VoiceAssistant />;
      default:
        return <h2 className="text-2xl font-bold text-white p-6">Welcome to Dani-X Listen!</h2>;
    }
  }, [currentView, allMusic, favouriteSongs, playlists, recentSongs, currentSong?.id, handleSongSelect, handleAddPlaylist, handleAddToPlaylist]);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100 pb-24"> {/* pb-24 for player height */}
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        playlists={playlists.map(p => ({id: p.id, name: p.name}))}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        {renderMainContent()}
      </main>
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNextSong}
        onPrev={handlePrevSong}
        onSongEnd={handleSongEnd}
      />
    </div>
  );
};

export default App;