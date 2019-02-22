import React, { memo } from 'react'
import classNames from 'classnames'

import MenuItem from '@material-ui/core/MenuItem'

import MenuItem from '@material-ui/core/MenuItem'

import Link from 'sls-aws/src/client/web/base/Link'
import Header from 'sls-aws/src/client/web/typography/Header'
import Title from 'sls-aws/src/client/web/typography/Title'
import SubTitle from 'sls-aws/src/client/web/typography/SubTitle'

import MaxWidthContainer from 'sls-aws/src/client/web/base/MaxWidthContainer'
import withModuleContext from 'sls-aws/src/client/util/withModuleContext'

import bannerHeaderConnector from 'sls-aws/src/client/logic/header/connectors/bannerHeaderConnector'

const styles = {
	bottomMargin: {
		marginBottom: 22,
	},
	banner: {
		height: 300,
		position: 'relative',
	},
	bannerBg: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundColor: 'black',
	},
	textOverlay: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		textAlign: 'center',
		position: 'absolute',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textBox: {
		padding: '16px 0',
		backgroundColor: 'rgba(128, 0, 128, 0.7)',
		borderRadius: 30,
		margin: '0 auto',
	},
	overlay: {
		backgroundColor: 'rgba(128, 0, 128, 0.41)',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
	},
	newDare: {
		fontSize: 18,
		letterSpacing: 1,
		fontWeight: 'bold',
		color: '#800080',
	},
}

export const BannerHeaderUnconnected = memo(({
	bannerImage, bannerImageText, bannerImageSubText, textWithBg, bannerSubText, linkLabel, linkRouteId,
	classes,
}) => (
	<div className={classNames(classes.bottomMargin, 'layout-column')}>
		<div
			className={classNames(classes.banner, 'layout-row')}
		>
			<div
				className={classNames(classes.bannerBg, 'flex')}
				style={{ backgroundImage: `url(${bannerImage})` }}
			/>
			<div className={classes.overlay} />
			<div className={classes.textOverlay}>
				<div className={classNames({ [classes.textBox]: textWithBg })}>
					<Title>{bannerImageText}</Title>
					<SubTitle>{bannerImageSubText}</SubTitle>
				</div>
			</div>
			<div className="layout-row layout-align-center">
				<MaxWidthContainer>
					<div className="flex layout-column">
						<div className="layout-row layout-align-center">
							<Header>{bannerSubText}</Header>
						</div>
						<div>
							<Link routeId={linkRouteId}>
								<MenuItem className={classes.newDare}>{linkLabel}</MenuItem>
							</Link>
						</div>
					</div>
					<div>
						<Link routeId={linkRouteId}>
							<MenuItem className={classes.newDare}>{linkLabel}</MenuItem>
						</Link>
					</div>
				</div>
			</MaxWidthContainer>
		</div>
	</div>
))

export default withModuleContext(
	bannerHeaderConnector(BannerHeaderUnconnected, styles),
)
