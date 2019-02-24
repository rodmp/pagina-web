import React, { memo } from 'react'

import HowItWorks from 'sls-aws/src/client/web/static/HowItWorks'
import TermsOfService from 'sls-aws/src/client/web/static/TermsOfService'
import PrivacyPolicy from 'sls-aws/src/client/web/static/PrivacyPolicy'
import CookiePolicy from 'sls-aws/src/client/web/static/CookiePolicy'
import RulesOfUse from 'sls-aws/src/client/web/static/RulesOfUse'
import AccountSettings from 'sls-aws/src/client/web/static/AccountSettings'
import SuccessPage from 'sls-aws/src/client/web/static/SuccessPage'

import withModuleContext from 'sls-aws/src/client/util/withModuleContext'


import staticModuleConnector from 'sls-aws/src/client/logic/static/connectors/staticModuleConnector'

export const StaticModuleUnconnected = memo(({ staticPageType, pageContent }) => {
	switch (staticPageType) {
		case 'howItWorks':
			return <HowItWorks />
		case 'termsOfService':
			return <TermsOfService />
		case 'privacyPolicy':
			return <PrivacyPolicy />
		case 'cookiePolicy':
			return <CookiePolicy />
		case 'rulesOfUse':
			return <RulesOfUse />
		case 'accountSettings':
			return <AccountSettings />
		case 'successPage':
			return <SuccessPage pageContent={pageContent} />
		default:
			return <div>Unsuported static page type: {staticPageType}</div>
	}
})

export default withModuleContext(staticModuleConnector(StaticModuleUnconnected))
