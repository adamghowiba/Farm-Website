export interface Breed {
    name: string
    benefits: Array<string>
    desc: string
    origin?: string
    weight: number
    height?: number | string
    fat_content?: number,
    yield?: number
}