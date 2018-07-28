import React from 'react'

import TextField from '@material-ui/core/TextField';


export const InputFieldHof = (
	changeInput,
) => (props) => (
	<TextField
		id="name"
		label={}
		fullWidth
		value={this.state.name}
		onChange={changeInput}
	/>
)
