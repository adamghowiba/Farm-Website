import type { Breed, BreedStats } from './types';

const mapKeyNames = new Map<keyof BreedStats, string>();
mapKeyNames.set('avg_weight', 'avg weight');
mapKeyNames.set('origin', 'country of orgin');
mapKeyNames.set('height', 'avg height');
mapKeyNames.set('fat_content', 'fat content');
mapKeyNames.set('yield', 'slaugther yield');

export const convertBreedKey = (key: keyof BreedStats): string => {
	return mapKeyNames.get(key);
};

export const breeds: Array<Breed> = [
	{
		name: 'aberdeen angus',
		benefits: ['Fattening', 'Temperature Control', 'Genetic Production', 'Fattening'],
		thumbnail: '/images/breeds/aberdeen-angus.webp',
		images: ['/images/breeds/brahma.webp', '/images/breeds/belgian_blue.webp', '/images/breeds/limousine.webp'],
		stats: {
			origin: 'Scotland',
			avg_weight: '750-950kg',
			yield: '65-70%',
		},
		desc: 'The Aberdeen-Angus breed has become widely spread in the world for its high tendency to early maturity as compared to other beef cattle breeds. Quality of meat is high, meat is tender, fine-fibered with good marbling.'
	},
	{
		name: 'charolais',
		benefits: ['Cross-breeding', 'Fattening'],
		stats: {
			origin: 'France',
			avg_weight: '1,000-1,200 kg',
			height: '141-145cm',
			fat_content: '8-11%',
			yield: '65-66%'
		},
		thumbnail: '/images/breeds/charolais.webp',
		desc: 'When fattening, the bulls of the Charolais breed form mainly muscular and not fatty meat tissue. One of the main features of this breed is high weight gains during a long period of time, maybe even up to 2 years.'
	},
	{
		name: 'belgian blue',
		benefits: ['Lean', 'Calving', 'Feed Conversion'],
		thumbnail: '/images/breeds/belgian_blue.webp',
		stats: {
			avg_weight: '1100-1250kg',
			yield: '65-70%'
		},
		desc: 'The Belgian Blue is a breed of beef cattle from Belgium. Its extremely lean, hyper-sculpted, the ultra-muscular physique is termed "double-muscling". The double-muscling phenotype is a heritable condition resulting in an increased number of muscle fibers (hyperplasia), '
	},
	{
		name: 'limousine',
		benefits: ['Fattening', 'Heat Resistant', 'Cross-Breeding'],
		thumbnail: '/images/breeds/limousine.webp',
		stats: {
			origin: 'France',
			avg_weight: '1,000-1,100kg',
			yield: "68-70%",
			height: '135-140cm'
		},
		desc: 'Bulls of Limousine breed are one of the most popular in the beef cattle industry. They are well suited for fattening in stables. Their structures are compact, the meat is tender with good taste and low fat.'
	},
	{
		name: 'brahma',
		benefits: ['Heat Resistant', 'Temperature Control'],
		thumbnail: '/images/breeds/brahma.webp',
		stats: {
			origin: 'United States',
			avg_weight: '800kg'
		},
		desc: 'The Brahman has a high tolerance of heat, sunlight and humidity, and good resistance to parasites. It has been exported to many countries, particularly in the tropics; in Australia, it is the most numerous breed of cattle.'
	},
	{
		name: 'simmental',
		benefits: ['Fattening', 'Cross-Breeding'],
		thumbnail: '/images/breeds/simmental.webp',
		stats: {
			origin: 'European',
			avg_weight: '140kg',
			fat_content: '12%',
			yield: '55-62%'
		},
		desc: 'A distinctive feature of the Simmental breed is the good combination of dairy and meat productivity, whereas the main characteristic feature of beef type Simmental is the high daily weight gain during the whole fattening period. '
	}
];
