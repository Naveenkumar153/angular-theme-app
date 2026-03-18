export interface ThemeScheme {
    readonly name:string, readonly value:string, readonly title:string, readonly symbol:string,
};

export const THEME_SCHEMES:ThemeScheme[]=[
    { value: 'light', name: 'Light', title:'Light mode', symbol:'☀️' },
    { value: 'dark', name: 'Dark', title:'Dark mode', symbol:'🌙' },
    { value: 'light dark', name: 'System', title:'System mode', symbol:'💻' },
];