import React, { memo } from 'react'
import classNames from 'classnames'

import { orNull } from 'root/src/shared/util/ramdaPlus'

import Link from 'root/src/client/web/base/Link'
import Header from 'root/src/client/web/typography/Header'
import Title from 'root/src/client/web/typography/Title'
import SubTitle from 'root/src/client/web/typography/SubTitle'

import MaxWidthContainer from 'root/src/client/web/base/MaxWidthContainer'
import withModuleContext from 'root/src/client/util/withModuleContext'

import bannerHeaderConnector from 'root/src/client/logic/header/connectors/bannerHeaderConnector'

import { primaryColor, secondaryColor } from 'root/src/client/web/commonStyles'

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
		color: primaryColor,
		'&:hover': {
			color: secondaryColor,
		},
	},
}

export const BannerHeaderUnconnected = memo(({
	bannerImage, bannerImageText, bannerImageSubText, textWithBg, bannerSubText, linkLabel, linkRouteId,
	classes, createNewDareActive,
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
		</div>
		<div className="layout-row layout-align-center">
			<MaxWidthContainer>
				<div className="flex layout-column">
					<div className="layout-row layout-align-center">
						<Header>{bannerSubText}</Header>
					</div>
					{orNull(
						createNewDareActive,
						<div>
							<Link routeId={linkRouteId}>
								<span className={classes.newDare}>{linkLabel}</span>
							</Link>
						</div>,
					)}
				</div>
			</MaxWidthContainer>
		</div>
	</div>
))

export default withModuleContext(
	bannerHeaderConnector(BannerHeaderUnconnected, styles),
)
