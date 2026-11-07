# Ads — neojunkcity.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/neojunkcity/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is empty. `afterQuickAnswer.scriptSrc` is empty. `adsConfig.scriptSrc` is empty. `invokeBase` is empty. No key from another game is stored here.

`analytics.gaId` in `sites/neojunkcity/site.config.ts` is an empty string. The base layout does not load a GA4 tag.

Adult and sensitive categories stay off. The 404 page does not render a slot.
