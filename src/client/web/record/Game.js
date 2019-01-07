import React, { memo } from 'react'

import stringFormat from 'string-format'

const Assignee = memo(({
	boxArtTemplateUrl, name,
}) => (
	<div className="layout-column">
		<div>
			<img
				src={stringFormat(
					boxArtTemplateUrl, { width: 144, height: 240 },
				)}
				alt={name}
			/>
		</div>
		<div>{name}</div>
	</div>
))

export default Assignee
