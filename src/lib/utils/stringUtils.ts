export const parseBreedName = (string: string): string => {
    return string.trim().replace(' ', '-').toLowerCase();
}

export const unparseBreedName = (string: string): string => {
    return string.trim().replace('-', ' ').toLowerCase();
}