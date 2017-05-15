function logInput(src) {
  if (src.type == 'check') {
    person[src.header.innerHTML] = [];
    for (i = 0; i < src.checkboxes.length; i++) {
      if (src.checkboxes[i].checked) {
        person[src.header.innerHTML].push(src.labels[i]);
      }
    }
  } else {
    person[src.subHeader.innerHTML] = src.text.value;
  }
}
