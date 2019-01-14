import React, { memo } from 'react'
import classNames from 'classnames'

import Link from 'sls-aws/src/client/web/base/Link'
import Header from 'sls-aws/src/client/web/typography/Header'
import Title from 'sls-aws/src/client/web/typography/Title'

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
		marginTop: 130, // half banner height minus half text height
		position: 'absolute',
		color: 'white',
	},
	overlay: {
		backgroundColor: 'rgba(128, 0, 128, 0.41)',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
	},
}

export const BannerHeaderUnconnected = memo(({
	bannerImage, bannerImageText, bannerSubText, linkLabel, linkRouteId,
	classes,
}) => (
	<div className={classNames(classes.bottomMargin, 'layout-column')}>
		<div
			className={classNames(classes.banner, 'flex layout-row')}
		>
			<div
				className={classNames(classes.bannerBg, 'flex')}
				style={{ backgroundImage: `url(${bannerImage})` }}
			/>
			<div className={classes.overlay} />
			<div className={classes.textOverlay}>
				<Title>{bannerImageText}</Title>
			</div>
		</div>
		<div className="layout-row layout-align-center">
			<MaxWidthContainer>
				<div className="flex layout-column">
					<div className="layout-row layout-align-center">
						<Header>{bannerSubText}</Header>
					</div>
					<div>
						<Link routeId={linkRouteId}>{linkLabel}</Link>
					</div>
				</div>
			</MaxWidthContainer>
		</div>
	</div>
))

export default withModuleContext(
	bannerHeaderConnector(BannerHeaderUnconnected, styles),
)
