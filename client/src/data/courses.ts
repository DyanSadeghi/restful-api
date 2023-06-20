export type EpisodesT = {
 title: string;
 body: string;
 videoUrl: string;
};

export type CoursesT = {
 id: string;
 title: string;
 body: string;
 price: string;
 episodes: EpisodesT[];
};
