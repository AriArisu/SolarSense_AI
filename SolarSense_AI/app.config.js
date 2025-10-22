import 'dotenv/config';

export default {
  expo: {
    name: "SolarSense_AI",
    slug: "SolarSense_AI",
    version: "1.0.0",
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
