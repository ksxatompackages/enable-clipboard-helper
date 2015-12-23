
((module) => {
	'use strict';

	var CompositeDisposable = require('atom').CompositeDisposable;

	var subscriptions;

	class PackageCliboardHelper {

		activate() {
			subscriptions = new CompositeDisposable();
			subscriptions.add(
				atom.commands.add(
					'.enable-clipboard-helper .text-copiable:not(.disable-clipboard-helper)', {
						'package-clipboard-helper:copy-selection': require('./copy-selection.js')
					}
				)
			);
		}

		deactivate() {
			subscriptions.dispose();
		}

		get subscriptions() {
			return subscriptions;
		}

		get disposables() {
			return subscriptions;
		}

	}

	module.exports = new PackageCliboardHelper();

})(module);
