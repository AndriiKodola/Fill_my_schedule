
/**
 * Selects contents of a given HTML node
 * @param {HTML node} el 
 */
const selectElementContents = el => {
	let body = document.body, range, sel;
	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
		} catch (e) {
			range.selectNode(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
}

/**
 * Copies selected element to the clipboard
 */
const handleCopyToClipboard = el => {
  selectElementContents(el);
  document.execCommand('copy');

  alert('Table is in clipboard now!');
}

export {
	handleCopyToClipboard
};
