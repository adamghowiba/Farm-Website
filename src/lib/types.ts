export interface BreedStats {
	origin?: string;
	avg_weight: string;
	height?: string;
	fat_content?: string;
	yield?: string;
}

export interface Breed {
	name: string;
	benefits: Array<string>;
	desc: string;
	thumbnail: string;
	images?: string[];
	stats: BreedStats;
}
