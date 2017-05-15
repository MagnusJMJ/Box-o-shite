function moveOn(skip) {
  logInput(pages[curPage][curSub]);

  pages[curPage][curSub].all.hide();

  if (skip || curSub == pages[curPage].length-1) {
    curPage++;
    curSub = 0;
  } else {
    curSub++;
  }

  if (pages[curPage == undefined]) {
    curPage = pages.length-1;
  }

  pages[curPage][curSub].all.show();
}
