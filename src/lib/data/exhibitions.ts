import exhibitionRows from '$lib/data/exhibitions.csv';

export const exhibitions = exhibitionRows.map((row) => {
	return {
		year: row.year,
		work: row.work,
		work_url: row.work_url,
		show_name: row.show_name,
		show_url: row.show_url,
		location: row.location,
		location_url: row.location_url,
		city: row.city,
	};
});
