
export default favorites => ({
	id: favorites.pk,
	title: favorites.title,
	image: favorites.image,
	description: favorites.description,
	assignees: favorites.assignees,
	games: favorites.games,
	myFavorites: favorites.favoritesAmount,
})
