import React, { memo } from 'react'

import { ternary } from 'root/src/shared/util/ramdaPlus'
import VariableIcon from 'root/src/client/web/base/VariableIcon'

export default memo(({ label, icon }) => ternary(
	icon,
	<VariableIcon icon={icon} />,
	<span>{label}</span>,
))
