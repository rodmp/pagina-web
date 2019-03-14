import React, { memo } from 'react'

import HowItWorks from 'root/src/client/web/static/HowItWorks'
import TermsOfService from 'root/src/client/web/static/TermsOfService'
import PrivacyPolicy from 'root/src/client/web/static/PrivacyPolicy'
import CookiePolicy from 'root/src/client/web/static/CookiePolicy'
import RulesOfUse from 'root/src/client/web/static/RulesOfUse'
import AccountSettings from 'root/src/client/web/static/AccountSettings'
import SuccessPage from 'root/src/client/web/static/SuccessPage'
import StepHeaderModule from 'root/src/client/web/static/SteperHeaderModule'

import withModuleContext from 'root/src/client/util/withModuleContext'


import staticModuleConnector from 'root/src/client/logic/static/connectors/staticModuleConnector'

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
		case 'SteperHeaderModule':
			return <StepHeaderModule />
		default:
			return <div>Unsuported static page type: {staticPageType}</div>
	}
})

export default withModuleContext(staticModuleConnector(StaticModuleUnconnected))
