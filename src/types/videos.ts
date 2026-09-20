export type VideoType = "movie" | "series";

export type VideoQuality =
  | "360p"
  | "480p"
  | "720p"
  | "1080p"
  | "1440p"
  | "2160p";

export interface Genre {
  id: number;
  name: string;
}

export interface LiveRoom {
  id: number;

  title: string;

  peoples: Array<{
    id: number;
    name: string;
    avatar: string;
  }>;

  video: Video;
}

export interface Video {
  id: number;

  name: string;
  description: string;

  type: VideoType;

  poster: string | null;
  backdrop: string | null;

  genres: Genre[];

  releaseYear: number;
  durationSec: number | null;

  rating: number | null;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface Season {
  id: string;
  videoId: string;

  number: number;
  name: string | null;

  episodes: Episode[];
}

export interface Episode {
  id: string;
  seasonId: string;

  number: number;

  name: string;
  description: string;

  durationSec: number;

  poster: string | null;

  sources: VideoSource[];
}

export interface VideoSource {
  url: string;
  quality: VideoQuality;
}

export interface VideoProgress {
  videoId: string;

  positionSec: number;
  durationSec: number;

  progressPercent: number;

  updatedAt: string;
}