export interface CardDetails {
  id: number;
  player: PlayerProps;
}

export interface PlayerProps {
  firstname: string;
  lastname: string;
  birthday: string;
  image?: string;
}

export interface LazyImageProps {
  id: number;
}

export interface ButtonProps {
  active?: boolean;
}
