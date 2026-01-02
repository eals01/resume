export type Language = 'no' | 'en'

export type LocalizedString = {
    [L in Language]: string;
}

export type Experience = {
    title: LocalizedString;
    institution: LocalizedString;
    date: LocalizedString;
    location: string;
    description?: LocalizedString;
}