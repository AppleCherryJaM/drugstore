const DB = {
	users: [
		{
			id: 1,
			email: "test@testmail.com",
			password: "qwerty"
		}
	],
	stores : [
		{
			id : 1,
			name : "Some Store",
			location: {
				lat: 46.5807833,
				lng: 30.7838709
			},
			address: "проспект Добровольського, 109/1, Одеса, Одеська область, 65069",
			drugs : [
				{
					id: 1,
					name: "Paracetomol",
					prise: "12$"
				}
			]
		}
	]
}

module.exports = DB;