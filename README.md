# oesc_pdf

Violentmonkey example script to save images from "AriaViewer" reader.  For educational purposes.

probably works with tampermonkey.  Greasemonkey did not work (in firefox).

Navigating to the page will cause the userscript to traverse the document and save every page image to the default downloads directory for your browser (files named p1.png, p2.png, etc).
Note - it does not know when to stop.  It will continue saving the last page until you close the tab.  Keep an eye on it.


Converting the images to a pdf and ocr'ing it is left as an exercise for the reader.  [img2pdf](https://github.com/myollie/img2pdf)https://github.com/myollie/img2pdf) and [ocrmypdf](https://github.com/ocrmypdf/OCRmyPDF) are tools worth exploring.
