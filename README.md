# Better Drive PDFView
A neat lil extension to modify the default Google Drive PDF view UI for
increased comment space & some other features.

It takes at least 6 seconds for the injection to finish/occur (should be around the same time the PDF pages are loaded).

## Features

1. "Goto" Feature to auto-scroll to selected pages<br>
![](https://raw.githubusercontent.com/Rickaym/Better-Drive-PDFView/master/assets/guide2.png)<br>
2. Reconfigured Proportions for the PDF Viewer
3. Caching and restoring last read page number
4. Light & Dark Mode toggle
5. Built-in dictionary using the [freeDictionaryAPI](https://dictionaryapi.dev/)<br>
![](https://raw.githubusercontent.com/Rickaym/Better-Drive-PDFView/master/assets/guide3.png)<br>
6. `Search On Google`/`Googling` option when copying text<br>
![](https://raw.githubusercontent.com/Rickaym/Better-Drive-PDFView/master/assets/guide4.png)<br>

## Purpose
Gives more space to the comment end of PDF view so that you can read fun
and informative comments better! And additionally packs more functionality
into the view for better and practical reading.

## How-To-Install

1. Clone or [Download](https://github.com/Rickaym/Better-Drive-PDFView/archive/refs/heads/master.zip) this repository & unzip it somewhere
2. Go to `chrome://extensions/` in your chrome
3. Enable Developer Mode<br>
![](https://raw.githubusercontent.com/Rickaym/Better-Drive-PDFView/master/assets/guide.png)

4. Press `Load unpacked`
5. Select the `dist` folder from the unzipped files when a folder selector window comes up
6. Refresh the webpages & you're done!

## How-To-Build

Just do `npm run build` and webpack should take the job from then, all transpiled code goes into `dist/**` which is where the extension code & stuffs are.

## TODO:
Using sided arrow keys (left & right) to skip whole pages
