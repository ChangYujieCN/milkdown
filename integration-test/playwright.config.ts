/* Copyright 2021, Milkdown by Mirone. */
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'http://localhost:7000',
    },
};
// eslint-disable-next-line import/no-default-export
export default config;
