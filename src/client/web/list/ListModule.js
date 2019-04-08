import { map } from 'ramda'
import React, { memo, useState } from 'react'

import classNames from 'classnames'
import InfiniteScroll from 'react-infinite-scroller'
import { ternary } from 'root/src/shared/util/ramdaPlus'
import PaymentMethod from 'root/src/client/web/list/PaymentMethod'
import ProjectCard from 'root/src/client/web/list/ProjectCard'
import MaxWidthContainer from 'root/src/client/web/base/MaxWidthContainer'
import withModuleContext from 'root/src/client/util/withModuleContext'

import modalStyle from 'root/src/client/web/list/modalStyle'
import Title from 'root/src/client/web/typography/Title'
import SubTitle from 'root/src/client/web/typography/SubTitle'
import LinkButton from 'root/src/client/web/base/LinkButton'

import List from '@material-ui/core/List'

import listModuleConnector from 'root/src/client/logic/api/connectors/listModuleConnector'

import { DeletePaymentModal } from './DeletePaymentModal'

const styles = {
	paddingOffset: {
		justifyContent: 'center',
		borderRadius: 5,
		boxShadow: '0 3px 26px 0 rgba(0, 0, 0, 0.16)',
		border: 'solid 0.2px #800080',
		backgroundColor: '#ffffff',
		padding: 20,
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

export const CardList = ({
	list, currentPage, hasMore, classes, getNextPage,
}) => (
	<div className="flex layout-row layout-align-center-start">
		<MaxWidthContainer>
			<div className="flex layout-row layout-align-center">
				<InfiniteScroll
					pageStart={0}
					loadMore={() => getNextPage(currentPage)}
					hasMore={hasMore}
				>
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
				</InfiniteScroll>
			</div>
		</MaxWidthContainer>
	</div>
)

const UniversalList = ({
	list, classes, listTitle, listSubtitle, listControls, deletePaymentMethod, setDefaultPaymentMethod,
}) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [modalRecordId, setModalRecordId] = useState(null)
	return (
		<List className={classNames('layout-column layout-align-start-center', classes.list)}>
			<DeletePaymentModal
				open={modalOpen}
				closeModal={() => {
					setModalRecordId(null)
					setModalOpen(false)
				}}
				classes={classes}
				modalRecordId={modalRecordId}
				deletePaymentMethod={deletePaymentMethod}
			/>
			<Title notUpperCase>{listTitle}</Title>
			<SubTitle additionalClass={classes.subtitle}>{listSubtitle}</SubTitle>
			{map(recordId => (
				<PaymentMethod
					key={recordId}
					recordId={recordId}
					openModal={async () => {
						setModalRecordId(recordId)
						setModalOpen(true)
					}}
					onClick={setDefaultPaymentMethod}
				/>
			), list)}
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
}

export const ListModuleUnconnected = memo((props) => {
	switch (props.listType) {
		case 'card':
			return CardList(props)
		case 'list':
			return UniversalList(props)
		default:
			return (
				<List>
					{map(recordId => (
						<ProjectCard key={recordId} recordId={recordId} />
					), props.list)}
				</List>
			)
	}
})

export default withModuleContext(
	listModuleConnector(ListModuleUnconnected, styles),
)
