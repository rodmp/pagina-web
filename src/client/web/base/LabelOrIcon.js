import React, { memo } from 'react'

import { ternary } from 'sls-aws/src/shared/util/ramdaPlus'
import VariableIcon from 'sls-aws/src/client/web/base/VariableIcon'

export default memo(({ label, icon }) => ternary(
	icon,
	<VariableIcon icon={icon} />,
	<span>{label}</span>,
))
