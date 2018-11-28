# px-cdn

The purpose of this module is to download and prepare static assets for hosting on the cdn.predix-ui.com domain.

For now, this is limited to just downloading fonts for v1 and v2 components and putting them in the expected folder structure.

## Usage

Run `npm run build` to generate the CDN assets. The output of this is contained within the `/dist` folder. The contents of this folder (not including the folder itself) should be copied to the host serving cdn.predix-ui.com.