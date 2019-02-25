import React from 'react'
import ANCHORS from 'root/src/shared/constants/anchors'

const Anchors = ({ classes }) => (
	<div className={classes.listWrapper}>
		<ul className={classes.listOfLinks}>
			<li>
				<a href={`#${ANCHORS.CHANGE_POLICY}`}>Changes to This Policy</a>
			</li>
			<li>
				<a href={`#${ANCHORS.WHO_WE_ARE}`}>Who We Are</a>
			</li>
			<li>
				<a href={`#${ANCHORS.HOW_APPLIES}`}> How This Policy Applies</a>
			</li>
			<li>
				<a href={`#${ANCHORS.COLLECT_AND_RECIVE}`}> What We Collect and Receive</a>
			</li>
			<li>
				<a href={`#${ANCHORS.HOW_USE_INFO}`}>How We Use This Information</a>
			</li>
			<li>
				<a href={`#${ANCHORS.UNION_USER}`}> European Union Users</a>
			</li>
			<li>
				<a href={`#${ANCHORS.HOW_SHARE}`}>How This Information Is Shared </a>
			</li>
			<ul className={classes.listOfLinks}>
				<li>
					<a href={`#${ANCHORS.SHARED_PUBLICY}`}>Information that’s shared publicly</a>
				</li>
				<li>
					<a href={`#${ANCHORS.NOT_SHARED_PUBLICY}`}>Information that isn’t shared publicly</a>
				</li>
				<li>
					<a href={`#${ANCHORS.SHARED_WITH_TRUSTED}`}>
            Information that’s shared with trusted third-party services
					</a>
				</li>
				<li>
					<a href={`#${ANCHORS.SHARED_WITH_CREATORS}`}>
            Information that’s shared with creators and collaborators
					</a>
				</li>
				<li>
					<a href={`#${ANCHORS.SHARED_WITH_DOUBLE_DOG}`}>
            Information that’s shared to protect DoubleDog and comply with the law
					</a>
				</li>
				<li>
					<a href={`#${ANCHORS.LINKS_TO_SERVICE}`}>Links to other websites and services</a>
				</li>
			</ul>

			<li>
				<a href={`#${ANCHORS.RETENTION}`}>Retention</a>
			</li>
			<li>
				<a href={`#${ANCHORS.DATA_TRANSFER}`}>Data Transfers</a>
			</li>
			<li>
				<a href={`#${ANCHORS.RIGHTS}`}> Your Rights</a>
			</li>
			<li>
				<a href={`#${ANCHORS.NOTIFICATION}`}>Email and Mobile Notifications</a>
			</li>
			<li>
				<a href={`#${ANCHORS.SECURE}`}>Security</a>
			</li>
			<li>
				<a href={`#${ANCHORS.DATA_PROTECT_OFFICER}`}>Data Protection Officer</a>
			</li>
			<li>
				<a href={`#${ANCHORS.DATA_PROTECT_AUTHORITY}`}>Data Protection Authority</a>
			</li>
			<li>
				<a href={`#${ANCHORS.CHILDREN}`}>Children</a>
			</li>
		</ul>
	</div>
)

export default Anchors
