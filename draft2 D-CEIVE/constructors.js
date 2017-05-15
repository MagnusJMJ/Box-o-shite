function Page(type, arg1, arg2) {
  this.type = type;
  this.all  = createDiv('');

  switch (type) {
    case 'text':
      this.header    = createElement('h1', arg1);
      this.subHeader = createElement('h2', arg2);
      this.text = createInput('');
      this.next = createButton('Submit');
      this.next.mousePressed(function() {moveOn(false);});
      this.next.class('button1');
      this.skip = createButton('Skip');
      this.skip.mousePressed(function() {moveOn(true);});
      break;
    case 'check':
      this.header    = createElement('h1', arg1);
      // this.checkboxes = createDiv('');
      this.checkboxes = [];
      for (n = 1; n < arg2.length; n++) {
        var temp = createCheckbox(arg2[n], false);
        temp.id(arg2[n]);
        this.checkboxes.push(temp);
      }
      this.next = createButton('Submit');
      this.next.mousePressed(function() {moveOn(false);});
      this.next.class('button1');
      this.skip = createButton('Skip');
      this.skip.mousePressed(function() {moveOn(true);});
      break;
    case 'start':
      this.image = createImg('assets/firstpage.jpg');
      this.begin = createButton('Begin');
      this.begin.mousePressed(function() {moveOn(false);});
      this.begin.id('start');
      break;
    case 'end':
      this.image = createImg('assets/lastpage.jpg');
      break;
    default:
      throw 'Invalid page type! (Types are "text", "check", "start" and "end")';
  }

  for (obj in this) {
    try {
      this[obj].parent(this.all);
    }
    catch(e) {
      if (this[obj] instanceof Array) {
        for (n = 0; n < this[obj].length; n++) {
          this[obj][n].hide();
        }
      }
    }
  }

  this.all.hide();
}
