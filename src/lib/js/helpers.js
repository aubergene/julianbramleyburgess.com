export const site_name = 'Julian Bramley Burgess';
export const email = 'hello@julianbramleyburgess.com';

export function to_sentence(
	items,
	opts = {
		word_connector: ', ',
		last_word_connector: ' and ',
		two_words_connector: ' and '
	}
) {
	items = compact(items);

	if (items.length < 2) return items;
	if (items.length == 2) return items.join(opts.two_words_connector);
	return items.slice(0, -2).join(opts.word_connector) + opts.last_word_connector + items.at(-1);
}

export function compact(arr) {
	return arr.filter((d) => d !== undefined && d !== null);
}

export function slugify(str) {
	return str
		.toLowerCase()
		.replaceAll(/[^a-z0-9]+/g, ' ')
		.trim()
		.replaceAll(/\s+/g, '-');
}

export function pluck(obj, ...keys) {
	const out = {};
	keys.forEach((k) => {
		out[k] = obj[k];
	});
	return out;
}
