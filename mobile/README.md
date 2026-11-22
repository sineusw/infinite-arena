# Infinite Arena — iOS app (Capacitor)

The app bundles the same `index.html` as the website. iOS-only code paths in `index.html` switch on when `Capacitor.isNativePlatform()` is true:
Apple In-App Purchase via RevenueCat (+ Restore purchases in Settings), AdMob rewarded revive (with the tracking prompt), native haptics, pause on background, API calls to https://infinite-arena-ten.vercel.app.

## Build (on the Mac)
1. Install Xcode from the App Store, then: `cd mobile && npm install && npm run sync && npm run open`
2. In Xcode: App target → Signing & Capabilities → Team = your Apple Developer team; add the **In-App Purchase** capability.
3. Product → Archive → Distribute App → App Store Connect.

## Before release — replace the placeholders
- `index.html` → `APP_CFG.rcKey` = RevenueCat public iOS key (`appl_...`).
- `index.html` → `APP_CFG.adUnit` = your AdMob rewarded unit ID, and `adTesting:false`.
- `ios/App/App/Info.plist` → `GADApplicationIdentifier` = your AdMob app ID (`ca-app-pub-...~...`).

## App Store Connect in-app purchases (product IDs)
Prefix `com.pettygames.infinitearena.` + item id. Consumable: `hearts1` $0.99, `hearts2` $1.49, `hearts3` $1.99.
Non-consumable ($0.99 unless noted): `skin_smiley`, `skin_eye`, `skin_beach`, `skin_planet`, `skin_ninja`, `skin_robot`, `skin_fire` ($1.99), `skin_galaxy` ($1.99), `skin_gem` ($2.99), `theme_sunset`, `theme_ice`, `theme_toxic`, `theme_candy`, `theme_retro`, `theme_gold`, `voice_daisy` ($2.99), `voice_mick` ($2.99).
Add the same products in RevenueCat (Products), attached to the App Store app.
