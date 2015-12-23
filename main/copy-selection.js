
module.exports = () =>
	atom.clipboard.write(window.getSelection().toString());
