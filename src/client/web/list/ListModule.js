import { map } from 'ramda'
import React, { memo, useState } from 'react'

import classNames from 'classnames'

import PaymentMethod from 'sls-aws/src/client/web/list/PaymentMethod'
import ProjectCard from 'sls-aws/src/client/web/list/ProjectCard'
import MaxWidthContainer from 'sls-aws/src/client/web/base/MaxWidthContainer'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

import modalStyle from 'sls-aws/src/client/web/list/modalStyle'
import Title from 'sls-aws/src/client/web/typography/Title'
import SubTitle from 'sls-aws/src/client/web/typography/SubTitle'
import LinkButton from 'sls-aws/src/client/web/base/LinkButton'

import List from '@material-ui/core/List'

import listModuleConnector from 'sls-aws/src/client/logic/api/connectors/listModuleConnector'

import mockCardList from 'sls-aws/src/server/api/mocks/creditCardsMock'
import { DeletePaymentModal } from './DeletePaymentModal'

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
	...modalStyle,
}


export const ListModuleUnconnected = memo(({
	list, listType, classes, listTitle, listSubtitle, listControls,
}) => {
	const [modalOpen, setModalOpen] = useState(false)
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
					<DeletePaymentModal
						open={modalOpen}
						closeModal={() => setModalOpen(false)}
						classes={classes}
					/>
					<Title notUpperCase>{listTitle}</Title>
					<SubTitle additionalClass={classes.subtitle}>{listSubtitle}</SubTitle>
					{map(card => (
						<PaymentMethod key={card.lastFour} card={card} openModal={() => setModalOpen(true)} />
					), mockCardList)}
					<div className={classes.buttons}>
						{map(({ title, routeId, buttonType }) => (
							<LinkButton
								type="button"
								key={title}
								buttonType={buttonType}
								routeId={routeId}
								isStyled
								disableRipple={buttonType === 'noBackgroundButton'}
							>
								{title}
							</LinkButton>
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
