import { map } from 'ramda'
import React, { memo } from 'react'

import classNames from 'classnames'

import PaymentMethod from 'sls-aws/src/client/web/list/PaymentMethod'
import ProjectCard from 'sls-aws/src/client/web/list/ProjectCard'
import MaxWidthContainer from 'sls-aws/src/client/web/base/MaxWidthContainer'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

import Title from 'sls-aws/src/client/web/typography/Title'
import SubTitle from 'sls-aws/src/client/web/typography/SubTitle'

import List from '@material-ui/core/List'

import listModuleConnector from 'sls-aws/src/client/logic/api/connectors/listModuleConnector'

import Button from 'sls-aws/src/client/web/base/Button'

import mockCardList from 'sls-aws/src/server/api/mocks/creditCardsMock'

const styles = {
	paddingOffset: {
		margin: [[0, -10]],
	},
	list: {
		width: 340,
		margin: '0 auto',
	},
	subtitle: {
		alignSelf: 'flex-start',
		fontWeight: 'bold',
		fontSize: 20,
		margin: '10px 0 25px 0',
	},
	buttons: {
		margin: '10px 0 50px 0',
		width: '100%',
	},
}


export const ListModuleUnconnected = memo(({
	list, listType, classes, listTitle, listSubtitle, listControls,
}) => {
	switch (listType) {
		case 'card':
			return (
				<div className="flex layout-row layout-align-center-start">
					<MaxWidthContainer>
						<div className="flex layout-row layout-align-center">
							<div
								className={classNames(
									classes.paddingOffset,
									'layout-row layout-wrap',
								)}
							>
								{map(recordId => (
									<ProjectCard key={recordId} recordId={recordId} />
								), list)}
							</div>
						</div>
					</MaxWidthContainer>
				</div>
			)
		case 'list':
			return (
				<List className={classNames('layout-column layout-align-start-center', classes.list)}>
					<Title notUpperCase>{listTitle}</Title>
					<SubTitle additionalClass={classes.subtitle}>{listSubtitle}</SubTitle>
					{map(card => (
						<PaymentMethod key={card.lastFour} card={card} />
					), mockCardList)}
					<div className={classes.buttons}>
						{map(({ title, routeId, buttonType }) => (
							<Button
								type="button"
								key={title}
								// onClick={onClick}
								buttonType={buttonType}
								isStyled
								disableRipple
							>
								{title}
							</Button>
						), listControls)}
					</div>
				</List>
			)
		default:
			return (
				<List>
					{map(recordId => (
						<ProjectCard key={recordId} recordId={recordId} />
					), list)}
				</List>)
	}
})

export default withModuleContext(
	listModuleConnector(ListModuleUnconnected, styles),
)
