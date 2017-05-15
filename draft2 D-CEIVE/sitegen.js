function generateSite() {
  for (i = 0; i < meta.length; i++) {
    pages[i] = [];

    switch (meta[i][0]) {
      case 'What is your sex?':
      case 'How old are you?':
      case 'Who are you attracted to?':
      case 'Do you have any of these Hobbies':
      case 'Do you exercise any of these sports?':
      case 'Do you suffer from any of these medical conditions?':
      case 'Are you covered by any of these types of insurance?':
      case 'Are you a follower of any of these religions?':
        pages[i].push(new Page('check', meta[i][0], meta[i]));
        break;
      case 'frontpage':
        pages[i].push(new Page('start', meta[i][0], meta[i][1]));
        break;
      case 'endpage':
        pages[i].push(new Page('end', meta[i][0], meta[i][1]));
        break;
      default:
        for (j = 0; j < meta[i].length-1; j++) {
          pages[i].push(new Page('text', meta[i][0], meta[i][j+1]));
        }
    }
  }
}
