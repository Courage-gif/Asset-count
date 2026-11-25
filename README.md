# RTG Asset Count

A simple phone app for the Rainbow Towers Hotel 2026 Asset Verification Exercise.
Teams scan or type each asset once on their phone, and the system builds the room
counting sheets and the final asset register automatically. No more paper and retyping.

**Open the app:** https://courage-gif.github.io/asset-count-live/

## Features
- Sign in with your own username and 4-digit PIN
- Scan an asset's QR code or type the Asset Tag ID (or leave it blank if there's no tag)
- Works with weak signal: entries send by themselves when you're back online
- A separate counting sheet for every room, in the hotel's paper layout
- One final asset register, built as teams count
- Duplicates and moved assets are flagged automatically
- Controllers see every team's progress live
- Excel downloads for room sheets and the final register

## How to sign in
1. Open the link above in Chrome (Android) or Safari (iPhone).
2. Username: your name in small letters with a dot, for example `tsitsi.mugari`.
3. First PIN: `0000`
4. Choose your own 4-digit PIN when asked.
5. Add the app to your home screen so it's easy to find.

Forgot your PIN? Ask your controller to reset it.

## How to count
1. Open your section, for example Floor 5.
2. Tap **Add room** and enter the room, for example Room 512.
3. Scan the QR code, or type the tag.
4. Fill in the description and tap **Save and next**.

## Built with
- HTML and JavaScript (hosted on GitHub Pages)
- Supabase database
- Excel, Google Sheets and Power BI for reports

## Files
| File | Purpose |
| --- | --- |
| `index.html` | The app |
| `config.js` | Supabase connection settings |
| `sw.js` | Lets the app work offline |

## Contact
Built for the Rainbow Towers Finance department as part of the 2026 graduate programme.
For help, contact the system administrator.
