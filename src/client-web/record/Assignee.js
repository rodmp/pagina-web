import React, { memo } from 'react'

const Assignee = memo(({
	description, displayName, image, username,
}) => (
	<a
		href={`http://www.twitch.tv/${username}`}
		rel="noopener noreferrer"
		target="_blank"
	>
		<div className="layout-row">
			<img src={image} alt={username} />
			<div className="layout-column">
				<div>{displayName}</div>
				<div>{description}</div>
			</div>
		</div>
	</a>
))

export default Assignee
